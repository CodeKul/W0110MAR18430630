
let abc = function () { // anonymus functions
    console.log(`This abc`)
}

abc()

let pqr = () => { // lambda expressions
    console.log(`this new flavour`)
}

pqr()

function xyz(cb) {
    cb()
}

xyz(pqr)
xyz(function(){
    console.log(`Anonymus`)
})
xyz(() => console.log(`Lambda`))
setTimeout(() => console.log(`Called `), 1500)


function hij() {
    return function() {
        console.log(`Clojures`)
        return () => console.log(`This is last`)
    }
}

let fst = hij()
console.log('fst',fst)
let scd = fst()
console.log('scd',scd)
let thrd = scd()
console.log('thd',thrd)

hij()()()