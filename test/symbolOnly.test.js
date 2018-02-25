const expect = require('chai').expect
const symbolOnly = require('../public/lib/symbolOnly')

describe('check if input is symbol only', () => {
  it('should return true if input is symbol only', () => {
		expect(symbolOnly('!@#$')).to.be.equal(true)
  })
  it('should return false if input has character which is not symbol', () => {
		expect(symbolOnly('!@#4')).to.be.equal(false)
  })
})