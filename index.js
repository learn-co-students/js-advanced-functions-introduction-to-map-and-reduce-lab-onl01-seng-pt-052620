// Your code here
function mapToNegativize(sourceArray) {
    let newArray = sourceArray.map(x => x * -1);
    return newArray;
}

function mapToNoChange(sourceArray) {
    let newArray = sourceArray.map(x => x);
    return newArray;
}

function mapToDouble(sourceArray) {
    let newArray = sourceArray.map(x => x * 2);
    return newArray;
}

function mapToSquare(sourceArray) {
    let newArray = sourceArray.map(x => x * x);
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (sourceArray.reduce(reducer, startingPoint))
}

function reduceToAllTrue(sourceArray) {
    const reducer = (accumulator, currentValue) => accumulator = !!currentValue;

    return (sourceArray.reduce(reducer))

}

function reduceToAnyTrue(sourceArray) {
    const reducer = (accumulator, currentValue) => { if (!!currentValue) { return true }; return false;};

    return (sourceArray.reduce(reducer))
}