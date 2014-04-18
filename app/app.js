'use strict';

var app = angular.module("SiteApp", [
	'ui.router',
	]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $anchorScrollProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
	.state('frontpage', {
		url: "/",
		templateUrl: "partials/frontpage.html",
		controller: "HomeController"
	})
	.state('documentation', {
		url: "/documentation",
		templateUrl: "partials/help.html",
		controller: "HelpController"
	})
	.state('buy', {
		url: "/buy",
		templateUrl: "partials/buy.html",
		controller: "BuyController"
	})
	.state('flash', {
		url: "/flash",
		templateUrl: "partials/flash.html",
		controller: "FlashController"
	})
});

app.controller("HomeController", function($scope) {
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
	var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
	var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

	if(isMac){
		$scope.coltUrl = "https://codeorchestra.s3.amazonaws.com/COLT.dmg";
		$scope.osName = "OS X";
	}else if(isWindows){
		$scope.coltUrl = "https://codeorchestra.s3.amazonaws.com/COLT-install.exe";
		$scope.osName = "Windows";
	}else if(isLinux){
		$scope.coltUrl = "http://codeorchestra.s3.amazonaws.com/colt-linux.tar.gz";
		$scope.osName = "Linux";
	}

	$scope.downloadColt = function() {
		window.location.replace($scope.coltUrl);
	}

	$scope.downloadButtonText = ($scope.osName) ? "Download for " + $scope.osName : "Download";
});

app.controller("BuyController", function($scope) {
});


app.controller("FlashController", function($scope) {
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
	var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
	var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

	if(isMac){
		$scope.coltUrl = "https://codeorchestra.s3.amazonaws.com/old/COLT.dmg";
		$scope.osName = "OS X";
	}else if(isWindows){
		$scope.coltUrl = "https://codeorchestra.s3.amazonaws.com/old/COLT-install.exe";
		$scope.osName = "Windows";
	}else if(isLinux){
		$scope.coltUrl = "http://codeorchestra.s3.amazonaws.com/old/colt-linux.tar.gz";
		$scope.osName = "Linux";
	}

	$scope.downloadColt = function() {
		window.location.replace($scope.coltUrl);
	}
});
app
.controller("HelpController", function($scope, $location, $anchorScroll) {
	$scope.scrollTo = function(id) {
		$location.hash(id);
		$anchorScroll();
	}
});
