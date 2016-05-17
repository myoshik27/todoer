console.log("Partial Routes Loaded");

var todoer = angular.module('todoer',['ngRoute',])

todoer.config(function($routeProvider){
	$routeProvider
	.when('/signin',{
		templateUrl: './partials/user.html',
	})
})