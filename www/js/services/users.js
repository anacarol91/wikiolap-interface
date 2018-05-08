services.factory('Users', function() {

  var ana = {
    id: 0,
    name: 'Ana Carolina',
    avatar: 'img/adam.jpg'
  }

  var glivia = {
    id: 1,
    name: 'Glívia',
    avatar: 'img/ben.png'
  }

  var ismael = {
    id: 2,
    name: 'Ismael',
    avatar: 'img/max.png'
  }

  var flavio = {
    id: 3,
    name: 'Flávio',
    avatar: 'img/mike.png'
  }

  // Some fake testing data
  var users = [{
    id: ana.id,
    name: ana.name,
    avatar: ana.avatar,
    following: [glivia, ismael, flavio],
    followers: [glivia, ismael, flavio]
  }, {
    id: glivia.id,
    name: glivia.name,
    avatar: glivia.avatar,
    following: [ana, ismael, flavio],
    followers: [ana, ismael, flavio]
  }, {
    id: ismael.id,
    name: ismael.name,
    avatar: ismael.avatar,
    following: [ana, glivia, flavio],
    followers: [ana, glivia, flavio]
  }, {
    id: flavio.id,
    name: flavio.name,
    avatar: flavio.avatar,
    following: [ana, glivia, ismael],
    followers: [ana, glivia, ismael]
  }];

  return {
    all: function() {
      return users;
    },
    remove: function(user) {
      users.splice(users.indexOf(user), 1);
    },
    get: function(userID) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(userID)) {
          return users[i];
        }
      }
      return null;
    }
  };
})
