module.exports = calculateCentury

function calculateCentury(year) {

    const today = new Date();

    if (!Number.isInteger(year) || year <= 0 || year > today.getFullYear()) {
        return "Año Incorrecto"
    }

    let number = year / 100
    let integerNumber = Math.trunc(number)

    if (number - integerNumber == 0) {
        let century = `Siglo#${integerNumber}`
        return century
    }

    let century = integerNumber + 1
    century = `Siglo#${century}`

    return century
}

/* 
Para calcular el siglo necesitamos:
1 - Dividir el número del año por cien
2 - El número obtenido tiene parte entera y parte decimal.
3 - Si la parte decimal no es exactamente 0, suma 1 unidad a la parte entera.
Los siglos comienzan ejem 0200 - 0299 (2000-2099)
*/

