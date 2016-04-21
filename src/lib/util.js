// Get pure DOM element in vm.
function getDOMNode(vm) {
    return vm.$el
}

function getVueText(node) {
    const vText  = node.getAttribute('v-text')
    return vText ? {[vText]: node.innerText} : null
}

function getVueFor(node) {
    const expression = node.getAttribute('v-for')
    const inMatch = expression ? expression.match(/(.*) (?:in|of) (.*)/) : null
    return inMatch
      ? {vueFor: {[inMatch[2].trim()]: []}, name: inMatch[1].trim()}
      : {vueFor: null, name: null}
}

function getVueFor(node) {
    const expression = node.getAttribute('v-for')
    const inMatch = expression ? expression.match(/(.*) (?:in|of) (.*)/) : null
    return inMatch
      ? {vueFor: {[inMatch[2].trim()]: []}, name: inMatch[1].trim(), key: inMatch[2].trim() }
      : {vueFor: null, name: null, key: null}
}
function DOMTreeWalker(DOMNode, vueData = {}, scope = []) {
    const vueText = getVueText(DOMNode)
    const {vueFor, name, key} = getVueFor(DOMNode)
    scope = key ? scope.concat(key) : scope
    for (let i = 0; i < DOMNode.children.length; i++) {
        const node = DOMNode.children[i]
        DOMTreeWalker(node, vueData, scope)
    }
    if (scope.length) {
        vueData[scope[0]] = vueData[scope[0]] || []
        const scopeData = (scope.length ? vueData[scope[0]] : vueData)
        scopeData.push(vueText)
        return vueData
    }
    return Object.assign(vueData, vueText)
}

export DOMTreeWalker
