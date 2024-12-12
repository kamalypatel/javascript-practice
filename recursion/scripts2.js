#!/usr/bin/env node

// fibonacci regular

// let n = 10
// let sum = []
// for (let i = 0; i < n; i++){
//     if (i == 0) {
//         sum.push(0)
//         console.log(sum)
//     } else if (i == 1) {
//         sum.push(1)
//         console.log(sum)
//     } else {
//         sum.push(sum[i-1] + sum[i-2])
//         console.log(sum)
//     }
// }


// fibonacci recursive

// function fibs(n) {
//     if (n == 0) {
//         return 0
//     } if (n==1) {
//         return 1
//     } else {
//         return fibs((n-2) + fibs(n-1))
//     }
// }

// let n = 9
// console.log(fibs(n))


// Merge Sort

let array = [3, 2, 1, 13, 8, 5, 0, 1]

function mergeSort(n){
    if (n.length <= 1) {
        return n
    }
    
    let mid = Math.floor(n.length / 2)

    let leftHalf = mergeSort(n.slice(0,mid))
    let rightHalf = mergeSort(n.slice(mid))
    
    return merge(leftHalf, rightHalf)
}

function merge(left, right) {
    let result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left,right)
}

console.log(mergeSort(array))