// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {

    // esperamos que la suma de esos 2 números sea 23
    expect(sum(14, 9)).toBe(23);
});

test('1 euro should be 1.04 USD', () => {
    expect(fromEuroToDollar(1)).toBe(1.04);
})

test('1 dollar should be 138.88 JPY', () => {
    expect(fromDollarToYen(1)).toBe(138.88);
})

test('1 yen should be 0.0060 GBP', () => {
    expect(fromYenToPound(1)).toBe(0.0060);
})

test('sum fuction should return a number', () => {
    expect(Number.isInteger(sum(2,2))).toBe(true);
})