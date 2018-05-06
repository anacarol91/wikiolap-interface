services.factory('Notifications', function() {

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
  var notifications = [{
    id: 0,
    user: glivia,
    action: ' comentou em sua visualização.',
    time: '10m',
    visualization: {
      id: 0
    }
  }, {
   id: 1,
    user: ismael,
    action: ' curtiu uma visualização que você segue.',
    time: '1h',
    visualization: {
      id: 1
    }
  }, {
    id: 2,
    user: glivia,
    action: ' curtiu sua visualização.',
    time: '5h',
    visualization: {
      id: 0
    }
  }, {
    id: 3,
    user: flavio,
    action: ' comentou em uma visualização que você segue.',
    time: '2d',
    visualization: {
      id: 3
    }
  }];

  return {
    all: function() {
      return notifications;
    },
    remove: function(notification) {
      notifications.splice(notifications.indexOf(notification), 1);
    },
    get: function(notificationID) {
      for (var i = 0; i < notifications.length; i++) {
        if (notifications[i].id === parseInt(notificationID)) {
          return notifications[i];
        }
      }
      return null;
    }
  };
})
