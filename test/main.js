import Vue from 'vue'
import $ from 'jquery'
import {forTest} from '../src/index.js'
import {DOMTreeWalker} from '../src/lib/util.js'

describe('DOM', function () {
    it('walker', function () {
        const $node = $(`<div id="test">
              <span v-text="foo">test</span>
              <ul>
                  <li v-for="item in bar">item-1</li>
                  <li v-for="item in bar">item-2</li>
                  <li v-for="item in bar">item-3</li>
              </ul>
          </div>`)
        expect(DOMTreeWalker($node[0]).foo).toBe('test')
        expect(DOMTreeWalker($node[0]).bar)
    })
})

describe("Just for test", function () {
    it("test", function () {
        expect(forTest('foo')).toBe('foo');
    })
})
