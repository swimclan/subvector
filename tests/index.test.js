const Vector = require('../src/vector');
const Node = require('../src/node');

describe('Node()', () => {
  let n;
  beforeEach(() => {
    n = Node(1, 20);
  });
  test('It will create a new node with a value and a min and max', () => {
    expect(n.value).toEqual(20);
    expect(n.min).toEqual(1);
    expect(n.max).toEqual(1);
  });

  test('It will incremement the node\'s range', () => {
    n.increment();
    expect(n.min).toEqual(2);
    expect(n.max).toEqual(2);
  });
});

describe('Vector()', () => {
  let v;
  beforeEach(() => {
    v = Vector();
  });
  test('It will create an empty vector upon factory execution', () => {
    expect(v.get(1)).toEqual([]);
  });

  test('It will add a new node to the vector', () => {
    v.add(23);
    expect(v.get(1)).toEqual([23]);
  });

  test('It will retrieve a vector array for a given period', () => {
    v.add(12);
    v.add(23);
    v.add(34);
    v.add(45);
    expect(v.get(4)).toEqual([12, 23, 34, 45]);
    expect(v.get(3)).toEqual([23, 34, 45]);
    expect(v.get(2)).toEqual([34, 45]);
    expect(v.get(1)).toEqual([45]);
  });

  test('It will return a length property equal to the length of the entire vector', () => {
    v.add(1);
    v.add(2);
    expect(v.length).toEqual(2);
    v.add(3);
    v.add(4);
    expect(v.length).toEqual(4);
  });

  test('It will return the value a a specific place in the vector', () => {
    v.add(1);
    v.add(2);
    v.add(3);
    v.add(4);
    expect(v.at(4)).toEqual(4);
    expect(v.at(1)).toEqual(1);
  });

  test('It will iterate with a predicate function over each node in the vector', () => {
    const fn = jest.fn();
    v.add(1);
    v.add(2);
    v.add(3);
    v.add(4);
    v.each(fn);
    expect(fn).toHaveBeenCalledTimes(4);
    expect(fn).toHaveBeenNthCalledWith(1, 1, 1);
    expect(fn).toHaveBeenNthCalledWith(2, 2, 2);
    expect(fn).toHaveBeenNthCalledWith(3, 3, 3);
    expect(fn).toHaveBeenNthCalledWith(4, 4, 4);
  });
});