// Your code here


function mapToNegativize(source) {
  let x = []
  for (let i = 0; i < source.length; i++ ) {
    x.push(-1 * source[i])
  }
  return x 
}

function mapToNoChange(source) {
  let x = []
  for (let i = 0; i < source.length; i++ ) {
    x.push(source[i])
  }
  return x
}

function mapToDouble(source) {
  let x = []
  for (let i = 0; i < source.length; i++ ) {
    x.push(2 * source[i])
  }
  return x
}

function mapToSquare(source) {
  let x = []
  for (let i = 0; i < source.length; i++ ) {
    x.push(source[i] * source[i])
  }
  return x
}

function reduceToTotal(source, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < source.length; i++) {
    total = total + source[i]
  }
  return total
}

function reduceToAllTrue(source) {
  for (let i = 0; i < source.length; i++ ) {
    if (!source[i]) return false
  }
  return true
}

function reduceToAnyTrue(source) {
  for (let i = 0; i < source.length; i++ ) {
    if (source[i]) return true
  }
  return false
}