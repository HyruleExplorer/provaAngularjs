/*jslint plusplus: true, sloppy: true, vars: true*/

(function () {

    var app = angular.module("negozioApp", []);

    app.controller(
        "negozioController",
        function () {
            this.prodotti = macchine;
        }
    );

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

    var macchine = [
        {
            marca : "Lamborghini",
            modello : "Gallardo",
            descrizione : "Una velocissima e bellissima macchina sportiva.",
            prezzo : 350000,
            colore : "giallo",
            images : [
                {
                    full : "img/gallardo_full.jpg",
                    thumb : "img/gallardo_thumb.jpg"
                }
            ],
            canPurchase : true,
            isSoldOut : false,
            recensioni : [
                {
                    voto : 10,
                    commento : "Macchina stupenda!"
                },
                {
                    voto : 9,
                    commento : "Sono felice del mio acquisto."
                }
            ]
        },
        {
            marca : "Ferrari",
            modello : "Enzo",
            descrizione : "Una veloce ed elegante macchina sportiva italiana. Nel rispetto della tradizione",
            prezzo : 230000,
            colore : "rosso",
            images : [
                {
                    full : "img/ferrari_full.jpg",
                    thumb : "img/ferrari_thumb.jpg"
                }
            ],
            canPurchase : true,
            isSoldOut : false,
            recensioni : [
                {
                    voto : 9,
                    commento : "Eccezionale! Non ve ne pentirete."
                },
                {
                    voto : 8.5,
                    commento : "Notevole. Un pò dura nelle curve, però."
                }
            ]
        },
        {
            marca : "Fiat",
            modello : "500",
            descrizione :
                "Una bella utilitaria italiana.Perfetta per la città",
            prezzo : 30000,
            colore : "bianco",
            images : [
                {
                    full : "img/fiat_full.jpg",
                    thumb : "img/fiat_thumb.jpg"
                }
            ],
            canPurchase : true,
            isSoldOut : false,
            recensioni : [
                {
                    voto : 7,
                    commento : "E' quello che ci si aspetta da un'utilitaria."
                },
                {
                    voto : 6,
                    commento : "Un pò piccola, ma non si può pretendere molto."
                }
            ]
        }
    ];


}());


