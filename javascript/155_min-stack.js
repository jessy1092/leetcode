var MinStack = function () {
  this.array = [];
  this.indexTail = 0;
  this.minNum = null;
  this.minNumIndex = 0;
  this.minNumIndexArray = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.array[this.indexTail] = val;

  if (this.minNum === null || this.minNum > val) {
    this.minNum = val;
    this.minNumIndex = this.indexTail;
  }

  this.minNumIndexArray[this.indexTail] = this.minNumIndex;

  this.indexTail++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.indexTail--;
  this.minNumIndex = this.minNumIndexArray[this.indexTail - 1] || 0;
  this.minNum = this.array[this.minNumIndex] || null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.array[this.indexTail - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.array[this.minNumIndexArray[this.indexTail - 1]];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// const func = [
//   "push",
//   "push",
//   "push",
//   "top",
//   "pop",
//   "getMin",
//   "pop",
//   "getMin",
//   "pop",
//   "push",
//   "top",
//   "getMin",
//   "push",
//   "top",
//   "getMin",
//   "pop",
//   "getMin",
// ];

// const input = [
//   [2147483646],
//   [2147483646],
//   [2147483647],
//   [],
//   [],
//   [],
//   [],
//   [],
//   [],
//   [2147483647],
//   [],
//   [],
//   [-2147483648],
//   [],
//   [],
//   [],
//   [],
// ];

// const minStack = new MinStack();

// const result = [];

// func.forEach((funcName, index) => {
//   const inputArray = input[index];
//   const func = minStack[funcName];
//   const output = func.apply(minStack, inputArray);
//   result.push(output);
// });

// console.log(result);
