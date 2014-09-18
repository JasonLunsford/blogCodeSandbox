angular.module( 'blogCodeSandbox.sandbox.controllers', [] )
	.controller( 'SandBoxCtrl', function SandBoxCtrl( $scope ) {
		$scope.currentSection = "Main Sand Box";

		$scope.blogList = {
			0 : {
					workingBlogTitle : "The Magic of Two Way Bindings: An Angular Deep Dive",
					blogStamp : "Blog 2 for Modus Create",
					blogOwner : "Modus Create",
					sandBoxUrl : "modusBlog02"
				}
		};
	});