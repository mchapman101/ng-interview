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

		 console.log("I get init");
		   this.getStudents = function(id) {
				 console.log('hit1');
		     return $http({
		       method: 'GET',
		       url: 'http://il-resume-api.azurewebsites.net/api/students'
		     }).then(function(response) {
					 return response.data;
				 }
		     );
		   };

		   // OTHER FUNCTIONS
		   // ============================================================

		/**
		 * Implementations
		 */

		function getName() {
			return 'studentsService';
		}
	}
})();
