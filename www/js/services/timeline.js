services.factory('Timeline', function() {

var dsImg = 'img/database.png';
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
  var timeline = [{
    id: 0,
    user: glivia,
    action: ' postou uma visualização.',
    img: img04,
    time: '10m',
    visualization: {
      id: 3,
      name: 'Valor arrecadado',
      liked: true,
      likes: [ana, ismael],
      comments: [{
        user: ana,
        text: 'Gostei bastante, muito útil',
        time: '4d',
        likes: 9,
        liked: false
      }]
    }
  }, {
    id: 4,
    user: flavio,
    action: ' comentou em uma visualização que você segue.  "Os dados parecem estar..."',
    img: img01,
    time: '50m',
    visualization: {
      id: 1,
      name: 'Visualização 01',
      liked: false,
      likes: [ana, flavio],
      comments: [{
        user: flavio,
        text: 'Os dados parecem estar incorretos!',
        time: '4d',
        likes: 3,
        liked: false
      },{
        user: glivia,
        text: 'Gostei bastante, muito útil',
        time: '4d',
        likes: 9,
        liked: true
      }]
    }
  }, {
    id: 1,
    user: ismael,
    action: ' postou uma visualização.',
    img: img03,
    time: '6h',
    visualization: {
      id: 2,
      name: 'Indicadores sobre Aquicultura familiar',
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
      }]
    }
  }, {
    id: 2,
    user: ismael,
    action: ' fez o upload do dataset\n "Indicadores sobre Aquicultura familiar".',
    img: dsImg,
    time: '1d',
    visualization: {
      id: 0
    }
  }, {
    id: 3,
    user: flavio,
    action: ' curtiu uma visualização que você segue.',
    img: img01,
    time: '2d',
    visualization: {
      id: 1,
      name: 'Visualização 01',
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
      }]
    }
  }, {
    id: 5,
    user: flavio,
    action: ' fez o upload do dataset\n "Instituições de Ensino Básico".',
    img: dsImg,
    time: '4h',
    visualization: {
      id: 2
    }
  }];

  return {
    all: function() {
      return timeline;
    },
    remove: function(item) {
      timeline.splice(timeline.indexOf(item), 1);
    },
    get: function(itemID) {
      for (var i = 0; i < timeline.length; i++) {
        if (timeline[i].id === parseInt(itemID)) {
          return timeline[i];
        }
      }
      return null;
    }
  };
})
