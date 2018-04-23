'use strict';

const Node = require('./node');
const Node2 = require('../lib/node2');


module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // pop (from a position) methodology 
  // O (n) = for space is linear with respect to input will grow as input grows. 
  // O (n) = for time is going to linearly grow with the input.
  pop(position) {
    if (!this.head) {
      throw new Error('__ERROR__ List is empty');
    }
    if (this.head.value === position) {
      this.head = this.head.next;
    } else {
      let previousNode = this.head;
      let currentNode = previousNode.next;
      while (currentNode) {
        if (currentNode.value === position) {
          previousNode.next = currentNode.next;
          currentNode = currentNode.next;
          break;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    }
    return this;
  }

  // Map functionality (currently written as a doubling value function)
  // O (n^2) = for space is 2 levels of operations per input will grow as input grows. 
  // O (n^2) = for time is going to grow with the input. 
  doubleMap(value, callback) {
    const mapList = new Node2(value);
    let currentNode = this.head;
    while (currentNode.next) {
      mapList.insertAtEnd(callback(value));
      currentNode = currentNode.next;
    }
  }

  // Pass in parameter to constructor creating/adding values to the existing node list. 
  // AKA splice @ 0
  // O (n) = for space is linear with respect to input will grow as input grows. 
  // O (n) = for time is going to linearly grow with the input.
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // Pass in value to constructor and append value to the end of the linked list.
  // O (n) = for space is linear with respect to input will grow as input grows. 
  // O (n) = for time is going to linearly grow with the input.
  insertAtEnd(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  // search through linked list for particular value specified as parameter. 
  // O (n) = for space is linear with respect to input will grow as input grows. 
  // O (n) = for time is going to linearly grow with the input. 
  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ List is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
};
