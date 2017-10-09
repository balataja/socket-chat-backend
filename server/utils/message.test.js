var expect = require('expect')

var {generateMessage} = require('./message.js')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'James'
        var text = 'Hello world!'
        var generatedMessage = generateMessage(from, text)

        expect(generatedMessage.from).toBe(from, `Expected "from" value to be ${from}`)
        expect(generatedMessage.text).toBe(text, `Expected "text" value to be ${text}`)
        expect(generateMessage.createdAt).toBeA('number')
    })
})