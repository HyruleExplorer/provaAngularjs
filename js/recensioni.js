(function () {

    var app = angular.module("recensioniApp", []);

    app.directive(
        "recensioni",
        function () {
            return {
                restrict: 'E',
                templateUrl: './templates/recensioni.html'
            };
        }
    );

    app.directive(
        "nuovaRecensione",
        function () {
            return {
                restrict: 'E',
                templateUrl: './templates/nuova_recensione.html',
                controller: function () {
                    this.review = {};
                    this.addReview = function (product, form) {
                        product.recensioni.push(this.review);
                        this.review = {};
                        form.$setPristine(true);
                    };
                },
                controllerAs: 'reviewCtrl'
            };
        }
    );

}());
