services.factory('Tags', function() {

  // Some fake testing data
  var tags = [{
    id: 0,
    name: '#saude',
    color: '',
    datasets: [{}],
    visualizations: [{
      id: 0,
      name: '0'
    }]
  }, {
    id: 1,
    name: '#imposto',
    color: ''
  }, {
    id: 2,
    name: '#educação',
    color: ''
  }, {
    id: 3,
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
    }
  };
})

.factory('Datasets', function() {

  // Some fake testing data
  var datasets = [{
    id: 0,
    name: 'dataset0',
    img: '',
    description:'',
    creation: '',
    data: '',
    user: {},
    tags: {},
    visualizations: [{}]
  },{
    id: 1,
    name: 'dataset1',
    img: '',
    description:'',
    creation: '',
    data: '',
    user: {},
    tags: {},
    visualizations: [{}]
  },
  {
    id: 2,
    name: 'dataset2',
    img: '',
    description:'',
    creation: '',
    data: '',
    user: {},
    tags: {},
    visualizations: [{}]
  },
  {
    id: 3,
    name: 'dataset3',
    img: '',
    description:'',
    creation: '',
    data: '',
    user: {},
    tags: {},
    visualizations: [{}]
  },
  {
    id: 4,
    name: 'dataset3',
    img: '',
    description:'',
    creation: '',
    data: '',
    user: {},
    tags: {},
    visualizations: [{}]
  }];

  return {
    all: function() {
      return datasets;
    },

    remove: function(dataset) {
      datasets.splice(datasets.indexOf(dataset), 1);
    },

    get: function(datasetID) {
      for (var i = 0; i < datasets.length; i++) {
        if (datasets[i].id === parseInt(datasetID)) {
          return datasets[i];
        }
      }
      return null;
    },

    // getCategoria: function(categoriaId) {
    //   var categoria = [];

    //   for (var i = 0; i < estabelecimentos.length; i++) {
    //     if (estabelecimentos[i].categoria.id === parseInt(categoriaId)) {
    //       categoria.push(estabelecimentos[i]);
    //     }
    //   }
    //   return categoria;
    // }

  };
})

.factory('Visualizations', function() {

  // Some fake testing data
  var visualizations = [{
    id: 0,
    name: 'v0',
    description: '',
    color: '',
    user: '',
    img: '',
    thumb: '',
    follow: false,
    liked: false,
    likes: [{}],
    comments: [{}],
    datasets: [{}],
    tags: [{}]
  }, {
    id: 1,
    name: 'v1',
    description: '',
    color: '',
    user: '',
    img: '',
    thumb: '',
    follow: false,
    liked: false,
    likes: [{}],
    comments: [{}],
    datasets: [{}],
    tags: [{}]
  }, {
    id: 2,
    name: 'v2',
    description: '',
    color: '',
    user: '',
    img: '',
    thumb: '',
    follow: false,
    liked: false,
    likes: [{}],
    comments: [{}],
    datasets: [{}],
    tags: [{}]
  }, {
    id: 3,
    name: 'v3',
    description: '',
    color: '',
    user: '',
    img: '',
    thumb: '',
    follow: false,
    liked: false,
    likes: [{}],
    comments: [{}],
    datasets: [{}],
    tags: [{}]
  }, {
    id: 4,
    name: 'v4',
    description: '',
    color: '',
    user: '',
    img: '',
    thumb: '',
    follow: false,
    liked: false,
    likes: [{}],
    comments: [{}],
    datasets: [{}],
    tags: [{}]
  }, {
    id: 5,
    name: 'v5',
    description: '',
    color: '',
    user: '',
    img: '',
    thumb: '',
    follow: false,
    liked: false,
    likes: [{}],
    comments: [{}],
    datasets: [{}],
    tags: [{}]
  }, {
    id: 6,
    name: 'v6',
    description: '',
    color: '',
    user: '',
    img: '',
    thumb: '',
    follow: false,
    liked: false,
    likes: [{}],
    comments: [{}],
    datasets: [{}],
    tags: [{}]
  }, {
    id: 7,
    name: 'v7',
    description: '',
    color: '',
    user: '',
    img: '',
    thumb: '',
    follow: false,
    liked: false,
    likes: [{}],
    comments: [{}],
    datasets: [{}],
    tags: [{}]
  }];

  return {
    all: function() {
      return visualizations;
    },
    remove: function(visualization) {
      visualizations.splice(visualizations.indexOf(visualization), 1);
    },
    get: function(visualizationID) {
      for (var i = 0; i < visualizations.length; i++) {
        if (visualizations[i].id === parseInt(visualizationID)) {
          return visualizations[i];
        }
      }
      return null;
    }
  };
})

.factory('Notifications', function() {

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
