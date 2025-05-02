// let n = 5

// let star = ""
// for (let i = 1; i <= n*2; i++) {
//     star += " "
// }
// console.log(star)


let n = 5
for (let i = 1; i <= n; i++) {
    let star = ""
    for (let j = 1; j <= n - i; j++) {
        star += "  "
    }
    for (let k = 1; k <= i; k++) {
        star += k + " "

    }
    console.log(star)
}