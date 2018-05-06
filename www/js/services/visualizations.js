services.factory('Visualizations', function() {

  var img01 = 'img/grafico01.PNG'
  var img02 = 'img/grafico02.PNG'
  var img03 = 'img/grafico03.PNG'

  var ana = {
    id: 0,
    name: 'Ana Carolina',
    avatar: 'img/adam.jpg'
  }

  var glivia = {
    id: 1,
    name: 'Glívia',
    avatar: 'img/ben.jpg'
  }

  var ismael = {
    id: 2,
    name: 'Ismael',
    avatar: 'img/max.jpg'
  }

  var flavio = {
    id: 3,
    name: 'Flávio',
    avatar: 'img.mike.jpg'
  }

  // Some fake testing data
  var visualizations = [{
    id: 0,
    name: 'v0',
    description: '',
    color: '',
    user: ana,
    img: img02,
    thumb: '',
    follow: false,
    liked: false,
    likes: [],
    comments: [{}],
    datasets: [{}],
    tag: 2
  }, {
    id: 1,
    name: 'v1',
    description: '',
    color: '',
    user: ismael,
    img: img01,
    thumb: '',
    follow: true,
    liked: false,
    likes: [ana, flavio],
    comments: [{}],
    datasets: [{}],
    tag: 2
  }, {
    id: 2,
    name: 'v2',
    description: '',
    color: '',
    user: flavio,
    img: img03,
    thumb: '',
    follow: true,
    liked: true,
    likes: [ana],
    comments: [{}],
    datasets: [{}],
    tag: 2
  }, {
    id: 3,
    name: 'v3',
    description: '',
    color: '',
    user: glivia,
    img: img02,
    thumb: '',
    follow: true,
    liked: true,
    likes: [ana, ismael],
    comments: [{}],
    datasets: [{}],
    tag: 2
  }, {
    id: 4,
    name: 'v4',
    description: '',
    color: '',
    user: ana,
    img: img01,
    thumb: '',
    follow: false,
    liked: false,
    likes: [flavio, ismael],
    comments: [{}],
    datasets: [{}],
    tag: 2
  }, {
    id: 5,
    name: 'v5',
    description: '',
    color: '',
    user: ana,
    img: img02,
    thumb: '',
    follow: false,
    liked: false,
    likes: [flavio, glivia, ismael],
    comments: [{}],
    datasets: [{}],
    tag: 2
  }, {
    id: 6,
    name: 'v6',
    description: '',
    color: '',
    user: ana,
    img: img03,
    thumb: '',
    follow: false,
    liked: true,
    likes: [ana, flavio, glivia, ismael],
    comments: [{}],
    datasets: [{}],
    tag: 2
  }, {
    id: 7,
    name: 'v7',
    description: '',
    color: '',
    user: ana,
    img: img03,
    thumb: '',
    follow: false,
    liked: true,
    likes: [ana, glivia, ismael],
    comments: [{}],
    datasets: [{}],
    tag: 2
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
    },

    getByUser: function(userID) {
      var result = [];

      for (var i = 0; i < visualizations.length; i++) {
        if (visualizations[i].user.id === parseInt(userID)) {
          result.push(visualizations[i]);
        }
      }
      return result;
    },

    getByTag: function(tagID) {
      var result = [];

      for (var i = 0; i < visualizations.length; i++) {
        if (visualizations[i].user.id === parseInt(tagID)) {
          result.push(visualizations[i]);
        }
      }
      return result;
    }
  };
})
