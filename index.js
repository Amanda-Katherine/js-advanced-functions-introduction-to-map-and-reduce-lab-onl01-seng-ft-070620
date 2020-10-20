function mapToNegativize(array) {
    let negArray = []
    
    array.map(function(number) {
        negArray.push(number * (-1))
    })

    return negArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let doubledArray = []

    array.map(function(number) {
        doubledArray.push(number * 2)
    })

    return doubledArray
}

function mapToSquare(array) {
    let squaredArray = []

    array.map(function(number) {
        squaredArray.push(number ** 2) 
    })

    return squaredArray
}

function reduceToTotal(array, startingPoint) {

}

function reduceToAllTrue(array) {

}

function reduceToAnyTrue(array) {

}

