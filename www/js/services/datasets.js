services.factory('Datasets', function() {

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
    }
  };
})