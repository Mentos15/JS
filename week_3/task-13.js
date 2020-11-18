//https://leetcode.com/problems/design-add-and-search-words-data-structure/submissions/

var WordDictionary = function () {
  this.root = {};
};

WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let key of word) {
    if (!(key in node)) {
      node[key] = {};
    }
    node = node[key];
  }
  node.isFullWord = true;
};

WordDictionary.prototype.search = function (word) {
  let node = this.root;

  function find(node2, i) {
    if (i === word.length) return !!node2.isFullWord;

    if (word[i] === '.') {
      for (let k in node2) {
        if (find(node2[k], i + 1)) return true;
      }
    } else if (node2[word[i]] !== undefined) {
      return find(node2[word[i]], i + 1);
    }
    return false;
  };
  return find(node, 0);
};

