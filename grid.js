const containerE1 = document.querySelector(".store");

const colorContainerE1s = document.querySelectorAll(".item");

generateColors();

function generateColors() {
  colorContainerE1s.forEach(
    (colorContainerE1) => {
    const newColorCode = randomColor();
    colorContainerE1.style.backgroundColor = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY;
  const body = document.querySelector('body');
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentScrolled = 1 - (scrollPos / maxScroll);
  const red = Math.floor(percentScrolled * 255);
  const green = Math.floor(percentScrolled * 255);
  const blue = Math.floor(percentScrolled * 255);
  body.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
});



                        /*<![CDATA1[*/
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
                                id: '8224901890306',
                                node: document.getElementById('product-component-1699325236323'),
                                moneyFormat: '%24%7B%7Bamount%7D%7D',
                                options: {
                          "product": {
                            "styles": {
                              "product": {
                                "@media (min-width: 601px)": {
                                  "max-width": "calc(25% - 20px)",
                                  "margin-left": "20px",
                                  "margin-bottom": "50px"
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
                              "description": {
                                "color": "#000000"
                              }
                            },
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

                        /*<![CDATA2[*/
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
                                id: '8213205778690',
                                node: document.getElementById('product-component-1699326023269'),
                                moneyFormat: '%24%7B%7Bamount%7D%7D',
                                options: {
                          "product": {
                            "styles": {
                              "product": {
                                "@media (min-width: 601px)": {
                                  "max-width": "calc(25% - 20px)",
                                  "margin-left": "20px",
                                  "margin-bottom": "50px"
                                }
                              },
                              "title": {
                                "font-size": "20px"
                              },
                              "button": {
                                "font-weight": "bold",
                                "font-size": "18px",
                                "padding-top": "17px",
                                "padding-bottom": "17px",
                                "color": "#faf196",
                                ":hover": {
                                  "color": "#faf196",
                                  "background-color": "#1d3fff"
                                },
                                "background-color": "#1125a8",
                                ":focus": {
                                  "background-color": "#1d3fff"
                                },
                                "border-radius": "0px",
                                "padding-left": "100px",
                                "padding-right": "100px"
                              },
                              "quantityInput": {
                                "font-size": "18px",
                                "padding-top": "17px",
                                "padding-bottom": "17px"
                              },
                              "price": {
                                "font-size": "16px"
                              },
                              "compareAt": {
                                "font-size": "13.6px"
                              },
                              "unitPrice": {
                                "font-size": "13.6px"
                              },
                              "description": {
                                "color": "#000000"
                              }
                            },
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
                                "font-size": "18px",
                                "padding-top": "17px",
                                "padding-bottom": "17px",
                                "color": "#faf196",
                                ":hover": {
                                  "color": "#faf196",
                                  "background-color": "#1d3fff"
                                },
                                "background-color": "#1125a8",
                                ":focus": {
                                  "background-color": "#1d3fff"
                                },
                                "border-radius": "0px",
                                "padding-left": "100px",
                                "padding-right": "100px"
                              },
                              "quantityInput": {
                                "font-size": "18px",
                                "padding-top": "17px",
                                "padding-bottom": "17px"
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
                                "font-size": "18px",
                                "padding-top": "17px",
                                "padding-bottom": "17px",
                                "color": "#faf196",
                                ":hover": {
                                  "color": "#faf196",
                                  "background-color": "#1d3fff"
                                },
                                "background-color": "#1125a8",
                                ":focus": {
                                  "background-color": "#1d3fff"
                                },
                                "border-radius": "0px"
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
                                "font-size": "18px",
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
                        
                        /*<![CDATA3[*/
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
                              node: document.getElementById('product-component-1699327238461'),
                              moneyFormat: '%24%7B%7Bamount%7D%7D',
                              options: {
                        "product": {
                          "styles": {
                            "product": {
                              "@media (min-width: 601px)": {
                                "max-width": "calc(25% - 20px)",
                                "margin-left": "20px",
                                "margin-bottom": "50px"
                              }
                            },
                            "title": {
                              "font-size": "20px"
                            },
                            "button": {
                              "font-weight": "bold",
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px",
                              "color": "#faf196",
                              ":hover": {
                                "color": "#faf196",
                                "background-color": "#1d3fff"
                              },
                              "background-color": "#1125a8",
                              ":focus": {
                                "background-color": "#1d3fff"
                              },
                              "border-radius": "0px",
                              "padding-left": "100px",
                              "padding-right": "100px"
                            },
                            "quantityInput": {
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px"
                            },
                            "price": {
                              "font-size": "16px"
                            },
                            "compareAt": {
                              "font-size": "13.6px"
                            },
                            "unitPrice": {
                              "font-size": "13.6px"
                            },
                            "description": {
                              "color": "#000000"
                            }
                          },
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
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px",
                              "color": "#faf196",
                              ":hover": {
                                "color": "#faf196",
                                "background-color": "#1d3fff"
                              },
                              "background-color": "#1125a8",
                              ":focus": {
                                "background-color": "#1d3fff"
                              },
                              "border-radius": "0px",
                              "padding-left": "100px",
                              "padding-right": "100px"
                            },
                            "quantityInput": {
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px"
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
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px",
                              "color": "#faf196",
                              ":hover": {
                                "color": "#faf196",
                                "background-color": "#1d3fff"
                              },
                              "background-color": "#1125a8",
                              ":focus": {
                                "background-color": "#1d3fff"
                              },
                              "border-radius": "0px"
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
                              "font-size": "18px",
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

                      /*<![CDATA4[*/
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
                              id: '8210008146178',
                              node: document.getElementById('product-component-1699328311958'),
                              moneyFormat: '%24%7B%7Bamount%7D%7D',
                              options: {
                        "product": {
                          "styles": {
                            "product": {
                              "@media (min-width: 601px)": {
                                "max-width": "calc(25% - 20px)",
                                "margin-left": "20px",
                                "margin-bottom": "50px"
                              },
                              "carousel-button": {
                                "display": "none"
                              }
                            },
                            "title": {
                              "font-size": "20px"
                            },
                            "button": {
                              "font-weight": "bold",
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px",
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
                              "padding-left": "50px",
                              "padding-right": "50px"
                            },
                            "quantityInput": {
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px"
                            },
                            "price": {
                              "font-size": "20px"
                            },
                            "compareAt": {
                              "font-size": "17px"
                            },
                            "unitPrice": {
                              "font-size": "17px"
                            },
                            "description": {
                              "color": "#000000"
                            }
                          },
                          "contents": {
                            "img": false,
                            "imgWithCarousel": true
                          },
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
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px",
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
                              "padding-left": "50px",
                              "padding-right": "50px"
                            },
                            "quantityInput": {
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px"
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
                              "font-size": "18px",
                              "padding-top": "17px",
                              "padding-bottom": "17px",
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
                              "font-size": "18px",
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

                      /*<![CDATA5[*/
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
                            id: '8213434138882',
                            node: document.getElementById('product-component-1699327717821'),
                            moneyFormat: '%24%7B%7Bamount%7D%7D',
                            options: {
                      "product": {
                        "styles": {
                          "product": {
                            "@media (min-width: 601px)": {
                              "max-width": "calc(25% - 20px)",
                              "margin-left": "20px",
                              "margin-bottom": "50px"
                            }
                          },
                          "title": {
                            "font-size": "20px"
                          },
                          "button": {
                            "font-weight": "bold",
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px",
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
                            "padding-left": "75px",
                            "padding-right": "75px"
                          },
                          "quantityInput": {
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px"
                          },
                          "price": {
                            "font-size": "16px"
                          },
                          "compareAt": {
                            "font-size": "13.6px"
                          },
                          "unitPrice": {
                            "font-size": "13.6px"
                          },
                          "description": {
                            "color": "#000000"
                          }
                        },
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
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px",
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
                            "padding-left": "75px",
                            "padding-right": "75px"
                          },
                          "quantityInput": {
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px"
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
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px",
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
                            "font-size": "18px",
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

                    /*<![CDATA6[*/
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
                            id: '8215460544770',
                            node: document.getElementById('product-component-1699327798484'),
                            moneyFormat: '%24%7B%7Bamount%7D%7D',
                            options: {
                      "product": {
                        "styles": {
                          "product": {
                            "@media (min-width: 601px)": {
                              "max-width": "calc(25% - 20px)",
                              "margin-left": "20px",
                              "margin-bottom": "50px"
                            }
                          },
                          "title": {
                            "font-size": "20px"
                          },
                          "button": {
                            "font-weight": "bold",
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px",
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
                            "padding-left": "75px",
                            "padding-right": "75px"
                          },
                          "quantityInput": {
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px"
                          },
                          "price": {
                            "font-size": "16px"
                          },
                          "compareAt": {
                            "font-size": "13.6px"
                          },
                          "unitPrice": {
                            "font-size": "13.6px"
                          },
                          "description": {
                            "color": "#000000"
                          }
                        },
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
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px",
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
                            "padding-left": "75px",
                            "padding-right": "75px"
                          },
                          "quantityInput": {
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px"
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
                            "font-size": "18px",
                            "padding-top": "17px",
                            "padding-bottom": "17px",
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
                            "font-size": "18px",
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
