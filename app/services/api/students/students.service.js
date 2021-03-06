(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http'];
	function StudentsService($http) {

		/**
		 * Exposed functions
		 */
		 var service = this;
		   this.getStudents = getStudents



		/**
		 * Implementations
		 */

		function getName() {
			return 'studentsService';
		}

		function getStudents() {
			return $http({
				method: 'GET',
				url: 'http://il-resume-api.azurewebsites.net/api/students'
			 })
			.then(function(response) {
				console.log(typeof response.data);
				if(typeof response.data != "object"){
					return getStudents();
				}
				else{
					return response.data;
				}

			 })
			 .catch(function(response){
				 if(response.status === 503){
					 return getStudents();
				 }
			 });
		}
	}
})();
