(function () {
	'use strict';
	
	angular.module('ngSvw.validationMicrofiber06252015', ['ngRoute', 'ui.bootstrap'])
	
	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/validationMicrofiber06252015', {
	    templateUrl: 'validationMicrofiber06252015/validationMicrofiber06252015.html',
	    controller: 'ValidationMicrofiber06252015Ctrl'
	  });
	}])
	
	.controller('ValidationMicrofiber06252015Ctrl', ValidationMicrofiber06252015Ctrl);
	
	ValidationMicrofiber06252015Ctrl.$inject = ['$stateParams', 'validationServiceMicrofiber06252015', '$scope'];

    function ValidationMicrofiber06252015Ctrl($stateParams, validationServiceMicrofiber06252015, $scope) {
        
    	var vm = this;
        vm.validation = null;
        
        $scope.displayJson = false;
        
        $scope.validationForm = {
        		data: {}
        };
        
        $scope.Microfiber06252015 = validationServiceMicrofiber06252015.getMicrofiber06252015();
        
        $scope.displayCsv = true;
        
        $scope.currentViewMicrofiber06252015 = {
        		index: 0,
        		path:$scope.Microfiber06252015.segmentations[0].path,
        		name:$scope.Microfiber06252015.segmentations[0].name
        };
        
        $scope.next = function () {
        	if($scope.currentViewMicrofiber06252015.index < ($scope.Microfiber06252015.size-1))
        	{
        		$scope.currentViewMicrofiber06252015.index = $scope.currentViewMicrofiber06252015.index + 1;
        		$scope.Microfiber06252015.segmentations.currentImage = $scope.currentViewMicrofiber06252015.index;
        		$scope.currentViewMicrofiber06252015.path = $scope.Microfiber06252015.segmentations[$scope.currentViewMicrofiber06252015.index].path;
        		$scope.currentViewMicrofiber06252015.name = $scope.Microfiber06252015.segmentations[$scope.currentViewMicrofiber06252015.index].name;
        	}
        	console.log($scope.currentViewMicrofiber06252015);
        }
        
        $scope.previous = function () {
        	if($scope.currentViewMicrofiber06252015.index > 0)
        	{
        		$scope.currentViewMicrofiber06252015.index = $scope.currentViewMicrofiber06252015.index - 1;
        		$scope.Microfiber06252015.segmentations.currentImage = $scope.currentViewMicrofiber06252015.index;
        		$scope.currentViewMicrofiber06252015.path = $scope.Microfiber06252015.segmentations[$scope.currentViewMicrofiber06252015.index].path;
        		$scope.currentViewMicrofiber06252015.name = $scope.Microfiber06252015.segmentations[$scope.currentViewMicrofiber06252015.index].name;
        	}
        }
        
        $scope.pressGood = function () {
        	$scope.Microfiber06252015.segmentations[$scope.currentViewMicrofiber06252015.index].status="good";
        }
        
        $scope.pressCorrect = function () {
        	$scope.Microfiber06252015.segmentations[$scope.currentViewMicrofiber06252015.index].status="correct";
        }
        
        $scope.pressInaccurate = function () {
        	$scope.Microfiber06252015.segmentations[$scope.currentViewMicrofiber06252015.index].status="inaccurate";
        }
        
        $scope.pressMissed = function () {
        	$scope.Microfiber06252015.segmentations[$scope.currentViewMicrofiber06252015.index].status="missed";
        }
        
        $scope.pressDownloadCsv = function () {
            
            var csvContent = "data:text/csv;charset=utf-8,";
            $scope.Microfiber06252015.segmentations.forEach(function(infoArray, index){

               var dataString = infoArray.name + "," + infoArray.status;
               csvContent += index < $scope.Microfiber06252015.segmentations.length ? dataString+ "\n" : dataString;

            }); 
            
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Microfiber06252015.csv");
            document.body.appendChild(link);
            
            if (link.download !== undefined) {
				link.setAttribute("download", "Microfiber06252015.csv");
			} else {
				link.setAttribute("target", "_blank");
			}
			link.setAttribute("style", "visibility:hidden");

            link.click(); // This will download the data file named "Microfiber06252015.csv".
        }
        
        
        
    }
}());