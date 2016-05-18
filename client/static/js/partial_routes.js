console.log("Partial Routes Loaded");

var todoer = angular.module('todoer',['ngRoute',])

todoer.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',{
		templateUrl: './partials/user.html',
	})

	//pretty urls -- requires <base href='/'> in index file header
	$locationProvider.html5Mode(true);
});