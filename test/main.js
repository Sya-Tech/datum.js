import {forTest} from '../src/index.js'

describe("Just for test", function () {
    it("test", function () {
        expect(forTest('foo')).toBe('foo');
    })
})
