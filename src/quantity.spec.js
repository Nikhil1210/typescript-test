import assert from 'assert'
import { formatQuantity } from './quantity'
describe('formatQuantity', () => {
    it('Should return an empty string for non number quantities', () => {
        assert.equal(formatQuantity(null), '')
        assert.equal(formatQuantity(undefined), '')
        assert.equal(formatQuantity('Oops'), '')
        assert.equal(formatQuantity(''), '')
    })
    it('Should return quantities between -999 and 999 as a string', () => {
        assert.equal(formatQuantity(1), '1')
        assert.equal(formatQuantity(1.2345), '1.2345')
        assert.equal(formatQuantity(-1), '-1')
        assert.equal(formatQuantity(-12.3456), '-12.3456')
    })
    it('Should add a K suffix to quantities between 1000 and 999,999', () => {
        assert.equal(formatQuantity(10000), '10K')
        assert.equal(formatQuantity(12345), '12.345K')
    })
    it('Should add a K suffix to quantities between -1000 and -999,999', () => {
        assert.equal(formatQuantity(-10000), '-10K')
        assert.equal(formatQuantity(-12345), '-12.345K')
    })
    it('Should add an M suffix to quantities between 1,000,000 and 1,000,000,000', () => {
        assert.equal(formatQuantity(10000000), '10M')
        assert.equal(formatQuantity(12345600), '12.3456M')
    })
    it('Should add an M suffix to quantities between -1,000,000 and -999,999,999', () => {
        assert.equal(formatQuantity(-10000000), '-10M')
        assert.equal(formatQuantity(-12345600), '-12.3456M')
    })
    it('Should add a B suffix to quantities greater than 999,999,999', () => {
        assert.equal(formatQuantity(10000000000), '10B')
        assert.equal(formatQuantity(12345600000), '12.3456B')
    })
    it('Should add a B suffix to quantities less than -999,999,999', () => {
        assert.equal(formatQuantity(-10000000000), '-10B')
        assert.equal(formatQuantity(-12345600000), '-12.3456B')
    })
})