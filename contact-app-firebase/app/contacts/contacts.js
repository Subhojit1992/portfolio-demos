app.controller('contactsController', ['$rootScope', '$scope', '$firebaseArray', function($rootScope, $scope, $firebaseArray){

	// main fire base database ref
	var ref = firebase.database().ref();
  	// download the data into a local object
  	$scope.contacts = $firebaseArray(ref);


  	$scope.searchKeywordValue = $rootScope.searchKeyword;


  	// add form show by defult
  	$scope.addFormShow = true;
  	$scope.editFormShow = false;


	// add contact function
	$scope.addContact = function(){
		console.log('Adding contact...');

		// add in the contacts object
		$scope.contacts.$add({
			name: $scope.name,
			email: $scope.email,
			phone: $scope.phone
		}).then(function(ref){
			var id = ref.key;
			console.log('Added contact ' + id);
			// clear the form after adding the contact
			$scope.name = '',
			$scope.email = '',
			$scope.phone = ''
		});
	}
  	


	// remove contact
	$scope.removeContact = function(contact){
		// remove the particular contact form firebase database
		$scope.contacts.$remove(contact);
	}


	// edit form
	$scope.showEditForm = function(contact){
		// change the values when show the edit form
		$scope.addFormShow = false;
		$scope.editFormShow = true;

		// store the id form the particullar contact
		$scope.id = contact.$id;
		// console.log($scope.id);
		// show the values as per cobtact IDs
		$scope.name = contact.name;
		$scope.email = contact.email;
		$scope.phone = contact.phone;

	}


	// edit contact submit
	$scope.editContact = function(){
		// get the $scope id when showEditForm() function give the id
		// and set that id in the id var
		var id = $scope.id;

		// console.log(id);

		// fetch the particullar contcat as per id
		var record = $scope.contacts.$getRecord(id);

		// set the name as per id
		record.name = $scope.name;
		record.email = $scope.email;
		record.phone = $scope.phone;

		// console.log(records);
		// record saved and return the ref.key
		$scope.contacts.$save(record).then(function(ref){
			console.log('contact edited ' + ref.key);
		});

		// clear the form field
		$scope.name = '',
		$scope.email = '',
		$scope.phone = ''

		// set defult property again
		$scope.editFormShow = false;
		$scope.addFormShow = true;
	}



}]);

