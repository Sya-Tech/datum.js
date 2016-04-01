// Get pure DOM element in vm.
function getDOMNode(vm) {
    return vm.$el
}

// Walk DOM Tree and do something.
function DOMTreeWalker(DOMNode, callback, scope = [], namespace = '') {
    console.log(scope, namespace)
    for (let key in DOMNode.children) {
        if (!isNaN(+key)) {
            const node = DOMNode.children[key]
            let {scope: newScope, namespace: newNamespace} = getScope(node, scope, namespace)
            callback && callback(node, newScope, newNamespace)
            DOMTreeWalker(node, callback, newScope, newNamespace)
        }
    }
}

// Get scope of current node.
function getScope(node, scope, namespace) {
    const expression = node.getAttribute('v-for')
    console.log(expression)
    const inMatch = expression ? expression.match(/(.*) (?:in|of) (.*)/) : null
    if (inMatch) {
        return {
            scope: scope.concat(inMatch[2].trim()),
            namespace: inMatch[1].trim()
        }
    } else {
        return  {
            scope: scope.concat(),
            namespace: namespace
        }
    }
}

// function getDirectiveTextExpression(vm) {
//     DOMTreeWalker(getDOMNode(vm), (node, scope,namespace) => {
//         const expression = node.getAttribute('v-text')
//     })
// }
