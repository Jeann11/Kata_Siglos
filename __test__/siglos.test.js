const calculateCentury = require('../src/siglos')

test('Calcular el siglo de cualquier año', () => {
    //GIVEN
    const year = 1977
    //WHEN
    const century = calculateCentury(year)
    //THEN
    expect(century).toBe("Siglo#20");
})

test('Calcular el siglo erróneo', () => {
    //GIVEN
    const year = 1900
    //WHEN
    const century = calculateCentury(year)
    //THEN
    expect(century).toBe("Siglo#19");
})

test('Calcular el siglo del año que acaba en 00', () => {
    //GIVEN
    const year = 19.10
    //WHEN
    const century = calculateCentury(year)
    //THEN
    expect(century).toBe("Año Incorrecto");
})

test('No aceptar valor de años en negativo', () => {
    //GIVEN
    const year = -1910
    //WHEN
    const century = calculateCentury(year)
    //THEN
    expect(century).toBe("Año Incorrecto");
})

test('No aceptar valor de años en 0', () => {
    //GIVEN
    const year = 0
    //WHEN
    const century = calculateCentury(year)
    //THEN
    expect(century).toBe("Año Incorrecto");
})

test('No aceptar valor de año superior a 2022', () => {
    //GIVEN
    const today = new Date()
    const year = today.getFullYear() + 1
    //WHEN
    const century = calculateCentury(year)
    //THEN
    expect(century).toBe("Año Incorrecto");
})