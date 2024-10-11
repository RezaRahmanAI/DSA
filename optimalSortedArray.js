function sortArray(array){
    const newArray = Array(array.length).fill(0)
    let leftPointer = 0;
    let rightPointer = array.length -1

    for(let i = array.length-1; i>=0; i--){
        const leftSqr = Math.pow(array[leftPointer], 2)
        const rightSqrt = Math.pow(array[rightPointer],2)

        if (leftSqr > rightSqrt) {
            newArray[i] = leftSqr
            leftPointer++
        } else{
            newArray[i] = rightSqrt
            rightPointer--
        }
    }

    return newArray
}

a = [1,2,5,7]
b = [-6,-2,0,5,19];
c = [0]

console.log(sortArray(a));
console.log(sortArray(b));
console.log(sortArray(c));