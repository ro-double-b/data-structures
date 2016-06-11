describe('parentTree', function() {
  var nwParentTree;

  beforeEach(function() {
    nwParentTree = parentTree();
  });

  it('should have methods named "addChild", "contains", "removeFromParent", "traverse" and a property named "value"', function() {
    expect(nwParentTree.addChild).to.be.a('function');
    expect(nwParentTree.contains).to.be.a('function');
    expect(nwParentTree.removeFromParent).to.be.a('function');
    expect(nwParentTree.traverse).to.be.a('function');
    expect(nwParentTree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the parentTree', function() {
    nwParentTree.addChild(5);
    expect(nwParentTree.children[0].value).to.equal(5);
  });

  it('should have children with the correct parent property', function() {
    nwParentTree.addChild(7);
    nwParentTree.children[0].addChild(9);
    expect(nwParentTree.children[0].children[0].parent.value).to.equal(7);
    expect(nwParentTree.children[0].parent.value).to.equal(undefined);
  });

  it ('should propertly remove child from parent', function() {
    nwParentTree.addChild(1);
    var child = nwParentTree.children[0];
    nwParentTree.addChild(2);
    child.addChild(9);
    child.removeFromParent();
    expect(child.parent).to.equal(null);
    expect(nwParentTree.children[0].value).to.equal(2);
  });

  it('should return true for a value that the parentTree contains', function() {
    nwParentTree.addChild(5);
    expect(nwParentTree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    nwParentTree.addChild(5);
    expect(nwParentTree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a parentTree\'s child', function() {
    nwParentTree.addChild(5);
    nwParentTree.children[0].addChild(6);
    expect(nwParentTree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    nwParentTree.addChild(5);
    nwParentTree.addChild(6);
    nwParentTree.children[0].addChild(7);
    nwParentTree.children[1].addChild(8);
    expect(nwParentTree.contains(7)).to.equal(true);
    expect(nwParentTree.contains(8)).to.equal(true);
  });

  it('should traverse the parentTree, executing a callback', function() {
    nwParentTree.addChild(1);
    nwParentTree.addChild(2);
    nwParentTree.children[0].addChild(3);
    
    var results = [];
    nwParentTree.traverse(function(value) {
      results.push(value);
    });

    expect(results[1]).to.equal(1);
    expect(results[2]).to.equal(3);
    expect(results[3]).to.equal(2);
  });

});
