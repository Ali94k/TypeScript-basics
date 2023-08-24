function add_(n1: number, n2: number, showResult: boolean): number {
  console.log(typeof n1)
  console.log(typeof n2)

  if (showResult) {
    console.log(n1 + n2)
  }

  return n1 + n2
}

const number1: number = 5
const number2: number = 2.8
const printResult: boolean = true

const num = 5

const result = add_(number1, number2, printResult)
console.log(result)
