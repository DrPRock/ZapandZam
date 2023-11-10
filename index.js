//new featured link
const imgElements = document.querySelectorAll('.newChild img');

imgElements.forEach(img => {
  img.addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    window.open(url, '_blank');
  });
});
//bottom images
  const container = document.querySelector('.scrollContainer')

      function getRandNum(){
        return Math.floor(Math.random() * 601)
      }
      
      function loadImages(numImages = 20){
        let i = 0;
        while(i < numImages){
          const img = document.createElement('img')
          img.src = 'pics/' + getRandNum() + '.jpg'
          container.appendChild(img)
          i++
        }
      }
      loadImages()
 //listen for scroll
      
    let debounceTimeoutId;


    window.addEventListener('scroll', () => {
       clearTimeout(debounceTimeoutId);
       debounceTimeoutId = setTimeout(() => {
        if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight * 0.95)) {
      loadImages();
    }
  }, 2);
}, { passive: true });

// Get all taglines and hide them

    const taglines = document.querySelectorAll('.tagline');
    taglines.forEach(tagline => {
      tagline.style.display = 'none';
});

// Pick a random tagline and show it

    const randomIndex = Math.floor(Math.random() * taglines.length);
    taglines[randomIndex].style.display = 'block';

// Parallax effect
window.addEventListener("scroll", function() {
  var y = window.scrollY;
  document.querySelector(".css-slideshow").style.transform = "translateY(" + y * -0.5 + "px)";
});

