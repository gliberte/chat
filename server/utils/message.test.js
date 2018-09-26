
const expect = require('expect')
const {generateMessage} = require('./message')

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        var from = 'jen'
        var text = 'some message'
        var message = generateMessage(from,text)

        //expect(message.createdAt).toMatch(Number)
        expect(message).toMatchObject({
            from:from,
            text:text
        })
    })
})