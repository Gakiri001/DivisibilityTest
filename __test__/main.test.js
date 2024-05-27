const { fizzbuzz } = require("../main")

describe("fizzbuzz-Testing divisibility for 3 and 5",()=>{
  it("Returns fizzbuzz if the number is divisible by both 3 and 5",()=>{
    expect(fizzbuzz(15)).toBe(`15 - fizzbuzz`)
  })
  it("Returns buzz if the number is divisible by 5",()=>{
    expect(fizzbuzz(10)).toBe(`10 - buzz`)
  })
  it("Returns fizz if the number is divisible by 3",()=>{
    expect(fizzbuzz(9)).toBe(`9 - fizz`)
  })
  it("Returns only the value when the number is neither divisible by 3 or 5",()=>{
    expect(fizzbuzz(2)).toBe(`2`)
  })
  it("Returns only the value when the number is neither divisible by 3 or 5",()=>{
    expect(fizzbuzz(8)).toBe(`8`)
  })
})