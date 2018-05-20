services.factory('Datasets', function() {

  var dsImg = 'img/database.png';
  var previaDados = 'img/previa-dados.PNG';

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
  var datasets = [{
    id: 0,
    name: 'Indicadores sobre Aquicultura familiar',
    img: dsImg,
    description: 'Série histórica de indicadores dos resultados governamentais relativos à Aquicultura familiar.',
    creation: '05/09/2014',
    data: previaDados,
    user: ismael,
    tags: "#agricultura",
    visualizations: 2
  },{
    id: 1,
    name: 'Microdados do Censo da Educação Superior',
    img: dsImg,
    description: 'Anualmente, o Inep realiza a coleta de dados sobre a educação superior, com o objetivo de oferecer informações detalhadas sobre a situação atual e as grandes tendências do setor, tanto à comunidade acadêmica quanto à sociedade em geral.',
    creation: '26/03/2012',
    data: previaDados,
    user: ana,
    tags: '#educação',
    visualizations: 5
  },
  {
    id: 2,
    name: 'Instituições de Ensino Básico',
    img: dsImg,
    description: 'Cadastro das escolas da educação básica fornecido pelo INEP, oriundo do Censo Escolar de 2012.',
    creation: '19/08/2013',
    data: previaDados,
    user: flavio,
    tags: '#educação',
    visualizations: 10
  },
  {
    id: 3,
    name: 'Proporção de pacientes HIV positivo',
    img: dsImg,
    description: 'Este indicador expressa o poder de captação precoce dos casos de HIV positivo para tratamento a partir do nível de comprometimentodo sistema imunológico dos indivíduos infectados ao serem testados para verificação de indicação de Terapia Anti Retroviral(TARV)',
    creation: '19/05/2015',
    data: previaDados,
    user: ana,
    tags: '#saúde',
    visualizations: 6
  },
  {
    id: 4,
    name: 'Resgates do Tesouro Direto',
    img: dsImg,
    description: 'Este conjunto de dados apresenta o volume financeiro de resgates ocorridos no Tesouro Direto em determinado mês.',
    creation: '08/01/2018',
    data: previaDados,
    user: ana,
    tags: '#investimentos',
    visualizations: 0
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

    getByUser: function(userID) {
      var result = [];

      for (var i = 0; i < datasets.length; i++) {
        if (datasets[i].user.id === parseInt(userID)) {
          result.push(datasets[i]);
        }
      }
      return result;
    },
    setID: function(itemID) {
      this.ds = itemID;
    },
    getID: function() {
      return this.ds;
    }
  };
})