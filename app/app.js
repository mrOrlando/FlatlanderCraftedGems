(function() {

    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller("PanelContoller", function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        }
    });

    app.controller("GalleryController", function() {
        this.current = 0;

        this.setCurrent = function(value) {
            this.current = value || 0;
        };
    });

    app.controller("ReviewController", function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
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
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@tomas.com",
                    createdOn: 1472824826916
                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "tim@hater.com",
                    createdOn: 1472824826916
                }
            ]
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: ". . .",
            canPurchase: false,
            images: [
                'img/pentagonal-01.gif',
                'img/pentagonal-02.gif'
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
            ],
            reviews: [
                {
                    stars: 3,
                    body: "I think this gem was just OK, could honestly use more shine, IMO",
                    author: "JimmyDean@sausage.com",
                    createdOn: 1472824826916
                },
                {
                    stars: 4,
                    body: "Any gem with 12 faces is for me!",
                    author: "gemRock@alyssaNicoll.com",
                    createdOn: 1472824826916
                }
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
            ],
            reviews: [{
              stars: 1,
              body: "This gem is WAY too expensive for its rarity value.",
              author: "turtleguyy@example.org",
              createdOn: 1472824826916
            }, {
              stars: 1,
              body: "BBW: High Shine != High Quality.",
              author: "LouisW407@example.org",
              createdOn: 1472824826916
            }, {
              stars: 1,
              body: "Don't waste your rubles!",
              author: "nat@example.org",
              createdOn: 1472824826916
            }]
        }
    ];

})();