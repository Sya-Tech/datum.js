// Get pure DOM element in vm.
function getDOMNode(vm) {
    return vm.$el
}

// Walk DOM Tree and do something.
function DOMTreeWalker(DOMNode, callback) {
    let scope = []
    let namespace = ''
    for (let key in DOMNode.children) {
        if (!isNaN(+key)) {
            const node = DOMNode.children[key]
            let {scope, namespace} = getScope(node, scope)
            callback && callback(node, scope, namespace)
            DOMTreeWalker(node)
        }
    }
}

function getScope(node, scope) {
    const expression = node.getAttribute('v-for')
    const inMatch = expression.match(/(.*) (?:in|of) (.*)/)
    if (inMatch) {
        return {
            scope: scope.concat(inMatch[2].trim()),
            namespace: inMatch[1].trim()
        }
    }
}

// function getDirectiveTextExpression(vm) {
//     DOMTreeWalker(getDOMNode(vm), (node, scope,namespace) => {
//         const expression = node.getAttribute('v-text')
//     })
// }
