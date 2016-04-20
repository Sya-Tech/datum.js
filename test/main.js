import Vue from 'vue'
import {forTest} from '../src/index.js'
import {DOMTreeWalker} from '../src/lib/util.js'

describe('DOM', function () {
    it('walker', function () {
        let vue = new Vue({
            el: 'body',
            template: '<div v-text="foo">baz</div>',
            data: {
                foo: 'bar'
            }
        })
        expect()
    })
})

describe("Just for test", function () {
    it("test", function () {
        expect(forTest('foo')).toBe('foo');
    })
})
