# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

from __future__ import absolute_import, print_function, unicode_literals

import argparse
import os
import re
import sys
from buildconfig import topsrcdir, topobjdir
from mozbuild.backend.configenvironment import PartialConfigEnvironment
import mozpack.path as mozpath


def process_define_file(output, input):
    '''Creates the given config header. A config header is generated by
    taking the corresponding source file and replacing some #define/#undef
    occurences:
        "#undef NAME" is turned into "#define NAME VALUE"
        "#define NAME" is unchanged
        "#define NAME ORIGINAL_VALUE" is turned into "#define NAME VALUE"
        "#undef UNKNOWN_NAME" is turned into "/* #undef UNKNOWN_NAME */"
        Whitespaces are preserved.

    As a special rule, "#undef ALLDEFINES" is turned into "#define NAME
    VALUE" for all the defined variables.
    '''

    path = os.path.abspath(input)

    config = PartialConfigEnvironment(topobjdir)

    if mozpath.basedir(path,
                       [mozpath.join(topsrcdir, 'js/src')]) and \
            not config.substs.get('JS_STANDALONE'):
        config = PartialConfigEnvironment(mozpath.join(topobjdir, 'js', 'src'))

    with open(path, 'rU') as input:
        r = re.compile('^\s*#\s*(?P<cmd>[a-z]+)(?:\s+(?P<name>\S+)(?:\s+(?P<value>\S+))?)?', re.U)
        for l in input:
            m = r.match(l)
            if m:
                cmd = m.group('cmd')
                name = m.group('name')
                value = m.group('value')
                if name:
                    if name == 'ALLDEFINES':
                        if cmd == 'define':
                            raise Exception(
                                '`#define ALLDEFINES` is not allowed in a '
                                'CONFIGURE_DEFINE_FILE')

                        def define_for_name(name, val):
                            """WebRTC files like to define WINVER and _WIN32_WINNT
                            via the command line, which raises a mass of macro
                            redefinition warnings.  Just handle those macros
                            specially here."""
                            define = "#define {name} {val}".format(name=name, val=val)
                            if name in ('WINVER', '_WIN32_WINNT'):
                                return '#if !defined({name})\n{define}\n#endif' \
                                    .format(name=name, define=define)
                            return define
                        defines = '\n'.join(sorted(
                            define_for_name(name, val)
                            for name, val in config.defines['ALLDEFINES'].iteritems()))
                        l = l[:m.start('cmd') - 1] \
                            + defines + l[m.end('name'):]
                    elif cmd == 'define':
                        if value and name in config.defines:
                            l = l[:m.start('value')] \
                                + str(config.defines[name]) \
                                + l[m.end('value'):]
                    elif cmd == 'undef':
                        if name in config.defines:
                            l = l[:m.start('cmd')] \
                                + 'define' \
                                + l[m.end('cmd'):m.end('name')] \
                                + ' ' \
                                + str(config.defines[name]) \
                                + l[m.end('name'):]
                        else:
                            l = '/* ' + l[:m.end('name')] + ' */' + l[m.end('name'):]

            output.write(l)

    deps = {path}
    deps.update(config.get_dependencies())
    return deps


def main(argv):
    parser = argparse.ArgumentParser(
        description='Process define files.')

    parser.add_argument('input', help='Input define file.')

    args = parser.parse_args(argv)

    return process_define_file(sys.stdout, args.input)


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
