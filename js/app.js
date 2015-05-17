
(function(){


    var app = angular.module("negozioApp",[]);

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
            prezzo : 350000,
            colore : "giallo",
            canPurchase : true,
            isSoldOut : false
        },
        {
            marca : "Ferrari",
            nome : "Enzo",
            prezzo : 230000,
            colore : "rosso",
            canPurchase : true,
            isSoldOut : false
        },
        {
            marca : "Fiat",
            nome : "500",
            prezzo : 30000,
            colore : "bianco",
            canPurchase : true,
            isSoldOut : false
        }
    ];


})();

