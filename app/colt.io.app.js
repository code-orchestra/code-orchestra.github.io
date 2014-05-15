'use strict';

angular.module("colt.io.app", [
	'ui.router','ui.bootstrap', 'colt.io.directives'
	])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
})

.controller("HomeController", function($scope) {
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
	var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
	var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

	if(isMac){
		$scope.osName = "OS X";
	}else if(isWindows){
		$scope.osName = "Windows";
	}else if(isLinux){
		$scope.osName = "Linux";
	}

	$scope.downloadColt = function(type) {
		type = type || $scope.osName.replace(" ", "").toLowerCase();
		var coltUrl = "";

		if(type=="osx"){
			coltUrl = "https://codeorchestra.s3.amazonaws.com/COLT.dmg";
		}else if(type=="windows"){
			coltUrl = "http://codeorchestra.s3.amazonaws.com/COLT-install.exe";
		}else if(type=="linux"){
			coltUrl = "http://codeorchestra.s3.amazonaws.com/colt-linux.tar.gz";
		}
		// console.log(coltUrl);
		window.location.replace(coltUrl);
	}

	$scope.installPlugin = function(platform) {
		var pluginUrl;
		if(platform=="idea"){
			pluginUrl = "http://plugins.jetbrains.com/plugin/7435?pr=";
		}else if(platform=="sublime"){
			pluginUrl = "https://sublime.wbond.net/packages/COLT";
		}
		// console.log(pluginUrl);
		window.location.replace(pluginUrl);
	}

	$scope.downloadDemoProject = function(type) {
		var projectUrl;
		if(type=="html"){
			projectUrl = "https://github.com/code-orchestra/livecoding_examples/tree/master/js/balls";
		}else if(type=="node-js"){
			projectUrl = "https://github.com/code-orchestra/livecoding_examples/tree/master/js/nodejs";
		}else if(type=="node-webkit"){
			projectUrl = "https://github.com/code-orchestra/livecoding_examples/tree/master/js/node-webkit";
		}
		// console.log(projectUrl);
		window.location.replace(projectUrl);
	}

	$scope.dropdown = [
	  {
	    "text": "<i class=\"fa fa-download\"></i>&nbsp;Another action",
	    "href": "#anotherAction"
	  },
	  {
	    "text": "<i class=\"fa fa-globe\"></i>&nbsp;Display an alert",
	    "click": "$alert(\"Holy guacamole!\")"
	  },
	  {
	    "divider": true
	  },
	  {
	    "text": "Separated link",
	    "href": "#separatedLink"
	  }
	];

	$scope.downloadButtonText = ($scope.osName) ? "Download for " + $scope.osName : "Download";
})

.controller("BuyController", function($scope) {
})


.controller("FlashController", function($scope) {
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
	var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
	var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

	if(isMac){
		$scope.coltUrl = "https://codeorchestra.s3.amazonaws.com/old/COLT.dmg";
		$scope.osName = "OS X";
	}else if(isWindows){
		$scope.coltUrl = "http://codeorchestra.s3.amazonaws.com/COLT-AS-install.exe";
		$scope.osName = "Windows";
	}else if(isLinux){
		$scope.coltUrl = "http://codeorchestra.s3.amazonaws.com/old/colt-linux.tar.gz";
		$scope.osName = "Linux";
	}

	$scope.downloadColt = function() {
		window.location.replace($scope.coltUrl);
	}
})

.controller("HelpController", function($scope, $location, $anchorScroll) {
	$scope.scrollTo = function(id) {
		$location.hash(id);
		$anchorScroll();
	}
});
