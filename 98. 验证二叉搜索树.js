class Node {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

class Tree {
  constructor(...data) {
    let nodeList = data.map(node => new Node(node))
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
  static isValidBST(root) {
    if (root == null) {
      return true
    }
    let arr = []
    let count = 0
    let ldr = root => {
      if (root) {
        ldr(root.left)
        arr.push(root.val)
        ldr(root.right)
      }
    }
    ldr(root)
    arr.forEach((node, idx, arr) => {
      arr[idx + 1] - node > 0 ? count++ : null
    })
    return arr.length - 1 === count
  }
}

let tree = new Tree(10, 5, 15, null, null, 6, 20)
console.dir(tree, { depth: null })
console.log(Tree.isValidBST(tree.root))
