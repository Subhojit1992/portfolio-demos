// jquery area
document.addEventListener("DOMContentLoaded", function(event) {
    /* loader remove by jquery */
    $('#preload').fadeOut('slow');
});
// jquery area

// main app var
var app = angular.module('myApp', ['toaster', 'ngAnimate', 'ngSanitize']);

// *************
// directive START
// *************
// item list EQ height
app.directive('itemList', function($timeout){
    return {
		link: function ($scope, $element, $attrs) {
			if ($scope.$last){
				var elements = document.getElementsByClassName("object-list");
				var maxHeight = 0;
				//Get the max height and set to the other div
				$timeout(function(){
					for (var i = 0; i < elements.length; i++) {
					   var elementHeight = elements[i].offsetHeight;
					   //console.log(elementHeight);
					   if (elements[i].offsetHeight > maxHeight) {
					       maxHeight = elementHeight;
					   }
					}    
				});
            }
		}
    }
});
// item list EQ height


// bg url
app.directive('backImg', function(){
	return function($scope, $element, $attrs){
		var url = $attrs.backImg;
		$element.css({
			'background-image': 'url(' + url + ')',
			'background-size': 'cover'
		});
	}
});
// use like this
// back-img="{{banner.image}}" for $http get use ng if directive as well
// bg url



// add body class for navigation active
app.directive('bodyClass', [function(){
	// Runs during compile
	return {
		link: function(scope, elem, attrs) {

			if(attrs.bodyClass === 'home'){
				scope.navHome = true;
			}
			else if(attrs.bodyClass === 'lettings'){
				scope.navLettings = true;
			}
			else if(attrs.bodyClass === 'developments'){
				scope.navDevelopments = true;
			}
			else if(attrs.bodyClass === 'about-us'){
				scope.navAboutUs = true;
			}
			else if(attrs.bodyClass === 'contact-us'){
				scope.navContactUs = true;
			}

			// var obj = {name: 'misko', gender: 'male'};
			// var log = [];
			// angular.forEach(obj, function(value, key) {
			//   console.log(key + ': ' + value);
			// });
		}
	};
}]);
// add body class for navigation active



app.directive('sameHeight', function ($window, $timeout) {
    var sameHeight = {
        restrict: 'A',
        groups: {},
        link: function (scope, element, attrs) {
            $timeout(getHighest); // make sure angular has proceeded the binding
            angular.element($window).bind('resize', getHighest);

            function getHighest() {
                if (!sameHeight.groups[attrs.sameHeight]) { // if not exists then create the group
                    sameHeight.groups[attrs.sameHeight] = {
                        height: 0,
                        elems:[]
                    };
                }
                sameHeight.groups[attrs.sameHeight].elems.push(element);
                element.css('height', ''); // make sure we capture the origin height

                if (sameHeight.groups[attrs.sameHeight].height < element.outerHeight()) {
                    sameHeight.groups[attrs.sameHeight].height = element.outerHeight();
                }
              
                if(scope.$last){ // reinit the max height
                   angular.forEach(sameHeight.groups[attrs.sameHeight].elems, function(elem){
                        elem.css('height', sameHeight.groups[attrs.sameHeight].height);
                      
                    });
                    sameHeight.groups[attrs.sameHeight].height = 0;
                }
            }
        }
    };
    return sameHeight;
});






// *************
// directive END
// *************


// *************
// factory 
// *************
app.factory('dataFactory', function($http){
    var factory = {};
    factory.getHomeData = function(){
        return $http.get("api/home-data.json");
    };
    factory.getAboutData = function(){
        return $http.get("api/about-data.json");
    };
    factory.getLettingsData = function(){
        return $http.get("api/lettings-data.json");
    };
    factory.getDevelopmentsData = function(){
        return $http.get("api/developments-data.json");
    };
    factory.getContactUsData = function(){
        return $http.get("api/contact-us-data.json");
    };
    return factory;
});
// *************
// factory 
// *************

