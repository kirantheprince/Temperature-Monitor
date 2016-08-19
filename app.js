angular.module('app', [])
.controller('TemperatureController', ['$scope', 'TemperatureMonitor', function ($scope, TemperatureMonitor) {
   $scope.temperature = '';
   $scope.temperaturePattern = /^-?\d*\.?\d+$/;

   $scope.addTemperature = function(temperature) {
     TemperatureMonitor.recordTemperature(parseFloat(temperature));
     $scope.temperaturesArray = TemperatureMonitor.temperatureReading.join();
     $scope.temperature = '';
   };

   $scope.getMedianTemperature = function() {
   	$scope.currentMedian = TemperatureMonitor.getCurrentMedian();
   };

 }])
 
.service('TemperatureMonitor', [function() {
 var temperatureReading;
 this.temperatureReading = [];
 
 this.recordTemperature = function(temperature) {
   if(!isNaN(temperature)) {
     this.temperatureReading.push(temperature);
   }
 };
 
 this.getCurrentMedian = function() {
   this.temperatureReading.sort();
   var midValue = Math.floor(this.temperatureReading.length/2);
   if(this.temperatureReading.length % 2 !== 0) {
   	return this.temperatureReading[midValue];
   } else {
   	return (this.temperatureReading[midValue - 1] + this.temperatureReading[midValue])/2;
   }
 };

}]);
