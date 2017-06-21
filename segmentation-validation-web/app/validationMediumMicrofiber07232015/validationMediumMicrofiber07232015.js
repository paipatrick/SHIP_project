(function () {
	'use strict';
	
	angular.module('ngSvw.validationMediumMicrofiber07232015', ['ngRoute', 'ui.bootstrap'])
	
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/validationMediumMicrofiber07232015', {
	    templateUrl: 'validationMediumMicrofiber07232015/validationMediumMicrofiber07232015.html',
	    controller: 'ValidationMediumMicrofiber07232015Ctrl'
	  });
	}])
	
	.controller('ValidationMediumMicrofiber07232015Ctrl', ValidationMediumMicrofiber07232015Ctrl);
	
	ValidationMediumMicrofiber07232015Ctrl.$inject = ['$stateParams', 'validationServiceMediumMicrofiber07232015', '$scope'];

    function ValidationMediumMicrofiber07232015Ctrl($stateParams, validationServiceMediumMicrofiber07232015, $scope) {
        
    	var vm = this;
        vm.validation = null;
        
        $scope.displayJson = false;
        
        $scope.validationForm = {
        		data: {}
        };
        
        $scope.MediumMicrofiber07232015 = validationServiceMediumMicrofiber07232015.getMediumMicrofiber07232015();
        
        $scope.displayCsv = true;
        
        $scope.currentViewMediumMicrofiber07232015 = {
        		index: 0,
        		path:$scope.MediumMicrofiber07232015.segmentations[0].path,
        		name:$scope.MediumMicrofiber07232015.segmentations[0].name
        };
        
        $scope.next = function () {
        	if($scope.currentViewMediumMicrofiber07232015.index < ($scope.MediumMicrofiber07232015.size-1))
        	{
        		$scope.currentViewMediumMicrofiber07232015.index = $scope.currentViewMediumMicrofiber07232015.index + 1;
        		$scope.MediumMicrofiber07232015.segmentations.currentImage = $scope.currentViewMediumMicrofiber07232015.index;
        		$scope.currentViewMediumMicrofiber07232015.path = $scope.MediumMicrofiber07232015.segmentations[$scope.currentViewMediumMicrofiber07232015.index].path;
        		$scope.currentViewMediumMicrofiber07232015.name = $scope.MediumMicrofiber07232015.segmentations[$scope.currentViewMediumMicrofiber07232015.index].name;
        	}
        	console.log($scope.currentViewMediumMicrofiber07232015);
        }
        
        $scope.previous = function () {
        	if($scope.currentViewMediumMicrofiber07232015.index > 0)
        	{
        		$scope.currentViewMediumMicrofiber07232015.index = $scope.currentViewMediumMicrofiber07232015.index - 1;
        		$scope.MediumMicrofiber07232015.segmentations.currentImage = $scope.currentViewMediumMicrofiber07232015.index;
        		$scope.currentViewMediumMicrofiber07232015.path = $scope.MediumMicrofiber07232015.segmentations[$scope.currentViewMediumMicrofiber07232015.index].path;
        		$scope.currentViewMediumMicrofiber07232015.name = $scope.MediumMicrofiber07232015.segmentations[$scope.currentViewMediumMicrofiber07232015.index].name;
        	}
        }
        
        $scope.pressGood = function () {
        	$scope.MediumMicrofiber07232015.segmentations[$scope.currentViewMediumMicrofiber07232015.index].status="good";
        }
        
        $scope.pressCorrect = function () {
        	$scope.MediumMicrofiber07232015.segmentations[$scope.currentViewMediumMicrofiber07232015.index].status="correct";
        }
        
        $scope.pressInaccurate = function () {
        	$scope.MediumMicrofiber07232015.segmentations[$scope.currentViewMediumMicrofiber07232015.index].status="inaccurate";
        }
        
        $scope.pressMissed = function () {
        	$scope.MediumMicrofiber07232015.segmentations[$scope.currentViewMediumMicrofiber07232015.index].status="missed";
        }
        
        $scope.pressDownloadCsv = function () {
            
            var csvContent = "data:text/csv;charset=utf-8,";
            $scope.MediumMicrofiber07232015.segmentations.forEach(function(infoArray, index){

               var dataString = infoArray.name + "," + infoArray.status;
               csvContent += index < $scope.MediumMicrofiber07232015.segmentations.length ? dataString+ "\n" : dataString;

            }); 
            
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "MediumMicrofiber07232015.csv");
            document.body.appendChild(link);
            
            if (link.download !== undefined) {
				link.setAttribute("download", "MediumMicrofiber07232015.csv");
			} else {
				link.setAttribute("target", "_blank");
			}
			link.setAttribute("style", "visibility:hidden");

            link.click(); // This will download the data file named "MediumMicrofiber07232015.csv".
        }
        
        
        
    }
}());