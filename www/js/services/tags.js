services.factory('Tags', function() {

  // Some fake testing data
  var tags = [{
    id: 0,
    name: '#saúde',
    color: ''
  }, {
    id: 1,
    name: '#investimentos',
    color: ''
  }, {
    id: 2,
    name: '#educação',
    color: ''
  }, {
    id: 3,
    name: '#agricultura',
    color: ''
  }, {
    id: 4,
    name: '#turismo',
    color: ''
  }];

  return {
    all: function() {
      return tags;
    },
    remove: function(tag) {
      tags.splice(tags.indexOf(tag), 1);
    },
    get: function(tagID) {
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].id === parseInt(tagID)) {
          return tags[i];
        }
      }
      return null;
    },
    setID: function(itemID) {
      this.tag = itemID;
    },
    getID: function() {
      return this.tag;
    }
  };
})