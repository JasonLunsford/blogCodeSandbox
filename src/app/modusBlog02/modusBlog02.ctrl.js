angular.module( 'blogCodeSandbox.modusBlog02.controllers', [] )
	.controller( 'ModusBlog02Ctrl', function ModusBlog02Ctrl( $scope ) {

	})

	.controller( 'ExampleController', function ExampleController( $scope ) {
		this.currentSection = "The Magic of Two Way Bindings: An Angular Deep Dive";
		this.doubleCurl = "Double curly binding";
		this.boundByBind = "ngBind binding";

	})

	.controller( 'NoDotController', function NoDotController( $scope ) {
		// Empty!
	})

	.controller( 'DotController', function DotController( $scope ) {
		// Empty!
	})

	.controller( 'FilterController', function FilterController( $scope ) {
		this.nameList = [
			{ name: 'Andrew' },
			{ name: 'Luke' },
			{ name: 'William' },
			{ name: 'Jason' },
			{ name: 'Skylar' },
			{ name: 'Lucy' },
			{ name: 'Zelda' }
		];

	})

	.controller( 'FormatController', function FormatController( $scope ) {
		this.submitMyForm = function(isValid) {
			if (isValid) {
				alert("Good Job!");
			}
		};
	});