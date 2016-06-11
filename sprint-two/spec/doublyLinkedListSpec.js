describe('doublyLinkedList', function() {
  beforeEach(function() {
    doubleList = new doublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doubleList).to.have.property('head');
    expect(doubleList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addtoHead", "removeHead", and "contains"', function() {
    expect(doubleList.addToTail).to.be.a('function');
    expect(doubleList.addToHead).to.be.a('function');
    expect(doubleList.removeHead).to.be.a('function');
    expect(doubleList.contains).to.be.a('function');
  });

  it('should designate a new tail when using addToTail', function() {
    doubleList.addToTail(4);
    expect(doubleList.tail.value).to.equal(4);
    doubleList.addToTail(5);
    expect(doubleList.tail.value).to.equal(5);
  });

  it('should designate a new head when using addToHead', function() {
    doubleList.addToHead(1);
    doubleList.addToHead(3);
    expect(doubleList.head.value).to.equal(3);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doubleList.addToTail(4);
    doubleList.addToTail(5);
    expect(doubleList.head.value).to.equal(4);
    doubleList.removeHead();
    expect(doubleList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doubleList.addToTail(4);
    expect(doubleList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doubleList.addToTail(4);
    doubleList.addToTail(5);
    expect(doubleList.contains(4)).to.equal(true);
    expect(doubleList.contains(5)).to.equal(true);
    expect(doubleList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doubleList.addToTail(4);
    doubleList.addToTail(5);
    doubleList.removeHead();
    expect(doubleList.contains(4)).to.equal(false);
  });

  it('should move from tail node to head node', function() {
    doubleList.addToHead(1);
    doubleList.addToTail(2);
    doubleList.addToHead(3);
    expect(doubleList.tail.previous.previous.value).to.equal(3);
  });
});