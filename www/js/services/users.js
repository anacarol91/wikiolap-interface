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
    follow: false,
    following: [glivia, flavio],
    followers: [glivia, ismael, flavio]
  }, {
    id: glivia.id,
    name: glivia.name,
    avatar: glivia.avatar,
    follow: true,
    following: [ana, ismael, flavio],
    followers: [ana, ismael, flavio]
  }, {
    id: ismael.id,
    name: ismael.name,
    avatar: ismael.avatar,
    follow: false,
    following: [ana, glivia, flavio],
    followers: [ana, glivia, flavio]
  }, {
    id: flavio.id,
    name: flavio.name,
    avatar: flavio.avatar,
    follow: true,
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
    },
    setID: function(userID) {
      this.user = userID;
    },
    getID: function() {
      return this.user;
    }
  };
})
