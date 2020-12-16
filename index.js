// Map Functions

function mapToNegativize(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
       newArray.push(array[i] * -1);
    }
    return newArray;
}

function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
       newArray.push(array[i] * 2);
    }
    return newArray;
}

function mapToSquare(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
       newArray.push(array[i] * array[i]);
    }
    return newArray;
}

// Reduce Functions

function reduceToTotal(array, start=0) {
    let aggregator = 0;
    let i = 0;
    if (start) {
        aggregator = start
    }
    while (i < array.length) {
        aggregator += array[i]
        i++;
    }
    return aggregator;
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    }
    return false;
}