const expect = require('chai').expect
const numOnly = require('../public/lib/numOnly')

describe('check if input is number only', () => {
  it('should return true if input is number only', () => {
		expect(numOnly('123')).to.be.equal(true)
  })
  it('should return false if input has character which is not number', () => {
		expect(numOnly('123a')).to.be.equal(false)
  })
})