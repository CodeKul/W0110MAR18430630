let engine = (function(){
    return {
        hp : 466,
        piston : 8
    }
})()


let car = (function(eng){
    let pz = 100
    let mlg = 20

    function cal () {
        return (pz/mlg) * eng.piston
    }

    let obj = {
        pz : pz,
        mlg : mlg,
        calc : cal
    }

    return obj
})() // IIFE - Module

car.calc()
car.pz = 56

console.log(car.calc())