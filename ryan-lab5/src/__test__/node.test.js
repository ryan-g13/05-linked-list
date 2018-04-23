'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('default constructor', () => {
    const node = new Node('Tests');

    expect(node.value).toEqual('Tests');
    expect(node.next).toBeNull();
  });
});
