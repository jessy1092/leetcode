/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return 1;
  }

  if (root.left === null) {
    return 1 + maxDepth(root.right);
  }

  if (root.right === null) {
    return 1 + maxDepth(root.left);
  }

  const right = maxDepth(root.right);
  const left = maxDepth(root.left);

  return right > left ? right + 1 : left + 1;
};

// const tree = {
//   val: 3,
//   left: {
//     val: 9,
//     right: null,
//     left: null,
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       right: null,
//       left: null,
//     },
//     right: {
//       val: 7,
//       right: null,
//       left: null,
//     },
//   },
// };

// console.log("result", maxDepth(tree));
