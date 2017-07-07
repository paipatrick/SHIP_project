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
        
        $scope.spuncoat06252015 = validationServiceSpunCoat06252015.getSpunCoat06252015_1();
        $scope.spuncoat06252015_2 = validationServiceSpunCoat06252015.getSpunCoat06252015_2();
        $scope.spuncoat06252015_3 = validationServiceSpunCoat06252015.getSpunCoat06252015_3();
        $scope.spuncoat06252015_4 = validationServiceSpunCoat06252015.getSpunCoat06252015_4();
        $scope.spuncoat06252015_5 = validationServiceSpunCoat06252015.getSpunCoat06252015_5();
        $scope.getquestion1 = validationServiceSpunCoat06252015.getQuestion1();
        $scope.getquestion2 = validationServiceSpunCoat06252015.getQuestion2();
        $scope.getquestion3 = validationServiceSpunCoat06252015.getQuestion3();
        $scope.getquestion4 = validationServiceSpunCoat06252015.getQuestion4();

        $scope.displayCsv = true;
        
        $scope.currentViewSpunCoat06252015 = {
            index: 0,
            path:$scope.spuncoat06252015.segmentations[0].path,
            name:$scope.spuncoat06252015.segmentations[0].name
        };

        $scope.currentViewSpunCoat06252015_2 = {
            index: 0,
            path:$scope.spuncoat06252015_2.segmentations[0].path,
            name:$scope.spuncoat06252015_2.segmentations[0].name
        };

        $scope.currentViewSpunCoat06252015_3 = {
            index: 0,
            path:$scope.spuncoat06252015_3.segmentations[0].path,
            name:$scope.spuncoat06252015_3.segmentations[0].name
        };

        $scope.currentViewSpunCoat06252015_4 = {
            index: 0,
            path:$scope.spuncoat06252015_4.segmentations[0].path,
            name:$scope.spuncoat06252015_4.segmentations[0].name
        };

        $scope.currentViewSpunCoat06252015_5 = {
            index: 0,
            path:$scope.spuncoat06252015_5.segmentations[0].path,
            name:$scope.spuncoat06252015_5.segmentations[0].name
        };

        $scope.currentViewGetQuestion1 = {
            index: 0,
            size:$scope.getquestion1.size,
            question:$scope.getquestion1.segmentations[0].question,
            response1:$scope.getquestion1.segmentations[0].response1,
            response2:$scope.getquestion1.segmentations[0].response2,
            response3:$scope.getquestion1.segmentations[0].response3,
            response4:$scope.getquestion1.segmentations[0].response4
        }

        $scope.currentViewGetQuestion2 = {
            index: 0,
            size:$scope.getquestion2.size,
            question:$scope.getquestion2.segmentations[0].question,
            response1:$scope.getquestion2.segmentations[0].response1,
            response2:$scope.getquestion2.segmentations[0].response2,
            response3:$scope.getquestion2.segmentations[0].response3,
            response4:$scope.getquestion2.segmentations[0].response4
        }        

        $scope.currentViewGetQuestion3 = {
            index: 0,
            size:$scope.getquestion3.size,
            question:$scope.getquestion3.segmentations[0].question,
            response1:$scope.getquestion3.segmentations[0].response1,
            response2:$scope.getquestion3.segmentations[0].response2,
            response3:$scope.getquestion3.segmentations[0].response3,
            response4:$scope.getquestion3.segmentations[0].response4
        }    

        $scope.currentViewGetQuestion4 = {
            index: 0,
            size:$scope.getquestion4.size,
            question:$scope.getquestion4.segmentations[0].question,
            response1:$scope.getquestion4.segmentations[0].response1,
            response2:$scope.getquestion4.segmentations[0].response2,
            response3:$scope.getquestion4.segmentations[0].response3,
            response4:$scope.getquestion4.segmentations[0].response4
        }         

        function onSignIn(googleUser) {

            console.log("inside onSignIn()");
            console.log("googleUser: " + googleUser);
            
            // Useful data for your client-side scripts:
            var profile = googleUser.getBasicProfile();
            console.log("ID: " + profile.getId()); // Don't send this directly to your server!
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log("Image URL: " + profile.getImageUrl());
            console.log("Email: " + profile.getEmail());

            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            console.log("ID Token: " + id_token);
        };
   
        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
              console.log('User signed out.');
            });
        }

        // next/previous images
        $scope.next = function (currentView, spuncoat) {
            if($scope[currentView].index < ($scope[spuncoat].size-1))
                changeImage(currentView, spuncoat, 1);
        }
        
        $scope.previous = function (currentView, spuncoat) {
            if($scope[currentView].index > 0)
                changeImage(currentView, spuncoat, -1);
        }

        // helper function for next and previous
        function changeImage(currentView, spuncoat, indexAdjust){

            $scope[currentView].index = $scope[currentView].index + indexAdjust;
            $scope[spuncoat].segmentations.currentImage = $scope[currentView].index;
            $scope[currentView].path = $scope[spuncoat].segmentations[$scope[currentView].index].path;
            $scope[currentView].name = $scope[spuncoat].segmentations[$scope[currentView].index].name;
        }

        // next/previous questions
        $scope.nextQuestion = function(currentView, getquestion, q){

            if($scope[currentView].index < ($scope[getquestion].size-1))
                changeQuestion(currentView, getquestion, 1);
        }

        $scope.previousQuestion = function(currentView, getquestion){
            if($scope[currentView].index > 0)
                changeQuestion(currentView, getquestion, -1);
        }

        function changeQuestion (currentView, getquestion, indexAdjust) {

            $scope[currentView].index = $scope[currentView].index + indexAdjust;
            $scope[getquestion].currentQuestion = $scope[currentView].index;

            $scope[currentView].question = $scope[getquestion].segmentations[$scope[currentView].index].question;

            $scope[currentView].response1 = $scope[getquestion].segmentations[$scope[currentView].index].response1;
            $scope[currentView].response2 = $scope[getquestion].segmentations[$scope[currentView].index].response2;
            $scope[currentView].response3 = $scope[getquestion].segmentations[$scope[currentView].index].response3;
            $scope[currentView].response4 = $scope[getquestion].segmentations[$scope[currentView].index].response4;

            var q = $scope[currentView].question;
            q = q.substring(0, q.indexOf("?"));

            var cookie = getCookie(q);

            // cookie exists, fill in response
            if(cookie !== null){

                var response = cookie.substring(cookie.indexOf("=") + 1);

                // assuming no more than 9 radio buttons
                var responseNum = response.substring(response.length - 1) - 1;

                var radioButtons;

                radioButtons = document.getElementsByName("q4");

                var parse = parseInt(currentView.substring(currentView.length - 1));

                if(parse === 1)
                    radioButtons = document.getElementsByName("q1");
                else if(parse === 2)
                    radioButtons = document.getElementsByName("q2");
                else if(parse === 3)
                    radioButtons = document.getElementsByName("q3");
                else
                    radioButtons = document.getElementsByName("q4");

                clearResponses(radioButtons);

                radioButtons[responseNum].checked = true;
            }
            //cookie does not exist
            else{
                clearResponses(document.getElementsByName("q" + getquestion.substring(11)));
            }
        }
        
        // unchecks responses
        function clearResponses (radioButtons) {

            for(var i = 0; i < radioButtons.length; i++)
                radioButtons[i].checked = false;
        }

        $scope.pressResponse = function (question, response) {

            var page = $scope.currentViewGetQuestion1.index;

            var qNumber = 4 * page + parseInt(question.substring(22));

            var toChange = "status_q" + qNumber;

            $scope.spuncoat06252015.segmentations[$scope.currentViewSpunCoat06252015.index][toChange] = response;

            newCookie("q" + qNumber, response);
        }

        function newCookie(name, value){

            var today = new Date();
            var expireDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);

            document.cookie = name + "=" + value + "; expires=" + expireDate.toGMTString() + "; path=/";
        }

        function getCookie(name) {

            // assuming responses do not contain semicolons
            var cookieArray = document.cookie.split(";");

            for(var i = 0; i < cookieArray.length; i++){

                var cookie = cookieArray[i];

                // cookie exists
                if(cookie.substring(cookie.indexOf("q"), cookie.indexOf("=")).localeCompare(name) === 0)
                    return cookie;
            }

            // cookie does not exist
            return null;
        }

        function deleteCookie(name){

            var deleteDate = new Date(today.getTime() - 1);

            document.cookie = name + "=null; path =/; expires=" + expired.toGMTString();
        }
        
        $scope.pressDownloadCsv = function () {
            
            var csvContent = "data:text/csv;charset=utf-8,";
            $scope.spuncoat06252015.segmentations.forEach(function(infoArray, index){

               var dataString = infoArray.name + "," + infoArray.status_q1 + "," + infoArray.status_q2 + "," + infoArray.status_q3
                + "," + infoArray.status_q4 + "," + infoArray.status_q5 + "," + infoArray.status_q6 + "," + infoArray.status_q6 + ","
                 + infoArray.status_q7 + "," + infoArray.status_q8 + "," + infoArray.status_q9 + "," + infoArray.status_q10 + ","
                 + infoArray.status_q11 + ","+ infoArray.status_q12 + ","+ infoArray.status_q13 + ","+ infoArray.status_q14 + ","
                 + infoArray.status_q15 + ","+ infoArray.status_q16 + ","+ infoArray.status_q17 + ","+ infoArray.status_q18 + ","
                 + infoArray.status_q19 + ","+ infoArray.status_q20 + ",";
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