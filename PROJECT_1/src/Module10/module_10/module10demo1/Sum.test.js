import { Sum } from './Sum'

test("adds 1 + 2 to equal 3", () => {
    const a = 1
    const b = 2

    const result = Sum(a, b)

    expect(result).toBe(3)
})