
var assert = require('assert');
var RangePosition = require('../');

describe('range-position', function () {
  var div;

  afterEach(function () {
    if (div) {
      // clean up...
      document.body.removeChild(div);
      div = null;
    }
  });

  it('should return `BEFORE`', function () {
    div = document.createElement('div');
    div.innerHTML = 'foo <b>bar</b> baz';
    div.setAttribute('contenteditable', 'true');
    document.body.appendChild(div);

    var b = div.childNodes[1];

    var range = document.createRange();
    range.setStart(div.firstChild, 2);
    range.setEnd(div.firstChild, 2);
    assert(range.collapsed);

    var pos = RangePosition(range, b);
    assert.equal(pos, RangePosition.BEFORE);
  });

  it('should return `START`', function () {
    div = document.createElement('div');
    div.innerHTML = 'foo <b>bar</b> baz';
    div.setAttribute('contenteditable', 'true');
    document.body.appendChild(div);

    var b = div.childNodes[1];

    var range = document.createRange();
    range.setStart(b.firstChild, 0);
    range.setEnd(b.firstChild, 0);
    assert(range.collapsed);

    var pos = RangePosition(range, b);
    assert.equal(pos, RangePosition.START);
  });

  it('should return `MIDDLE`', function () {
    div = document.createElement('div');
    div.innerHTML = 'foo <b>bar</b> baz';
    div.setAttribute('contenteditable', 'true');
    document.body.appendChild(div);

    var b = div.childNodes[1];

    var range = document.createRange();
    range.setStart(b.firstChild, 1);
    range.setEnd(b.firstChild, 1);
    assert(range.collapsed);

    var pos = RangePosition(range, b);
    assert.equal(pos, RangePosition.MIDDLE);
  });

  it('should return `END`', function () {
    div = document.createElement('div');
    div.innerHTML = 'foo <b>bar</b> baz';
    div.setAttribute('contenteditable', 'true');
    document.body.appendChild(div);

    var b = div.childNodes[1];

    var range = document.createRange();
    range.setStart(b.firstChild, 3);
    range.setEnd(b.firstChild, 3);
    assert(range.collapsed);

    var pos = RangePosition(range, b);
    assert.equal(pos, RangePosition.END);
  });

  it('should return `AFTER`', function () {
    div = document.createElement('div');
    div.innerHTML = 'foo <b>bar</b> baz';
    div.setAttribute('contenteditable', 'true');
    document.body.appendChild(div);

    var b = div.childNodes[1];

    var range = document.createRange();
    range.setStart(div.lastChild, 1);
    range.setEnd(div.lastChild, 1);
    assert(range.collapsed);

    var pos = RangePosition(range, b);
    assert.equal(pos, RangePosition.AFTER);
  });

});
