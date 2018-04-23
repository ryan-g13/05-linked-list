'use strict';

const LinkedList = require('../lib/linked-list');
const Node = require('../lib/node');
// const Node2 = require('../lib/node2');


describe('This is a testing suite for the linked-list.js file to verify if inputs work', () => {
  test('#constructor-works', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('#insertAtHead', () => {
    const testList = new LinkedList();
    testList.insertAtHead(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtHead(6);
    expect(testList.head.value).toEqual(6);
    expect(testList.head.next.value).toEqual(5);

    testList.insertAtHead(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);
  });

  test('#insertAtEnd-works', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    expect(testList.head.value).toEqual(5);

    testList.insertAtEnd(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);

    testList.insertAtEnd(7);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
  });
  test('#findvalue-works', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(13);
    testList.insertAtEnd(17);
    testList.insertAtEnd(19);

    expect(testList.find(19)).toBeInstanceOf(Node);
    expect(testList.find(4)).toBeNull();
  });
  test('#popvalue-works', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(13);
    testList.insertAtEnd(17);
    testList.insertAtEnd(19);

    // Three edge case tests - head middle and tail being popped off
    expect(testList.pop(13)).toEqual(testList);
    expect(testList.pop(17)).toEqual(testList);
    expect(testList.pop(19)).toEqual(testList);
  });
  test('#doublevalue-works', () => {
    const testList = new LinkedList();
    testList.doubleMap(19);
    expect(testList.head.value).toEqual(19);
    console.log(testList.head.value);

    testList.doubleMap(17);
    expect(testList.head.value).toEqual(19);
    expect(testList.head.next.value).toEqual(17);
    console.log(testList.head.value, '2');
    console.log(testList.head.next.value);

    testList.doubleMap(13);
    expect(testList.head.value).toEqual(38);
    expect(testList.head.next.value).toEqual(17);
    expect(testList.head.next.next.value).toEqual(13);
    console.log(testList.head.value, '3');
    console.log(testList.head.next.value, '3');
    console.log(testList.head.next.next.value);
  });
});