// *************
// ctrl
// *************
// app parent ctrl
app.controller('appParent', function($scope, toaster){
	// set the initial value
	$scope.toBuy = false;
	$scope.toLet = false;
	$scope.register = false;
	$scope.mobileMenu = false;

	// nav scope
	$scope.navHome = false;
	$scope.navLettings = false;
	$scope.navDevelopments = false;
	$scope.navAboutUs = false;
	$scope.navContactUs = false;
	// nav scope

	// to buy popup toggling logic
	$scope.toBuyTrigger = function(){
		$scope.toBuy = true;
	};
	$scope.toBuyClose = function(){
		$scope.toBuy = false;
	};
	// to buy popup toggling logic

	// to let popup toggling logic
	$scope.toLetTrigger = function(){
		$scope.toLet = true;
	};
	$scope.toLetClose = function(){
		$scope.toLet = false;
	};
	// to let popup toggling logic

	// to register popup toggling logic
	$scope.registerTrigger = function(){
		$scope.register = true;
	};
	$scope.registerClose = function(){
		$scope.register = false;
	};
	// to register popup toggling logic

	// nav menu mobile toggle *notYetFullyDone*
	$scope.mobileMenuToggle = function(){
		$scope.mobileMenu = !$scope.mobileMenu;
	};

	// toaster on click info
	$scope.pop = function(){
        toaster.pop({
			type: 'success',
			title: 'Information',
			body: 'We are working on this page. You will see updated content in a few days',
			timeout: 7000
        });
    };


});

// home ctrl
app.controller('homeCtrl', function($scope, $http, dataFactory) {
    $scope.homeData = [];
    dataFactory.getHomeData().then(function(response) {
    	// get full home data
		$scope.homeData = response.data;
		// console.log($scope.homeData);
		// assign value as per property
		// service DATA
		$scope.homeServicesData = $scope.homeData.services; 
		// about DATA OBJECT
		$scope.aboutData = {
			"title": $scope.homeData.aboutTitle,
			"content": $scope.homeData.aboutContent,
			"image": $scope.homeData.aboutImage,
			"link": $scope.homeData.aboutLink
		};
		// contact DATA
		$scope.contactUsData = $scope.homeData.contactUs;
		// brand image DATA
		$scope.brandImage = $scope.homeData.brandImage;

    });
});


// about ctrl
app.controller('aboutCtrl', function($scope, $http, $window, dataFactory){
	// get the app window objacet
	var appWindow = angular.element($window),
		winW = appWindow[0].innerWidth,
		winH = appWindow[0].innerHeight;

	// main scope array
	$scope.aboutData = [];
	dataFactory.getAboutData().then(function(response){
		// get full home data
		$scope.aboutData = response.data;
		// console.log($scope.aboutData);
		// banner data
		$scope.banner = {
			"image": $scope.aboutData.bannerImage,
			"text": $scope.aboutData.bannerText
		};
		// about data
		$scope.about = {
			"title": $scope.aboutData.aboutTitle,
			"content": $scope.aboutData.aboutContent
		};
		// about people
		$scope.peoples = $scope.aboutData.aboutPeople;
	});




	appWindow.bind('resize', function () {
		// console.log('resize');
	});

});


// lettings ctrl
app.controller('lettingsCtrl', function($scope, $http, dataFactory){
	
	// main scope array
	$scope.lettingsData = [];
	dataFactory.getLettingsData().then(function(response){
		// get full home data
		$scope.lettingsData = response.data;
		// console.log($scope.lettingsData);
		// banner data
		$scope.banner = {
			"image": $scope.lettingsData.bannerImage
		};
		// lettings data
		$scope.lettings = {
			"title": $scope.lettingsData.lettingsTitle,
			"content": $scope.lettingsData.lettingsContent
		};
		// offerings
		$scope.offerings = $scope.lettingsData.offerings;
	});

});


// developments ctrl
app.controller('developmentsCtrl', function($scope, $http, dataFactory){
	
	// main scope array
	$scope.developmentsData = [];
	dataFactory.getDevelopmentsData().then(function(response){
		// get full home data
		$scope.developmentsData = response.data;
		// console.log($scope.developmentsData);
		// banner data
		$scope.banner = {
			"image": $scope.developmentsData.bannerImage
		};
		// developments data
		$scope.developments = {
			"title": $scope.developmentsData.lettingsTitle,
			"content": $scope.developmentsData.lettingsContent
		};
		// offerings
		$scope.offerings = $scope.developmentsData.offerings;
	});

});


// contact us ctrl
app.controller('contactUsCtrl', function($scope, $http, dataFactory){
	
	// main scope array
	$scope.contactUsData = [];
	dataFactory.getContactUsData().then(function(response){
		// get full home data
		$scope.contactUsData = response.data;
		// console.log($scope.contactUsData);
		// banner data
		$scope.banner = {
			"image": $scope.contactUsData.bannerImage,
			"text": $scope.contactUsData.bannerText
		};
		// contact us data
		$scope.contactus = $scope.contactUsData.contactUs;
	});

});




// *************
// ctrl
// *************


