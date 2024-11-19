function sumArray(arr) {
    if (arr.length == 0) {
        return false
    }
    else{
        return arr[0] + sumArray(arr.slice(1))
    }
}
console.log(sumArray([1,2,3,4,5]))