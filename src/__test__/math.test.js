/**
 * Unit test for the math function.
 *
 * Description:
 * The math function returns the result of 1 + 1, which is always 2.
 * This test ensures that the function behaves as expected.
 */

import math from 'utils/math.js' // Adjust the path as needed

describe('math function', () => {
  /**
   * Test Case: Should return 2
   *
   * Given: No input is required
   * When: The math function is called
   * Then: It should return the number 2
   */
  test('should return 2', () => {
    const result = math()
    expect(result).toBe(2)
  })
})
