import { test, expect } from '@playwright/test'

let calculator = {
    add(x:number, y:number) : number {
        return x + y
    },
    subtract(x: number, y: number): number {
        return x - y
    }
}

test("should add 2 numbers", async ({page})=>{
    // arrange
    let n1 = 100,
        n2 = 200,
        expectedResult = 300;

    // act
    let actualResult = calculator.add(n1, n2)

    // assert
    expect(actualResult).toEqual(expectedResult)
})

test("should subtract 2 numbers", async ({ page }) => {
    // arrange
    let n1 = 100,
        n2 = 200,
        expectedResult = -100;

    // act
    let actualResult = calculator.subtract(n1, n2)

    // assert
    expect(actualResult).toEqual(expectedResult)
})