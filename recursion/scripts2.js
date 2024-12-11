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
let leftHalf = []
let rightHalf = []

function mergeSort(n){
    let mid = n.length / 2
    
    for (let i = 0; i < mid; i++){
        leftHalf.push(n[i])
    }
    for (let i = mid; i < n.length; i++){
        rightHalf.push(n[i])
    }
    console.log(leftHalf)
    console.log(rightHalf)
    mergeSort(leftHalf)
    mergeSort(rightHalf)
}

mergeSort(array)