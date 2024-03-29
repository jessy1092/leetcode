/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  if (root.children.length === 0) {
    return 1;
  }

  const depths = root.children.map((child) => maxDepth(child));

  return Math.max(...depths) + 1;
};
