var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;

  obj.allowRebalance = true;

  obj.insert = function(childVal) {

    var minDepth = obj.findMinDepth() - 1;
    var maxDepth = obj.findMaxDepth() - 1;

    if (minDepth / maxDepth < .5 && obj.allowRebalance) {
      obj.reBalance();
    }

    if (childVal > obj.value) {
      if (obj.right === null) {
        obj.right = BinarySearchTree(childVal);
      } else {
        obj.right.insert(childVal);
      }
    } else {
      if (obj.left === null) {
        obj.left = BinarySearchTree(childVal);
      } else {
        obj.left.insert(childVal);
      }
    }


  };

  obj.contains = function(target) {
    if (obj.value === target) {
      return true;
    }
    if (obj.left) {
      if (obj.left.contains(target)) {
        return true;
      }
    }
    if (obj.right) {
      if (obj.right.contains(target)) {
        return true;
      }
    }
    return false;
  };

  obj.depthFirstLog = function(callback) {
    var instance = obj;
    callback(obj.value);
    if (obj.left) {
      instance = obj.left;
      instance.depthFirstLog(callback);
    }
    if (obj.right) {
      instance = obj.right;
      instance.depthFirstLog(callback);
    }

  };
 
  obj.breadthFirstLog = function(callback) {
    var resultObj = obj.mapTree();
    var maxKey = Object.keys(resultObj).length;

    for (var j = 1; j <= maxKey; j++) {
      resultObj[j].forEach(function(element) {
        console.log(element.value);
        callback(element.value);
      });
    }
  };

  obj.mapTree = function() {
    var resultObj = {};
    var row = 1;

    resultObj[row] = [obj];
    
    while (resultObj[row].length !== 0) {
      resultObj[row + 1] = [];
      for (i = 0; i < resultObj[row].length; i++) {
        
        if (resultObj[row][i].left !== null) {
          resultObj[row + 1].push(resultObj[row][i].left);
        }
        if (resultObj[row][i].right !== null) {
          resultObj[row + 1].push(resultObj[row][i].right);
        }
      }
      row++;
    }
    return resultObj;
  };

  obj.findMaxDepth = function() {
    var resultObj = obj.mapTree();
    return Object.keys(resultObj).length;
  };

  obj.findMinDepth = function() {
    var resultObj = obj.mapTree();
    var maxRow = Object.keys(resultObj).length;
    var test = 1;
    for (var i = 1; i <= maxRow; i++) {
      if (resultObj[i].length === test) {
        test = test * 2;
      } else {
        return i;
      }
    }
    return maxRow;
  };

  obj.reBalance = function() {
    debugger;
    var values = []; 
    obj.depthFirstLog(function(element) {
      values.push(element);
    });

    var compareNumbers = function(a, b) {
      return a - b;
    };

    values.sort(compareNumbers);
    var middleIndex = Math.floor(values.length / 2);

    obj.left = null;
    obj.right = null;

    obj.value = (values[middleIndex]);
    obj.allowRebalance = false;

    var makeBalancedTree = function(array) {
      var middle = Math.floor(array.length / 2);
      obj.insert(array[middle]);

      if (array.length > 1) {
        makeBalancedTree(array.slice(0, middle));
        makeBalancedTree(array.slice(middle + 1, array.length));
      }
    };

    makeBalancedTree(values.slice(0, middleIndex));
    makeBalancedTree(values.slice(middleIndex + 1, values.length));
    obj.allowRebalance = true;
  };

  return obj;
};

// [60, 70, 80, 90, 95, 100, 110, 120, 130, 140]
/*
 * Complexity: What is the time complexity of the above functions?

  5
3    7
  4 6  






 */