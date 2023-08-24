function foo(num: number): undefined {
    return
  }
  
  function foo1(num: number): void {}
  
  function add(n1: number, n2: number): number {
    return n1 + n2
  }
  
  let combineValues: (a: number, b: number) => number
  
  combineValues = add
  //combineValues = foo
  //combineValues = 3
  
  console.log(combineValues(1, 2))
  
  function addAndHandle(
    n1: number,
    n2: number,
    cb: (num: number, str: string) => void
  ) {
    const result = n1 + n2
    const fcb = cb(result, '')
    console.log("in addAndHandle " + fcb)  /// !!! somehow type void is printed
  }
  
  addAndHandle(10, 20, () => {
    console.log('from callback')
    return "from callback"
  }) // !!! call back can be with empty params
  