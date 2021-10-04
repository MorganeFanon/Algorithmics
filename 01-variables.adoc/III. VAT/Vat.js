/* Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%.*/
let a = 1900;

function CalculateVat(a){
    let b = (a/100)*21;
    let c = b + a;
    return c;
}

console.log(CalculateVat(a));