const { generateUniqueId } = require('../../src/utils/utils')

describe('Generate Uniqe Id', () => {
    it('Should generate an unique ID', () => {
        const id = generateUniqueId()

        expect(id).toHaveLength(8)
    })
})