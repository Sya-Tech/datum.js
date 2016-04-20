// Get pure DOM element in vm.
function getDOMNode(vm) {
    return vm.$el
}

function DOMTreeWalker(DOMNode, vueData = {}, scope = []) {
    for (let i = 0; i < DOMNode.children.length; i++) {
        const node = DOMNode.children[i]
        const vueText = getVueText(node)
        const {vueFor, scope} = getVueFor(node)
        DOMTreeWalker(node, vueData, scope)
        return Object.assign(vueData, vueText, vueFor)
    }
}

function getVueText(node) {
    const vText  = node.getAttribute('v-text')
    return vText ? {[vText]: node.innerText} : null
}

function getVueFor(node) {
    const expression = node.getAttribute('v-for')
    const inMatch = expression ? expression.match(/(.*) (?:in|of) (.*)/) : null
    return {vueFor: {[inMatch[2].trim()]: []}, scope: inMatch[1].trim()}
}

export DOMTreeWalker
