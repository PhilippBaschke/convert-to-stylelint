jest.mock('commander', () => ({
  version: jest.fn().mockReturnThis(),
  usage: jest.fn().mockReturnThis(),
  parse: jest.fn().mockReturnThis()
}))

import cli from './cli'
import info from '../package'
import program from 'commander'

describe('cli', () => {
  it('takes the version from package.json', () => {
    cli()
    expect(program.version).toHaveBeenCalledWith(info.version)
  })

  it('specifies how it should be used', () => {
    cli()
    expect(program.usage).toHaveBeenCalledWith('[options] <old-config.ext>')
  })

  it('should parse the arguments', () => {
    const args = ['one', 'two', 'three']

    cli(args)
    expect(program.parse).toHaveBeenCalledWith(args)
  })
})
