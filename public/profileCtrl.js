angular.module('userProfiles')
.controller('profileCtrl', function( $scope , friendService) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
  friendService.getFriends().then(function(response){

    $scope.currentUser = response.data.currentUser;
    $scope.friends = response.data.friendsList;

  })

});
