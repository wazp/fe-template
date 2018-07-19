/*
// Example test for a javascript file.
*/
import {sum, square} from '@/Scripts/custom/utils'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('5 squared to be 25', () => {
    expect(square(5)).toBe(25)
})