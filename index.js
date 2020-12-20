// Your code here

function mapToNegativize(array) {
    return array.map(x => x * -1)
}

function mapToNoChange(array) {
    return array.map(x => x)
}

function mapToDouble(array) {
    return array.map(x => x * 2)
}

function mapToSquare(array) {
    return array.map(x => x * x)
}

function reduceToTotal(array, start=0) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, start)
}

function reduceToAllTrue(array) {
    return array.reduce((accumulator, value) => {
        return accumulator === !!value
    }, true)
}

function reduceToAnyTrue(array) {
    return array.reduce((accumulator, value) => {
        return (accumulator === !!value) ? false : true;
    }, false)
}