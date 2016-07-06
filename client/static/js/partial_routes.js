console.log("Partial Routes Loaded");

var todoer = angular.module('todoer',['ngRoute',])

todoer.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',{
		templateUrl: './partials/home.html',
	})
	.when('/signin',{
		templateUrl: './partials/signin.html',
	})
	.when('/register', {
		templateUrl: '/register',
	})
	.otherwise({
		redirectTo: '/'
	});

	//pretty urls -- requires <base href='/'> in index file header
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});