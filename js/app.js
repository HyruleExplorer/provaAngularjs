
(function(){

    var app = angular.module("provaAngularjs",[]);

    app.controller(
        "negozioController",
        function(){
            this.prodotti = macchine;
        }
    )

    var macchine = [
        {
            marca : "Lamborghini",
            nome : "Gallardo",
            prezzo : 350,
            colore : "gialla",
            canPurchase : true,
            isSoldOut : false
        },
        {
            marca : "Ferrari",
            nome : "Enzo",
            prezzo : 230,
            colore : "rossa",
            canPurchase : true,
            isSoldOut : false
        }
    ];
})();


