var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var Todo = require('../src/todo');

describe('todo', function () {
  it('renders without problems', function () {
    var todo = TestUtils.renderIntoDocument(<Todo/>);
    expect(todo).toExist();
  });
});
