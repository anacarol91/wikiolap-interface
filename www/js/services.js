angular.module('starter.services', [])

.factory('Categorias', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categorias = [{
    id: 0,
    name: 'LGBT',
    icon: 'img/foto-lgbt.jpg',
    estabelecimentos: [
    {
      id: 1,
      name: 'Dduck Club',
      avatar: 'img/dduck.jpg',
      checkin: '1000'
    },{
      id: 2,
      name: 'Royalty Club',
      avatar: 'img/royalty.jpg',
      checkin: '1010'
    }]
  }, {
    id: 1,
    name: 'Rock',
    icon: 'img/foto-rock.JPG'
  }, {
    id: 2,
    name: 'Pop',
    icon: 'img/foto-pop.jpg'
  }, {
    id: 3,
    name: 'Sertanejo',
    icon: 'img/foto-sertanejo.jpg'
  }, {
    id: 4,
    name: 'Espetinho',
    icon: 'img/foto-espetinho.jpg'
  }];

  return {
    all: function() {
      return categorias;
    },
    remove: function(categoria) {
      categorias.splice(categorias.indexOf(categoria), 1);
    },
    get: function(categoriaId) {
      for (var i = 0; i < categorias.length; i++) {
        if (categorias[i].id === parseInt(categoriaId)) {
          return categorias[i];
        }
      }
      return null;
    }
  };
})

.factory('Estabelecimentos', function() {

  // Some fake testing data
  var estabelecimentos = [{
    id: 0,
    name: 'Dduck Club',
    avatar: 'img/dduck.png',
    categoria: {
      id: 0,
      name: 'LGBT',
      icon: 'img/lgbt.png',
    },
    checkin: '1000'
  },{
    id: 1,
    name: 'Royalty Club',
    avatar: 'img/royalty.png',
    categoria: {
      id: 0,
      name: 'LGBT',
      icon: 'img/lgbt.png',
    },
    checkin: '1010'
  },
  {
    id: 2,
    name: 'Beb\'s Bar',
    avatar: 'img/bebs.jpg',
    categoria: {
      id: 4,
      name: 'Espetinho',
      icon: 'img/espetinho.png',
    },
    checkin: '2010'
  },
  {
    id: 3,
    name: 'Wood\'s',
    avatar: 'img/woods.jpg',
    categoria: {
      id: 3,
      name: 'Sertanejo',
      icon: 'img/sertanejo.png',
    },
    checkin: '100'
  },
  {
    id: 4,
    name: 'Club Chalezinho',
    avatar: 'img/chale.jpg',
    categoria: {
      id: 2,
      name: 'Pop',
      icon: 'img/pop.png',
    },
    checkin: '1810'
  },
  {
    id: 5,
    name: 'Jack Rock Bar',
    avatar: 'img/jack.jpg',
    categoria: {
      id: 1,
      name: 'Rock',
      icon: 'img/rock.png',
    },
    checkin: '1910'
  },
  ]

  return {
    all: function() {
      return estabelecimentos;
    },

    remove: function(estabelecimento) {
      estabelecimentos.splice(estabelecimentos.indexOf(estabelecimento), 1);
    },

    getEstabelecimento: function(estabelecimentoId) {
      for (var i = 0; i < estabelecimentos.length; i++) {
        if (estabelecimentos[i].id === parseInt(estabelecimentoId)) {
          return estabelecimentos[i];
        }
      }
      return null;
    },

    getCategoria: function(categoriaId) {
      var categoria=[];

      for (var i = 0; i < estabelecimentos.length; i++) {
        if (estabelecimentos[i].categoria.id === parseInt(categoriaId)) {
          categoria.push(estabelecimentos[i]);
        }
      }
      return categoria;
    }

  };
});
