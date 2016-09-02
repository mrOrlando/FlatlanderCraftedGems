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
            images: [
                'img/dodecahedron-01.gif',
                'img/dodecahedron-02.gif'
            ]
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: ". . .",
            canPurchase: false,
            images: [
                'img/pentagonal-01.gif',
                'img/pentagonal-02.png'
            ]
        },
        {
            name: 'Azurite',
            price: 2.95,
            canPurchase: false,
            images: [
                'img/azurite-01.gif',
                'img/azurite-02.gif',
                'img/azurite-03.gif'
            ]
        },
        {
            name: 'Bloodstone',
            price: 5.95,
            canPurchase: true,
            images: [
                'img/bloodstone-01.gif',
                'img/bloodstone-02.gif',
                'img/bloodstone-03.gif'
            ]
        },
        {
            name: 'Zircon',
            price: 3.95,
            canPurchase: true,
            images: [
               'img/zircon-01.gif',
               'img/zircon-02.gif',
               'img/zircon-03.gif'
            ]
        }
    ];

})();