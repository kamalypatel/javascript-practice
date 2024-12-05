#!/usr/bin/env node

// fibonacci regular

// fibonacci recursive


function fibs(n) {
    if (n == 0) {
        return 0
    } if (n==1) {
        return 1
    } else {
        return fibs(n-2) + fibs(n-1)
    }
}

let n = 10
console.log(fibs(n))