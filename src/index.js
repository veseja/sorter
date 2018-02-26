var o;

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
function cn(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

class Sorter {
    constructor() {
        o = [];
  }

    add(element) {
        o.push(element);
  }

    at(index) {
        return o[index];
  }

    get length() {
        return o.length;
    }

  toArray() {
      return o;
  }

  sort(indices) {
      var b = [];
      indices.sort(cn);
      for (var i = 0; i < indices.length; i++) {
          b[i] = o[indices[i]];
      }
      b.sort(compareNumeric);
      for (var i = 0; i < indices.length; i++) {
          o[indices[i]] = b[i];
      }
  }

  setComparator(compareFunction) {
      compareNumeric = compareFunction;
  }
}

module.exports = Sorter;