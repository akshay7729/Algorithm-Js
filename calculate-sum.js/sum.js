// run it in browser console to access performance property

let addUptoN = n => {
    let total = 0;
    for (let i = 1; i<=n; i++){
        total += i
    }
    return total;
} 

let t1 = performance.now();
console.log(addUptoN(50000000))
let t2 = performance.now();

console.log(`performace - ${(t2-t1)/1000}`)

// gauss formula
let addUptoN2 = n => {
    return n*(n+1)/2
}
let t3 = performance.now();
console.log(addUptoN2(50000000))
let t4 = performance.now();

console.log(`performace - ${(t3-t4)/1000}`)