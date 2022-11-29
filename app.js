// esta es mi función que suma dos números
const sum = (a,b) => {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "NaN";
    }
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 143.84, // japan yen
    "USD": 1.04, // us dollar
    "GBP": 0.87 // british pound
}

const fromEuroToDollar = (euro) => {
    return euro*oneEuroIs.USD;
}

// one dollar is:
let oneDollarIs = {
    "JPY": 138.88, // japan yen
    "EUR": 0.97, // euro
    "GBP": 0.84 // british pound
}

const fromDollarToYen = (dollar) => {
    return dollar*oneDollarIs.JPY;
}

// one yen is:
let oneYenIs = {
    "USD": 0.0072, // dollar
    "EUR": 0.0070, // euro
    "GBP": 0.0060 // british pound
}

const fromYenToPound = (yen) => {
    return yen*oneYenIs.GBP;
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))
console.log(fromEuroToDollar(1))
console.log(fromDollarToYen(1))
console.log(fromYenToPound(1))
console.log(sum("Hello World",5))
console.log(Number.isInteger(sum(7,3)))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };