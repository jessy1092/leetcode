var MyQueue = function () {
  this.stack = [];
  this.tmpStack = [];
  this.first = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);

  if (this.stack.length == 1) {
    this.first = x;
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.stack.length > 1) {
    const tmp = this.stack.pop();
    this.tmpStack.push(tmp);
    this.first = tmp;
  }

  const result = this.stack.pop();

  while (this.tmpStack.length > 0) {
    this.stack.push(this.tmpStack.pop());
  }

  if (this.stack.length === 0) {
    this.first = null;
  }

  return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.first;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
