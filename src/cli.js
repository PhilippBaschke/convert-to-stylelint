import pkg from '../package'
import program from 'commander'

/**
 * The function that powers the CLI
 *
 * @param {array} argv The process.argv array
 * @returns {undefined}
 */
export default function(argv) {
  program
    .version(pkg.version)
    .usage('[options] <old-config.ext>')
    .parse(argv)
}
