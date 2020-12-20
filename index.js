function mapToNegativize(array) {
    let n = []
    for (let i = 0; i <array.length; i++) { 
     n.push(-1 * array[i])
    }
    return n
}

function mapToNoChange(array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        newarray.push(array[i])
    }
    return newarray
}

function mapToDouble(array) {
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        newarray.push(2 * array[i])
    }
    return newarray;
}

function mapToSquare(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {  
        newArray.push(array[i] * array[i])
    }
    return newArray;
}

function reduceToTotal(srcArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < srcArray.length; i++) {
        total = total + srcArray[i]    
    }
    return total;
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++) {
        if (!src[i]) return false
    }
    return true;
}

function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++) {
        if (src[i]) return true
    }
    return false;
}

    
