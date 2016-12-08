// Color corrections
angular.module('news', ['ngMaterial']).config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
      '50': 'ffebee',
      '100': 'ffcdd2',
      '200': 'ef9a9a',
      '300': 'e57373',
      '400': 'ef5350',
      '500': '496aa2',
      '600': 'e53935',
      '700': 'd32f2f',
      '800': 'c62828',
      '900': 'b71c1c',
      'A100': 'ff8a80',
      'A200': 'ff5252',
      'A400': 'ff1744',
      'A700': 'd50000',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
      'contrastLightColors': undefined
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('amazingPaletteName');
});

// Business logic
angular.module('news').controller('MeasurementController', function(NewsMatrix, $mdPanel) {
  var vm = this;

  vm.newsMatrix = NewsMatrix;

  vm.scoreParts = {};
  vm.redScore = false;

  vm.toggleActiveCell = function(row, cell) {
    if(row.active === cell) {
      row.active = null;
      delete vm.scoreParts[row.title];
    } else {
      row.active = cell;
      vm.scoreParts[row.title] = cell.value;
    }

    vm.score = undefined;
    vm.redScore = false;
    angular.forEach(vm.scoreParts, function(value) {
      if(!vm.score) {
        vm.score = 0;
      }
      vm.score += value;
      if(value === 3) {
        vm.redScore = true;
      }
    });
  };

  vm.reset = function() {
    vm.score = undefined;
    vm.redScore = false;
    vm.scoreParts = {};
    angular.forEach(vm.newsMatrix, function(row) {
      row.active = null;
    });
  };
});

// NEWS score matrix data
angular.module('news').constant('NewsMatrix', [
  {
    title: "Respiration Rate",
    values: [
      {
        title: "≤8",
        value: 3,
        disabled: false
      },
      {
        title: "",
        value: 2,
        disabled: true
      },
      {
        title: "9 - 11",
        value: 1,
        disabled: false
      },
      {
        title: "12 - 20",
        value: 0,
        disabled: false
      },
      {
        title: "",
        value: 1,
        disabled: true
      },
      {
        title: "21 - 24",
        value: 2,
        disabled: false
      },
      {
        title: "≥25",
        value: 3,
        disabled: false
      }
    ]
  },
  {
    title: "Oxygen Saturations",
    values: [
      {
        title: "≤91",
        value: 3,
        disabled: false
      },
      {
        title: "92 - 93",
        value: 2,
        disabled: false
      },
      {
        title: "94 - 95",
        value: 1,
        disabled: false
      },
      {
        title: "≥96",
        value: 0,
        disabled: false
      },
      {
        title: "",
        value: 1,
        disabled: true
      },
      {
        title: "",
        value: 2,
        disabled: true
      },
      {
        title: "",
        value: 3,
        disabled: true
      }
    ]
  },
  {
    title: "Any Supplemental Oxygen",
    values: [
      {
        title: "",
        value: 3,
        disabled: true
      },
      {
        title: "Yes",
        value: 2,
        disabled: false
      },
      {
        title: "",
        value: 1,
        disabled: true
      },
      {
        title: "No",
        value: 0,
        disabled: false
      },
      {
        title: "",
        value: 1,
        disabled: true
      },
      {
        title: "",
        value: 2,
        disabled: true
      },
      {
        title: "",
        value: 3,
        disabled: true
      }
    ]
  },
  {
    title: "Temperature",
    values: [
      {
        title: "≤35.0",
        value: 3,
        disabled: false
      },
      {
        title: "",
        value: 2,
        disabled: true
      },
      {
        title: "35.1 - 36.0",
        value: 1,
        disabled: false
      },
      {
        title: "36.1 - 38.0",
        value: 0,
        disabled: false
      },
      {
        title: "38.1 - 39.0",
        value: 1,
        disabled: false
      },
      {
        title: "≥39.1",
        value: 2,
        disabled: false
      },
      {
        title: "",
        value: 3,
        disabled: true
      }
    ]
  },
  {
    title: "Systolic BP",
    values: [
      {
        title: "≤90",
        value: 3,
        disabled: false
      },
      {
        title: "91 - 100",
        value: 2,
        disabled: false
      },
      {
        title: "101 - 110",
        value: 1,
        disabled: false
      },
      {
        title: "111 - 219",
        value: 0,
        disabled: false
      },
      {
        title: "",
        value: 1,
        disabled: true
      },
      {
        title: "",
        value: 2,
        disabled: true
      },
      {
        title: "≥220",
        value: 3,
        disabled: false
      }
    ]
  },
  {
    title: "Heart Rate",
    values: [
      {
        title: "≤40",
        value: 3,
        disabled: false
      },
      {
        title: "",
        value: 2,
        disabled: true
      },
      {
        title: "41 - 50",
        value: 1,
        disabled: false
      },
      {
        title: "51 - 90",
        value: 0,
        disabled: false
      },
      {
        title: "91 - 110",
        value: 1,
        disabled: false
      },
      {
        title: "111 - 130",
        value: 2,
        disabled: false
      },
      {
        title: "≥131",
        value: 3,
        disabled: false
      }
    ]
  },
  {
    title: "Level of Consciousness",
    values: [
      {
        title: "",
        value: 3,
        disabled: true
      },
      {
        title: "",
        value: 2,
        disabled: true
      },
      {
        title: "",
        value: 1,
        disabled: true
      },
      {
        title: "A",
        value: 0,
        disabled: false
      },
      {
        title: "",
        value: 1,
        disabled: true
      },
      {
        title: "",
        value: 2,
        disabled: true
      },
      {
        title: "V, P or U",
        value: 3,
        disabled: false
      }

    ]
  }
]);