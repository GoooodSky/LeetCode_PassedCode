class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

class Tree {
  constructor(...data) {
    let nodeList = data.map(node => new TreeNode(node))
    nodeList.forEach((node, idx) => {
      let left = idx * 2 + 1
      let right = idx * 2 + 2
      if (node.val != null && nodeList[left]) {
        node.left = nodeList[left]
      }
      if (node.val != null && nodeList[right]) {
        node.right = nodeList[right]
      }
    })
    this.root = nodeList[0]
    nodeList.length = 0
  }
  isSymmetric(root = this.root) {
    if (!root) return true
    let test = (left, right) => {
      if (!left && !right) return true
      if ((left && !right) || (!left && right) || left.val !== right.val) return false
      else return test(left.right, right.left) && test(left.left, right.right)
    }
    return test(root.left, root.right)
  }
}

let tree = new Tree([1, 2, 2, 3, 4, 4, 3])

console.log(tree.isSymmetric())
