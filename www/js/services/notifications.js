services.factory('Notifications', function() {

  // Some fake testing data
  var notifications = [{
    id: 0,
    user: {},
    action: '',
    time: '10min',
    visualization: {}
  }, {
   id: 1,
    user: {},
    action: '',
    time: '1h',
    visualization: {}
  }, {
    id: 2,
    user: {},
    action: '5h',
    time: '5h',
    visualization: {}
  }, {
    id: 3,
    user: {},
    action: '2d',
    time: '2d',
    visualization: {}
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
