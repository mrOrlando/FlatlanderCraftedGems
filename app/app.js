(function() {

    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
            canPurchase: true,
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: ". . .",
            canPurchase: false,
        },
        {
            name: 'Azurite',
            price: 2.95,
            canPurchase: false,
        },
        {
            name: 'Bloodstone',
            price: 5.95,
            canPurchase: true,
        },
        {
            name: 'Zircon',
            price: 3.95,
            canPurchase: true,
        }
    ];

})();