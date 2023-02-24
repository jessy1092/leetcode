var MyStack = function () {
  this.queue = [];
  this.tmpQueue = [];
  this.last = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
  this.last = x;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length > 1) {
    const tmp = this.queue.shift();
    this.tmpQueue.push(tmp);
    this.last = tmp;
  }

  const result = this.queue.shift();

  while (this.tmpQueue.length > 0) {
    this.queue.push(this.tmpQueue.shift());
  }

  if (this.queue.length === 0) {
    this.last = null;
  }

  return result;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.last;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
