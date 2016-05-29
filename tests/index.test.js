import convertToStylelint from '../src/index'
import test from 'tape'

test('Tests not implemented', (t) => {
  const assertionsCount = 1
  const actual = convertToStylelint()

  t.plan(assertionsCount)
  t.equal(actual, 'Not implemented', 'Return not implemented')
})
