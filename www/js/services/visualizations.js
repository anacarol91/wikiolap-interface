services.factory('Visualizations', function() {

  var img01 = 'img/grafico01.PNG'
  var img02 = 'img/grafico02.PNG'
  var img03 = 'img/grafico03.PNG'
  var img04 = 'img/grafico04.PNG'

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
  var visualizations = [{
    id: 0,
    name: 'Valor arrecadado pelo imposto CPMF ao longo dos anos',
    description: 'Valor arrecadado pelo imposto CPMF ao longo dos anos',
    color: '',
    user: ana,
    img: img02,
    thumb: '',
    follow: false,
    liked: false,
    likes: [ismael, glivia],
    comments: [{
      user: ismael,
      text: 'Muito legal!!',
      time: '2h',
      likes: 23,
      liked: true
    }],
    datasets: [{}],
    tag: 1
  }, {
    id: 1,
    name: 'Visualização 01',
    description: 'Valor arrecadado pelo imposto CPMF ao longo dos anos',
    color: '',
    user: ismael,
    img: img01,
    thumb: '',
    follow: true,
    liked: false,
    likes: [ana, flavio],
    comments: [{
      user: flavio,
      text: 'Os dados parecem estar incorretos!',
      time: '4h',
      likes: 3,
      liked: false
    },{
      user: glivia,
      text: 'Gostei bastante, muito útil',
      time: '1d',
      likes: 9,
      liked: true
    }],
    datasets: [{}],
    tag: 2
  }, {
    id: 2,
    name: 'Indicadores sobre Aquicultura familiar',
    description: 'Valor arrecadado pelo imposto CPMF ao longo dos anos',
    color: '',
    user: ismael,
    img: img03,
    thumb: '',
    follow: true,
    liked: true,
    likes: [ana],
    comments: [{
      user: ismael,
      text: 'Os dados parecem estar incorretos!',
      time: '3h',
      likes: 0,
      liked: false
    },{
      user: glivia,
      text: 'Gostei bastante, muito útil',
      time: '4d',
      likes: 9,
      liked: true
    },{
      user: ana,
      text: 'Bacana',
      time: '2m',
      likes: 2,
      liked: false
    }],
    datasets: [{}],
    tag: 3
  }, {
    id: 3,
    name: 'Valor arrecadado',
    description: 'Valor arrecadado pelo imposto CPMF ao longo dos anos',
    color: '',
    user: glivia,
    img: img04,
    thumb: '',
    follow: true,
    liked: true,
    likes: [ana, ismael],
    comments: [{
      user: ana,
      text: 'Gostei bastante, muito útil',
      time: '4d',
      likes: 9,
      liked: false
    }],
    datasets: [{}],
    tag: 4
  }, {
    id: 4,
    name: 'Proporção de pacientes HIV positivo',
    description: 'Este indicador expressa o poder de captação precoce dos casos de HIV positivo para tratamento a partir do nível de comprometimentodo sistema imunológico dos indivíduos infectados ao serem testados para verificação de indicação de Terapia Anti Retroviral(TARV)',
    color: '',
    user: ana,
    img: img01,
    thumb: '',
    follow: false,
    liked: false,
    likes: [flavio, ismael, glivia, ana],
    comments: [{
      user: glivia,
      text: 'Gostei bastante, muito útil',
      time: '4d',
      likes: 9,
      liked: true
    },{
      user: flavio,
      text: 'Bacana',
      time: '2m',
      likes: 5,
      liked: true
    }],
    datasets: [{}],
    tag: 2
  }, {
    id: 5,
    name: 'Visualização 05',
    description: 'Valor arrecadado pelo imposto CPMF ao longo dos anos',
    color: '',
    user: ana,
    img: img02,
    thumb: '',
    follow: false,
    liked: false,
    likes: [flavio, glivia, ismael],
    comments: [{
      user: ismael,
      text: 'Os dados parecem estar incorretos!',
      time: '3h',
      likes: 0,
      liked: false
    },{
      user: flavio,
      text: 'Gostei bastante, muito útil',
      time: '4d',
      likes: 9,
      liked: true
    }],
    datasets: [{}],
    tag: 1
  }, {
    id: 6,
    name: 'Visualização 06',
    description: 'Valor arrecadado pelo imposto CPMF ao longo dos anos',
    color: '',
    user: ana,
    img: img03,
    thumb: '',
    follow: false,
    liked: true,
    likes: [],
    comments: [{
      user: ismael,
      text: 'Os dados parecem estar incorretos!',
      time: '3h',
      likes: 12,
      liked: false
    }],
    datasets: [{}],
    tag: 2
  }, {
    id: 7,
    name: 'Visualização 07',
    description: 'Valor arrecadado pelo imposto CPMF ao longo dos anos',
    color: '',
    user: ana,
    img: img04,
    thumb: '',
    follow: false,
    liked: true,
    likes: [ana, glivia, ismael],
    comments: [],
    datasets: [{}],
    tag: 3
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

    getFollowed: function() {
      var result = [];

      for (var i = 0; i < visualizations.length; i++) {
        if (visualizations[i].follow) {
          result.push(visualizations[i]);
        }
      }
      return result;
    },

    getLiked: function() {
      var result = [];

      for (var i = 0; i < visualizations.length; i++) {
        if (visualizations[i].liked) {
          result.push(visualizations[i]);
        }
      }
      return result;
    },

    getByTag: function(tagID) {
      var result = [];

      for (var i = 0; i < visualizations.length; i++) {
        if (visualizations[i].tag === parseInt(tagID)) {
          result.push(visualizations[i]);
        }
      }
      return result;
    }
  };
})
