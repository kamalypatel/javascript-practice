// summation equation
// function sumRange(n, sum = 0) {
//     if (n === 1) {
//         return sum + 1
//     }
//     else {
//         sum = sum + n
//         return sumRange((n - 1), sum)
//     }
// }


// power recursive equation
// function power(n, y, total = 1) {
//     if (y == 0) {
//             return total
//     } else {
//         total = total * n
//         return power(n, y-1, total)
//     }
// }


// factorial recursive equation
// function factorial(x, total = 1) {
//     if (x == 1 || x == 0) {
//         return total
//     } else {
//         total = x * total
//         return factorial((x-1), total)
//     }
// }

// product of array
// function productOfArray(x, total = 1) {
//     if (x.length == 1 || x.length == 0) {
//         return total * x[0]       
//     } else {
//         y = x.length - 1
//         total = total * x[y]
//         x.pop()
//         return productOfArray(x,total)
//     }
// }

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

prodi