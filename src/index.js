const cities = ['CDMX', 'Bogotá', 'Lima', 'Buenos Aires', 'Texas']

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]
    return string
}

// Esta funcion es un ejemplo para visualizar en el inex.html de coverage
// cuando no se tiene pruebas de alguna parte del codigo
const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
}

module.exports = randomString