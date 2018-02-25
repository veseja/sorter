
var o;
var count;

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

class Sorter {
    constructor() {
        o = [];
        count = 0;
  }

    add(element) {
        o[count] = element;
        count++;
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
      var a = [];
      var b = [];
      a = indices;
          a.sort(compareNumeric);
          for (var i = 0; i < indices.length; i++) {
              b[i] = o[a[i]];
          }
          b.sort(compareNumeric);
          for (var i = 0; i < indices.length; i++) {
              o[a[i]] = b[i];
          }
  }

  setComparator(compareFunction) {
      compareNumeric = compareFunction;
  }
}

module.exports = Sorter;