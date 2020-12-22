function mapToNegativize(array){
    return array.map(number => number * -1)
}

function mapToNoChange(array){
    return array.map(number => number)
}

function mapToDouble(array){
    return array.map(number => number * 2)
}

function mapToSquare(array){
    return array.map(number => number * number)
}

function reduceToTotal(source, startingPoint=0){
    let total = startingPoint
    for(let i=0; i< source.length; i++){
        total = total + source[i]
    }
    return total
}

function reduceToAllTrue(array){
    if(array.every(Boolean)){
        return true
    }else{
        return false 
    }
}

function reduceToAnyTrue(array){
    if(array.some(Boolean)){
        return true
    }else{
        return false 
    }
}