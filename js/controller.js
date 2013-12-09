angular.module('Waterfall',['ngResource'])

.controller('AppCtrl',function($scope){

	$scope.items = [
		[
		{height:50},
		{height:70},
		{height:80},
		{height:80},
		{height:20},
		{height:50},
		{height:40},
		{height:10},
		{height:78},
		{height:120}
		],

		[
		{height:60},
		{height:70},
		{height:30},
		{height:50},
		{height:90},
		{height:100},
		{height:120},
		{height:110},
		{height:98},
		{height:100}
		],

		[
		{height:50},
		{height:80},
		{height:40},
		{height:80},
		{height:70},
		{height:100},
		{height:110},
		{height:110},
		{height:98},
		{height:100}
		],

		[
		{height:50},
		{height:50},
		{height:40},
		{height:80},
		{height:70},
		{height:100},
		{height:120},
		{height:110}
	
		],

		[
		{height:50},
		{height:60},
		{height:40},
		{height:80},
		{height:100},
		{height:120},
		{height:110},
		{height:98},
		{height:100}
		]
	];

});