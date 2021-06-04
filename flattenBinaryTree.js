// This is the class of the input root. Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function flattenBinaryTree(root) {
      let currentNode = root;
      while(currentNode.left != null){
          currentNode = currentNode.left;
      };
      const nodeStorage = {
          prevNode: null
      };
    flattenBinaryTreeImpl(root, nodeStorage);
      return currentNode;
  }
  
  function callback(nextNode, nodeStorage) {
      console.log(nextNode && nextNode.value, nodeStorage);
      if(nodeStorage.prevNode === null) {
          nodeStorage.prevNode = nextNode;
          return;
      }
      nodeStorage.prevNode.right = nextNode;
      nextNode.left = nodeStorage.prevNode;
      nodeStorage.prevNode = nextNode;
  }
  
  function flattenBinaryTreeImpl(root, nodeStorage) {
      if(root === null) return;
      let rightNode = root.right;
    flattenBinaryTreeImpl(root.left, nodeStorage);
      console.log(root.value, nodeStorage);
      callback(root, nodeStorage);
    flattenBinaryTreeImpl(rightNode, nodeStorage);
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.flattenBinaryTree = flattenBinaryTree;
  