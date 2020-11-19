import albums from './albums'

test('initial state', () => {
  const expected = 0
  const actual = albums(undefined, {}).length

  expect(actual).toEqual(expected)
})
