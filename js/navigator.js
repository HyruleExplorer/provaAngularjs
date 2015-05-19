(function () {

    var app = angular.module("navigatorApp", []);

    app.controller(
        "navigatorController",
        function () {
            this.tab = 1;
            this.selectTab = function (setTab) {
                this.tab = setTab;
            };
            this.isSelected = function (checkTab) {
                return (this.tab === checkTab);
            };
        }
    );

    app.directive(
        "navMenu",
        function () {
            return {
                restrict: 'E',
                templateUrl: './templates/nav_menu.html'
            };
        }
    );

}());
