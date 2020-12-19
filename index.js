function mapToNegativize(arrayOfNumbers) {
    let newArray = []
    for(let i=0; i < arrayOfNumbers.length; i++) {
        newArray.push(arrayOfNumbers[i] * -1)
    }
    return newArray
}

function mapToNoChange(arrayOfNames) {
    let unchangedArray = []
    for(let i=0; i < arrayOfNames.length; i++) {
        unchangedArray.push(arrayOfNames[i])
    }
    return unchangedArray
}

function mapToDouble(arrayOfNumbers) {
    let doubledNumbers = []
    for(let i=0; i < arrayOfNumbers.length; i++) {
        doubledNumbers.push(arrayOfNumbers[i]* 2)
    }
    return doubledNumbers
}

function mapToSquare(arrayOfNumbers) {
    let squaredNumbers = []
    for(let i=0; i < arrayOfNumbers.length; i++) {
        squaredNumbers.push(arrayOfNumbers[i]**2)
    }
    return squaredNumbers
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for(let i=0; i < sourceArray.length; i++) {
        total = sourceArray[i] + total
    }
    return total
}

function reduceToAllTrue(sourceArray) {
   for(let i=0; i<sourceArray.length; i++) {
       if(!sourceArray[i]) {
           return false    
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for(let i=0; i < sourceArray.length; i++) {
        if(!!sourceArray[i]) {
            return true
        }
    }
    return false
}