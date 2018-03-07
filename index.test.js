const mod = require('./')
const assert = require('assert')

const returnsEmpty = () => {
  const expected = {}
  const actual = mod({})({})

  assert.deepEqual(expected, actual, 'Returns an empty object if both defaults and opts are empty')
}

const returnsDefaults = () => {
  const expected = { name: 'tim' }
  const actual = mod({ name: 'tim' })({})

  assert.deepEqual(expected, actual, 'Returns the default object if opts is an empty object')
}

const returnsOpts = () => {
  const expected = { name: 'tim' }
  const actual = mod({})({ name: 'tim' })

  assert.deepEqual(expected, actual, 'Returns the opts if given an empty default object')
}

const overridesDefaults = () => {
  const expected = { name: 'tim' }
  const actual = mod({ name: 'john' })({ name: 'tim' })

  assert.deepEqual(expected, actual, 'Values in defaults are overriden by opts')
}

returnsEmpty()
returnsDefaults()
returnsOpts()
overridesDefaults()