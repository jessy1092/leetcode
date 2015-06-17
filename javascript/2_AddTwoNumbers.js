/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    if (l1.val < 10) {
      return l1;
    }
    l2 = new ListNode(0);
  }

  var sum = l1.val + l2.val;
  var carry = parseInt(sum / 10);
  var result = new ListNode(sum % 10);

  if (carry > 0) {
    var tmpNext = new ListNode(carry);
    if (l1.next !== null) {
      tmpNext.val += l1.next.val;
      tmpNext.next = l1.next.next;
      result.next = addTwoNumbers(tmpNext, l2.next);
      return result;
    }
    if (l2.next !== null) {
      tmpNext.val += l2.next.val;
      tmpNext.next = l2.next.next;
      result.next = addTwoNumbers(tmpNext, l1.next);
      return result;
    }
    result.next = tmpNext
  } else {
    result.next = addTwoNumbers(l1.next, l2.next);
  }
  return result;
};
