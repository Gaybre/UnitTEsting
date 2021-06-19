const randomStrings = require('../index')

describe('Probar funcionalidades de randomStrings', () => {
    test('Probar una funcionalidad', () => {
        expect(typeof(randomStrings())).toBe('string')
    })

    test('Comprobar que no existe una ciudad', () => {
        expect(randomStrings()).not.toMatch(/Guadalajara/)
    })
})