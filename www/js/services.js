angular.module('starter.services', ['ngResource'])
.factory('Session', ['$resource', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
}])

.factory('City',['$http', function ($http) {
	var service = {};
	service.getWeather = function(city_id, callback){
		$http({
			method:'GET',
			url:'http://api.openweathermap.org/data/2.5/weather?id=' + city_id+ '&APPID=b63721ad786ac89eecd495d527be8556'
		}).then(function(response){
			callback(response);
		});
	}
	return service;
}])
/*.factory('City',['$resource', function ($resource) {
	var service = {};
	service.getWeather = function(city_id){
		console.log($resource('http://api.openweathermap.org/data/2.5/weather?id=' + city_id + '&APPID=b63721ad786ac89eecd495d527be8556'));
		return $resource('http://api.openweathermap.org/data/2.5/weather?id=' + city_id + '&APPID=b63721ad786ac89eecd495d527be8556');
	}

	return service;
}])*/
.factory('CityList',['$resource', function ($resource) {
    return $resource('json/city-list.json');
}])
.factory('LoginService',['$http', function ($http){
	var service = {};
	service.Login = function(datalogin, callback){
		$http({
			method:'POST',
			url:'http://localhost:5000/login',
			data:datalogin
		}).then(function(response){
			callback(response);
		});
	}
	return service;
}]);