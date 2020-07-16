const randomStrings = require('../index')

test('Probar una funcionalidad', () => {
    expect(typeof(randomStrings())).toBe('string')
})