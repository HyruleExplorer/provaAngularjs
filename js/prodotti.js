(function () {

    var app = angular.module("prodottiApp", []);

    app.directive(
        "prodottoHeader",
        function () {
            return {
                restrict: 'E',
                templateUrl: './templates/prodotto_header.html'
            };
        }
    );

    app.directive(
        "prodottoBody",
        function () {
            return {
                restrict: 'E',
                templateUrl: './templates/prodotto_body.html'
            };
        }
    );

}());
