var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;

  obj.insert = function(childVal) {
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

    for (var j = 1; j < row; j++) {
      resultObj[j].forEach(function(element) {
        callback(element.value);
      });
    }
  };

  return obj;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */