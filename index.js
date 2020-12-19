// Your code here
function mapToNegativize(input) {
    let arr = []
    for (let i = 0; i < input.length; i++ ) {
    arr.push(-1 * input[i])
  }
  return arr
}

function mapToNoChange(input) {
    let arr = []
    for (let i = 0; i < input.length; i++ ) {
    arr.push(input[i])
  }
  return arr
}

function mapToDouble(input) {
    let arr = []
    for (let i = 0; i < input.length; i++ ) {
    arr.push(2 * input[i])
  }
  return arr
}

function mapToSquare(input) {
    let arr = []
    for (let i = 0; i < input.length; i++ ) {
    arr.push(input[i] * input[i])
  }
  return arr
}

function reduceToTotal(input, start=0) {
    let total = start
    for (let i = 0; i < input.length; i++ ) {
    total = total + input[i]
  }
  return total
}

function reduceToAllTrue(input) {
    for (let i = 0; i < input.length; i++ ) {
        if (!input[i]) return false
      }
      return true
}

function reduceToAnyTrue(input) {
    for (let i = 0; i < input.length; i++ ) {
        if (input[i]) return true
      }
      return false
    }
