let mobs = [
    'Samsung',
    'Apple',
    `Moto ${1+9}`,
    `HTC`,
    `Lenevo`
]

for(let i = 0; i < mobs.length; i++) {
    console.log(mobs[i])
}

mobs.forEach((el,ind) => {
    if(el === 'HTC') el = el.toLowerCase()
    console.log(el)
})

mobs.forEach(function(el) {
    if(el === 'HTC') el = el.toLowerCase()
    console.log('FN',el)
})