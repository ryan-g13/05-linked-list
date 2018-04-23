'use strict';

const Node = require('./node');
const Node2 = require('../lib/node2');


module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  // pop (from a position) methodology 
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
  doubleMap(value) {
    const node = new Node2(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    console.log(this.head.value);
    while (currentNode.next) {
      currentNode.value *= 2;
      currentNode = currentNode.next;
    }
    console.log(this.head.value);
    currentNode.next = node;
    return this;
  }

  // Pass in parameter to constructor creating/adding values to the existing node list. 
  // AKA splice @ 0
  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  // Pass in value to constructor and append value to the end of the linked list.
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
