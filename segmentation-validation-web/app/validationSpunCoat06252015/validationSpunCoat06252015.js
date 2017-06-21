(function () {
	'use strict';
	
	angular.module('ngSvw.validationSpunCoat06252015', ['ngRoute', 'ui.bootstrap'])
	
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/validationSpunCoat06252015', {
	    templateUrl: 'validationSpunCoat06252015/validationSpunCoat06252015.html',
	    controller: 'ValidationSpunCoat06252015Ctrl'
	  });
	}])
	
	.controller('ValidationSpunCoat06252015Ctrl', ValidationSpunCoat06252015Ctrl);
	
	ValidationSpunCoat06252015Ctrl.$inject = ['$stateParams', 'validationServiceSpunCoat06252015', '$scope'];

    function ValidationSpunCoat06252015Ctrl($stateParams, validationServiceSpunCoat06252015, $scope) {
        
    	var vm = this;
        vm.validation = null;
        
        $scope.displayJson = false;
        
        $scope.validationForm = {
        		data: {}
        };
        
        $scope.spuncoat06252015 = validationServiceSpunCoat06252015.getSpunCoat06252015();
        
        $scope.displayCsv = true;
        
        $scope.currentViewSpunCoat06252015 = {
        		index: 0,
        		path:$scope.spuncoat06252015.segmentations[0].path,
        		name:$scope.spuncoat06252015.segmentations[0].name
        };
        
        $scope.next = function () {
        	if($scope.currentViewSpunCoat06252015.index < ($scope.spuncoat06252015.size-1))
        	{
        		$scope.currentViewSpunCoat06252015.index = $scope.currentViewSpunCoat06252015.index + 1;
        		$scope.spuncoat06252015.segmentations.currentImage = $scope.currentViewSpunCoat06252015.index;
        		$scope.currentViewSpunCoat06252015.path = $scope.spuncoat06252015.segmentations[$scope.currentViewSpunCoat06252015.index].path;
        		$scope.currentViewSpunCoat06252015.name = $scope.spuncoat06252015.segmentations[$scope.currentViewSpunCoat06252015.index].name;
        	}
        	console.log($scope.currentViewSpunCoat06252015);
        }
        
        $scope.previous = function () {
        	if($scope.currentViewSpunCoat06252015.index > 0)
        	{
        		$scope.currentViewSpunCoat06252015.index = $scope.currentViewSpunCoat06252015.index - 1;
        		$scope.spuncoat06252015.segmentations.currentImage = $scope.currentViewSpunCoat06252015.index;
        		$scope.currentViewSpunCoat06252015.path = $scope.spuncoat06252015.segmentations[$scope.currentViewSpunCoat06252015.index].path;
        		$scope.currentViewSpunCoat06252015.name = $scope.spuncoat06252015.segmentations[$scope.currentViewSpunCoat06252015.index].name;
        	}
        }
        
        $scope.pressGood = function () {
        	$scope.spuncoat06252015.segmentations[$scope.currentViewSpunCoat06252015.index].status="good";
        }
        
        $scope.pressCorrect = function () {
        	$scope.spuncoat06252015.segmentations[$scope.currentViewSpunCoat06252015.index].status="correct";
        }
        
        $scope.pressInaccurate = function () {
        	$scope.spuncoat06252015.segmentations[$scope.currentViewSpunCoat06252015.index].status="inaccurate";
        }
        
        $scope.pressMissed = function () {
        	$scope.spuncoat06252015.segmentations[$scope.currentViewSpunCoat06252015.index].status="missed";
        }
        
        $scope.pressDownloadCsv = function () {
            
            var csvContent = "data:text/csv;charset=utf-8,";
            $scope.spuncoat06252015.segmentations.forEach(function(infoArray, index){

               var dataString = infoArray.name + "," + infoArray.status;
               csvContent += index < $scope.spuncoat06252015.segmentations.length ? dataString+ "\n" : dataString;

            }); 
            
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "spuncoat06252015.csv");
            document.body.appendChild(link);
            
            if (link.download !== undefined) {
				link.setAttribute("download", "spuncoat06252015.csv");
			} else {
				link.setAttribute("target", "_blank");
			}
			link.setAttribute("style", "visibility:hidden");

            link.click(); // This will download the data file named "spuncoat06252015.csv".
        }
        
        
        
    }
}());