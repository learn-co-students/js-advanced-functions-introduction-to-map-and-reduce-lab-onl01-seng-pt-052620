function mapToNegativize(sourceArray) {
    return sourceArray.map(arr => arr * (-1))
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(arr => arr)
}

function mapToDouble(sourceArray) {
    return sourceArray.map (arr => arr * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map (arr => arr ** 2)
}


function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce((accumalator, currentValue) => accumalator + currentValue, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((accumalator, currentValue) => !!accumalator && !!currentValue)
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((accumalator, currentValue) => !!accumalator ? !!accumalator : !!currentValue)
}