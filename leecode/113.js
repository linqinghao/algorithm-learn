// 二叉树路径和
// DFS + 回溯算法

var findPath = function(node, sum, stack, count, ret) {
  stack.push(node.val);
  
  count += node.val

  if (!node.left && !node.right && sum == count) {
      ret.push(stack.slice(0));
  }

  if(node.left) {
      findPath(node.left, sum, stack, count, ret)
  }

  if(node.right) {
      findPath(node.right, sum, stack, count, ret)
  }

  stack.pop();
}

var pathSum = function(root, sum) {
  let ret = [];
  if (root) {
      findPath(root, sum, [], 0, ret)
  }
  return ret;
};