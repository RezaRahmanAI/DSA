// Brut force solution

function sortedArray(array)
{
    const newArray = new Array(array.length).fill(0)
    for(let i = 0; i<newArray.length; i++){
        newArray[i] = Math.pow(array[i], 2)
    }

    newArray.sort(function(a,b){return a - b})
    return newArray
}

a = [1,3, -2, -5, 3, 0]

console.log(sortedArray(a))