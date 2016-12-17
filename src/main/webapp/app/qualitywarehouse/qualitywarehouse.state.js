(function() {
    'use strict';

    angular
        .module('foodnetApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('qualitywarehouse', {
            parent: 'app',
            url: '/qualitywarehouse',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/qualitywarehouse/qualitywarehouse.html',
                    controller: 'QualitywarehouseController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
