(function () {
	'use strict';
	
	angular.module('ngSvw', [
	  'ngSvw.config',
	  
	  //'ngRoute',
	  'ui.router',
	  'angular-hal',
	  //'fg', 
	  
	  
	  //'ngSvw.ngSvwSegmentationValidation',
	  
	  'ngSvw.validationSpunCoat06252015',
	  'ngSvw.validationServiceSpunCoat06252015',
	  
	  'ngSvw.validationSpunCoat07072015',
	  'ngSvw.validationServiceSpunCoat07072015',
	  
	  'ngSvw.validationMicrofiber06252015',
	  'ngSvw.validationServiceMicrofiber06252015',
	  
	  'ngSvw.validationMicrofiber07072015',
	  'ngSvw.validationServiceMicrofiber07072015',
	  
	  'ngSvw.validationMediumMicrofiber07102015',
	  'ngSvw.validationServiceMediumMicrofiber07102015',
	  
	  'ngSvw.validationMediumMicrofiber07232015',
	  'ngSvw.validationServiceMediumMicrofiber07232015'
	])
	
	.config(['$stateProvider', '$urlRouterProvider',
	            function ($stateProvider, $urlRouterProvider) {

	                $urlRouterProvider.otherwise('/validationSpunCoat06252015');

	                $stateProvider
	                    .state('validationSpunCoat06252015', {
	                        url: '/validationSpunCoat06252015',
	                        templateUrl: 'validationSpunCoat06252015/validationSpunCoat06252015.html',
	                        controller: 'ValidationSpunCoat06252015Ctrl',
	                        controllerAs: 'vmSpunCoat06252015'
	                    })
	                    .state('validationSpunCoat07072015', {
	                        url: '/validationSpunCoat07072015',
	                        templateUrl: 'validationSpunCoat07072015/validationSpunCoat07072015.html',
	                        controller: 'ValidationSpunCoat07072015Ctrl',
	                        controllerAs: 'vmSpunCoat07072015'
	                    })
	                    
	                    .state('validationMicrofiber06252015', {
	                        url: '/validationMicrofiber06252015',
	                        templateUrl: 'validationMicrofiber06252015/validationMicrofiber06252015.html',
	                        controller: 'ValidationMicrofiber06252015Ctrl',
	                        controllerAs: 'vmMicrofiber06252015'
	                    })
	                    .state('validationMicrofiber07072015', {
	                        url: '/validationMicrofiber07072015',
	                        templateUrl: 'validationMicrofiber07072015/validationMicrofiber07072015.html',
	                        controller: 'ValidationMicrofiber07072015Ctrl',
	                        controllerAs: 'vmMicrofiber07072015'
	                    })
	                    
	                    .state('validationMediumMicrofiber07102015', {
	                        url: '/validationMediumMicrofiber07102015',
	                        templateUrl: 'validationMediumMicrofiber07102015/validationMediumMicrofiber07102015.html',
	                        controller: 'ValidationMediumMicrofiber07102015Ctrl',
	                        controllerAs: 'vmMediumMicrofiber07102015'
	                    })
	                    .state('validationMediumMicrofiber07232015', {
	                        url: '/validationMediumMicrofiber07232015',
	                        templateUrl: 'validationMediumMicrofiber07232015/validationMediumMicrofiber07232015.html',
	                        controller: 'ValidationMediumMicrofiber07232015Ctrl',
	                        controllerAs: 'vmMediumMicrofiber07232015'
	                    })
	                    
	            }])
	            
//	.config(function(fgConfigProvider, FgField) {
//		var category = 'Features 2D Matlab';
//		  var fieldTemplate = new FgField('appFeatureInput', {
//		    displayName: 'Contrast',
//		    feature: {
//				id : 'Feature2DMatlab_Contrast',
//				name : 'Contrast',
//				parameters : [ {
//					id : 'Feature2DMatlab_Contrast_NumLevels',
//					name : 'Number of levels',
//					value : '8'
//				}, {
//					id : 'Feature2DMatlab_Contrast_DistanceOffset',
//					name : 'Distance offset',
//					value : '1'
//				} ]
//			} ,
//		  });
//
//		  var templateUrl = 'common/features-fg-custom-fields/fg-field-custom-feature.ng.html';
//		  var propertiesUrl = 'common/features-fg-custom-fields/fg-properties-custom-feature.ng.html';
//
//		  fgConfigProvider.fields.removeAll();
		 // fgConfigProvider.fields.add(fieldTemplate, category, templateUrl, propertiesUrl);
		
//	})
	
    .run(['$rootScope', '$state', '$stateParams', 'halClient', 
          function ($rootScope, $state, $stateParams, halClient
              ) {
              $rootScope.$state = $state;
              $rootScope.$stateParams = $stateParams;

              
              $rootScope.client = halClient;
              //$rootScope.apiRoot = halClient.$get($rootScope.baseUrl);
              //editableOptions.theme = 'bs3'; // bootstrap3 theme.
              
//              $rootScope.paletteFeaturesUrls = paletteFeaturesUrls;
//              $rootScope.FgField = FgField;
          }]);
	
}());
