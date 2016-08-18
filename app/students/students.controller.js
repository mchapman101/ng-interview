(function() {
	'use strict';
	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);
	StudentsController.$inject = ['StudentsService'];
	function StudentsController(StudentsService) {

		/**
		 * Model
		 */


		var vm = this;

		/**
		 * Initialization
		 */

		 vm.getStudents = function() {
			 console.log('ctrl hit');
			 StudentsService.getStudents().then(function(response){
				 console.log(response, 'response hit');
				 var students = response.data;
			 });
		 };

		 vm.getStudents();


		activate();

		/**
		 * Implementations
		 */

		function activate() {
			// Initialization code goes here
			console.log('is this working?');

		}
	}
})();

console.log("I get ran");
