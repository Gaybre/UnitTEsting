const cities = ['CDMX', 'Bogotá', 'Lima', 'Buenos Aires', 'Texas']

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]
    return string
}

module.exports = randomString