/*<![CDATA[*/
                                          (function () {
                                            var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
                                            if (window.ShopifyBuy) {
                                              if (window.ShopifyBuy.UI) {
                                                ShopifyBuyInit();
                                              } else {
                                                loadScript();
                                              }
                                            } else {
                                              loadScript();
                                            }
                                            function loadScript() {
                                              var script = document.createElement('script');
                                              script.async = true;
                                              script.src = scriptURL;
                                              (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
                                              script.onload = ShopifyBuyInit;
                                            }
                                            function ShopifyBuyInit() {
                                              var client = ShopifyBuy.buildClient({
                                                domain: '8d6c1a-2.myshopify.com',
                                                storefrontAccessToken: '6cbd2acee7ce8a7d1bf2fd99cddd0a60',
                                              });
                                              ShopifyBuy.UI.onReady(client).then(function (ui) {
                                                ui.createComponent('product', {
                                                  id: '8223711166722',
                                                  node: document.getElementById('product-component-1699323613648'),
                                                  moneyFormat: '%24%7B%7Bamount%7D%7D',
                                                  options: {
                                            "product": {
                                              "styles": {
                                                "product": {
                                                  "@media (min-width: 601px)": {
                                                    "max-width": "100%",
                                                    "margin-left": "0",
                                                    "margin-bottom": "50px"
                                                  },
                                                  "text-align": "left"
                                                },
                                                "title": {
                                                  "font-size": "26px"
                                                },
                                                "button": {
                                                  "font-weight": "bold",
                                                  "font-size": "17px",
                                                  "padding-top": "16.5px",
                                                  "padding-bottom": "16.5px",
                                                  "color": "#faf196",
                                                  ":hover": {
                                                    "color": "#faf196",
                                                    "background-color": "#1d3fff"
                                                  },
                                                  "background-color": "#1125a8",
                                                  ":focus": {
                                                    "background-color": "#1d3fff"
                                                  },
                                                  "border-radius": "40px",
                                                  "padding-left": "62px",
                                                  "padding-right": "62px"
                                                },
                                                "quantityInput": {
                                                  "font-size": "17px",
                                                  "padding-top": "16.5px",
                                                  "padding-bottom": "16.5px"
                                                },
                                                "price": {
                                                  "font-size": "18px"
                                                },
                                                "compareAt": {
                                                  "font-size": "15.299999999999999px"
                                                },
                                                "unitPrice": {
                                                  "font-size": "15.299999999999999px"
                                                },
                                                "description": {
                                                  "color": "#000000"
                                                }
                                              },
                                              "layout": "horizontal",
                                              "contents": {
                                                "img": false,
                                                "imgWithCarousel": true,
                                                "description": true
                                              },
                                              "width": "100%",
                                              "text": {
                                                "button": "Add to cart"
                                              }
                                            },
                                            "productSet": {
                                              "styles": {
                                                "products": {
                                                  "@media (min-width: 601px)": {
                                                    "margin-left": "-20px"
                                                  }
                                                }
                                              }
                                            },
                                            "modalProduct": {
                                              "contents": {
                                                "img": false,
                                                "imgWithCarousel": true,
                                                "button": false,
                                                "buttonWithQuantity": true
                                              },
                                              "styles": {
                                                "product": {
                                                  "@media (min-width: 601px)": {
                                                    "max-width": "100%",
                                                    "margin-left": "0px",
                                                    "margin-bottom": "0px"
                                                  }
                                                },
                                                "button": {
                                                  "font-weight": "bold",
                                                  "font-size": "17px",
                                                  "padding-top": "16.5px",
                                                  "padding-bottom": "16.5px",
                                                  "color": "#faf196",
                                                  ":hover": {
                                                    "color": "#faf196",
                                                    "background-color": "#1d3fff"
                                                  },
                                                  "background-color": "#1125a8",
                                                  ":focus": {
                                                    "background-color": "#1d3fff"
                                                  },
                                                  "border-radius": "40px",
                                                  "padding-left": "62px",
                                                  "padding-right": "62px"
                                                },
                                                "quantityInput": {
                                                  "font-size": "17px",
                                                  "padding-top": "16.5px",
                                                  "padding-bottom": "16.5px"
                                                },
                                                "title": {
                                                  "font-family": "Helvetica Neue, sans-serif",
                                                  "font-weight": "bold",
                                                  "font-size": "26px",
                                                  "color": "#4c4c4c"
                                                },
                                                "price": {
                                                  "font-family": "Helvetica Neue, sans-serif",
                                                  "font-weight": "normal",
                                                  "font-size": "18px",
                                                  "color": "#4c4c4c"
                                                },
                                                "compareAt": {
                                                  "font-family": "Helvetica Neue, sans-serif",
                                                  "font-weight": "normal",
                                                  "font-size": "15.299999999999999px",
                                                  "color": "#4c4c4c"
                                                },
                                                "unitPrice": {
                                                  "font-family": "Helvetica Neue, sans-serif",
                                                  "font-weight": "normal",
                                                  "font-size": "15.299999999999999px",
                                                  "color": "#4c4c4c"
                                                },
                                                "description": {
                                                  "font-family": "Helvetica Neue, sans-serif",
                                                  "font-weight": "normal",
                                                  "font-size": "14px",
                                                  "color": "#4c4c4c"
                                                }
                                              },
                                              "text": {
                                                "button": "Add to cart"
                                              }
                                            },
                                            "option": {},
                                            "cart": {
                                              "styles": {
                                                "button": {
                                                  "font-weight": "bold",
                                                  "font-size": "17px",
                                                  "padding-top": "16.5px",
                                                  "padding-bottom": "16.5px",
                                                  "color": "#faf196",
                                                  ":hover": {
                                                    "color": "#faf196",
                                                    "background-color": "#1d3fff"
                                                  },
                                                  "background-color": "#1125a8",
                                                  ":focus": {
                                                    "background-color": "#1d3fff"
                                                  },
                                                  "border-radius": "40px"
                                                },
                                                "cart": {
                                                  "background-color": "#e2eeff"
                                                },
                                                "footer": {
                                                  "background-color": "#e2eeff"
                                                }
                                              },
                                              "text": {
                                                "total": "Subtotal",
                                                "button": "Checkout"
                                              }
                                            },
                                            "toggle": {
                                              "styles": {
                                                "toggle": {
                                                  "font-weight": "bold",
                                                  "background-color": "#1125a8",
                                                  ":hover": {
                                                    "background-color": "#1d3fff"
                                                  },
                                                  ":focus": {
                                                    "background-color": "#1d3fff"
                                                  }
                                                },
                                                "count": {
                                                  "font-size": "17px",
                                                  "color": "#faf196",
                                                  ":hover": {
                                                    "color": "#faf196"
                                                  }
                                                },
                                                "iconPath": {
                                                  "fill": "#faf196"
                                                }
                                              }
                                            }
                                          },
                                                });
                                              });
                                            }
                                          })();
                                          /*]]>*/
