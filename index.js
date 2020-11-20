// Your code here

function mapToNegativize(sourceArray) {
  return sourceArray.map(e => e * (-1))
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(e => e);
}

function mapToDouble(sourceArray) {
  return sourceArray.map(e => e * 2);
}

function mapToSquare(sourceArray) {
  return sourceArray.map(e => e ** 2);
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  return sourceArray.reduce((accumulator, currentValue) => ( accumulator + currentValue), startingPoint)
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce((accumulator, currentValue) => ( !!accumulator && !!currentValue ), true)
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce((accumulator, currentValue) => ( !!accumulator ? !!accumulator : !!currentValue), false)
}