const invertTree = function(root) {
  if (!root) return root;
  const stack = [root];
  let cur = null;
  while ((cur = stack.shift())) {
    const left = cur.left;
    const right = cur.right;
    cur.right = left;
    cur.left = right;

    if (left) {
      stack.push(left);
    }
    if (right) {
      stack.push(right);
    }
  }
  return root;
};
