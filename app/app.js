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
            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
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
            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
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
            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
            canPurchase: true,
            images: [
               'img/zircon-01.gif',
               'img/zircon-02.gif',
               'img/zircon-03.gif'
            ]
        }
    ];

})();