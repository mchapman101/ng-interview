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

/* jshint validthis: true */
		var vm = this;

		vm.getStudents = getStudents;
		vm.students = [];

		/**
		 * Initialization
		 */

		  function getStudents() {
			 StudentsService.getStudents().then(function(response){
				 console.log(response, 'response hit');
				 vm.students = response;
			 });
		 };



		activate();

		/**
		 * Implementations
		 */

		function activate() {
			// Initialization code goes here
			return getStudents();

		}
	}
})();
