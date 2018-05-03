services.factory('Visualizations', function() {

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