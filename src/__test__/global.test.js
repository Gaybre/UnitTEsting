//-------------- Test de un string
const text = 'Hola Mundo'
test('debe contener texto', () => {
    expect(text).toMatch(/Mundo/)
})

//-------------- Test de un arreglo
const fruits = ['Manzana', 'Banana', 'Melon']
test('Tenemos una Manzana?', () => {
    expect(fruits).toContain('Manzana')
})

//-------------- Test con numeros de entrada
test('Es mayor que..', () => {
    expect(9).toBeGreaterThan(5)
})

//-------------- Test con un dato booleano
test('Es verdadero', () => {
    expect(true).toBeTruthy()
})

//-------------- Test de un callback
const reverseString = (str, callback) => {
    callback(str.split('').reverse().join(''))
}
test('Probar un Callback', () => {
    reverseString('Juan', (str) => {
        expect(str).toBe('nauJ')
    })
})

//-------------- Test de una promesa
const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
}
test('Probar una Promesa', () => {
    return reverseString2('Juan')
        .then(str => {
            expect(str).toBe('nauJ')
        })
})

//-------------- Test de una promesa con resultado random
const vacaciones = () => {
    return new Promise((aprovado, denegado) => {
        const random = Math.random()
        if(random < .3) {
            denegado('vacaciones denegadas')
        }else {
            aprovado('Vacaciones aprobadas')
        }
    })
}
test('Validando solicitud de vacaciones', () => {
    return vacaciones()
        .then(msj => {
            expect(msj).toBe('Vacaciones aprobadas')
        })
})

//-------------- Test con async await
test('Porbar async/await', async () => {
    const string = await reverseString2('Hola')
    expect(string).toBe('aloH')
})


// afterEach(() => console.log('Despues de cada prueba'))
// afterAll(() => console.log('Despues de todas las pruebas'))
// beforeEach(() => console.log('Antes de cada prueba'))
// beforeAll(() => console.log('Antes de todas las pruebas'))