(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 53:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "GameCard_card__ZUYQa",
	"info-container": "GameCard_info-container__QYgk5",
	"game-title": "GameCard_game-title__06fsp",
	"icons-container": "GameCard_icons-container__Z8nYx",
	"pricing-container": "GameCard_pricing-container__P8s_b",
	"discount-box": "GameCard_discount-box__XBdTZ",
	"list-price": "GameCard_list-price__EeZ4O",
	"buttons-container": "GameCard_buttons-container__SmDBp"
};


/***/ }),

/***/ 257:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__pUpk9",
	"title": "Header_title__GiEXe",
	"menu": "Header_menu__KwHlK"
};


/***/ }),

/***/ 157:
/***/ ((module) => {

// Exports
module.exports = {
	"container-highlights": "Highlights_container-highlights__SMcOj",
	"highlight": "Highlights_highlight__7SJWw",
	"highlight-image": "Highlights_highlight-image__l_lpV"
};


/***/ }),

/***/ 288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"games-container": "Home_games-container__A2Dyg"
};


/***/ }),

/***/ 548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/GameCard/GameCard.module.css
var GameCard_module = __webpack_require__(53);
var GameCard_module_default = /*#__PURE__*/__webpack_require__.n(GameCard_module);
;// CONCATENATED MODULE: ./public/assets/star-filled.svg
/* harmony default export */ const star_filled = ({"src":"/_next/static/media/star-filled.3996e2d5.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/star-lined.svg
/* harmony default export */ const star_lined = ({"src":"/_next/static/media/star-lined.a7d8a2de.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/cart.svg
/* harmony default export */ const cart = ({"src":"/_next/static/media/cart.4cc8565e.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/apple-os.svg
/* harmony default export */ const apple_os = ({"src":"/_next/static/media/apple-os.474b4330.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/linux-os.svg
/* harmony default export */ const linux_os = ({"src":"/_next/static/media/linux-os.c9b947e9.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/windows-os.svg
/* harmony default export */ const windows_os = ({"src":"/_next/static/media/windows-os.54d2943b.svg","height":24,"width":24});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/GameCard/GameCard.tsx










var iconOptions;
(function(iconOptions) {
    iconOptions[iconOptions["windows"] = windows_os] = "windows";
    iconOptions[iconOptions["linux"] = linux_os] = "linux";
    iconOptions[iconOptions["apple"] = apple_os] = "apple";
})(iconOptions || (iconOptions = {}));
const GameCard = (props)=>{
    const { game , favoritesList , setFavoritesList  } = props;
    const { id , title , imageURL , listPrice , salePrice , osIconsList  } = game;
    const { 0: favorite , 1: setFavorite  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const isFavorited = (id)=>{
            return favoritesList.some((gameId)=>gameId === id);
        };
        window.localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
        isFavorited(id) && setFavorite(true);
    }, [
        id,
        favoritesList
    ]);
    const osIconsListRendenring = osIconsList.map((osIcon)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: iconOptions[osIcon],
                alt: osIcon
            })
        }, osIcon);
    });
    const favoriteAndUnfavorite = ()=>{
        setFavorite(!favorite);
        !favorite && setFavoritesList([
            ...favoritesList,
            id
        ]);
        favorite && setFavoritesList(favoritesList.filter((gameId)=>gameId !== id));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (GameCard_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: imageURL,
                width: "250px",
                alt: "cuphead"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (GameCard_module_default())["info-container"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (GameCard_module_default())["game-title"],
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (GameCard_module_default())["icons-container"],
                        children: osIconsListRendenring
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (GameCard_module_default())["pricing-container"],
                children: [
                    listPrice === salePrice ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (GameCard_module_default())["discount-box"],
                        children: [
                            "-",
                            100 - Math.round(salePrice / listPrice * 100),
                            "%"
                        ]
                    }),
                    listPrice === salePrice ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: (GameCard_module_default())["list-price"],
                        children: [
                            "R$ ",
                            listPrice.toString().replace(".", ",")
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "R$ ",
                            salePrice.toString().replace(".", ",")
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (GameCard_module_default())["buttons-container"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>favoriteAndUnfavorite(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: favorite ? star_filled : star_lined,
                            alt: "favorite"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: cart,
                            alt: "addToCart"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const GameCard_GameCard = (GameCard);

// EXTERNAL MODULE: ./components/Header/Header.module.css
var Header_module = __webpack_require__(257);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./components/Header/Header.tsx


const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).title,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "VaporWave"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_module_default()).menu,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "CATEGORIAS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "FAVORITOS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "CARRINHO"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "ACESSAR CONTA"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

// EXTERNAL MODULE: ./components/Highlights/Highlights.module.css
var Highlights_module = __webpack_require__(157);
var Highlights_module_default = /*#__PURE__*/__webpack_require__.n(Highlights_module);
;// CONCATENATED MODULE: ./public/assets/left-arrow.svg
/* harmony default export */ const left_arrow = ({"src":"/_next/static/media/left-arrow.1ccbadad.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/right-arrow.svg
/* harmony default export */ const right_arrow = ({"src":"/_next/static/media/right-arrow.82f7c39a.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./components/Highlights/Highlights.tsx





const Highlights = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Highlights_module_default())["container-highlights"],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "DESTAQUES"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Highlights_module_default()).highlight,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: left_arrow,
                            alt: "leftArrow"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Highlights_module_default())["highlight-image"],
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://cdn.windowsreport.com/wp-content/uploads/2020/12/Cyberpunk-2077-Banner.jpg",
                            alt: "highlight"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: right_arrow,
                            alt: "rightArrow"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Highlights_Highlights = (Highlights);

;// CONCATENATED MODULE: ./mock.ts
const gamesList = [
    {
        id: 4523148464536,
        title: "Cuphead",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg?t=1661955091",
        listPrice: 36.99,
        salePrice: 36.99,
        osIconsList: [
            "windows",
            "linux"
        ]
    },
    {
        id: 4646513213469,
        title: "Persona\xae 5 Strikers",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1382330/header.jpg?t=1661159838",
        listPrice: 299.99,
        salePrice: 149.99,
        osIconsList: [
            "windows",
            "linux",
            "apple"
        ]
    },
    {
        id: 4634688464351,
        title: "Devil May Cry 5",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg?t=1643243335",
        listPrice: 99.99,
        salePrice: 32.99,
        osIconsList: [
            "windows",
            "linux",
            "apple"
        ]
    },
    {
        id: 4564676864651,
        title: "Dragon Age™ Inquisition",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1222690/header.jpg?t=1661435977",
        listPrice: 199.99,
        salePrice: 199.99,
        osIconsList: [
            "windows",
            "apple"
        ]
    },
    {
        id: 4545132132464,
        title: "OCTOPATH TRAVELER™",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/921570/header.jpg?t=1663152377",
        listPrice: 226.99,
        salePrice: 113.49,
        osIconsList: [
            "windows",
            "linux"
        ]
    },
    {
        id: 4965897132732,
        title: "Fallout 4",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg?t=1650909928",
        listPrice: 59.99,
        salePrice: 59.99,
        osIconsList: [
            "windows",
            "linux",
            "apple"
        ]
    },
    {
        id: 4997863632544,
        title: "The Elder Scrolls V: Skyrim Special Edition",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1650909796",
        listPrice: 149.99,
        salePrice: 129.99,
        osIconsList: [
            "windows",
            "linux",
            "apple"
        ]
    },
    {
        id: 4997354896654,
        title: "The Outer Worlds",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/578650/header.jpg?t=1663604182",
        listPrice: 249.99,
        salePrice: 209.99,
        osIconsList: [
            "windows"
        ]
    },
    {
        id: 4587456874123,
        title: "NieR:Automata™",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/524220/header.jpg?t=1646911723",
        listPrice: 109.99,
        salePrice: 99.99,
        osIconsList: [
            "windows",
            "apple"
        ]
    },
    {
        id: 4587987873573,
        title: "Resident Evil Village",
        imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg?t=1662659934",
        listPrice: 139.99,
        salePrice: 139.99,
        osIconsList: [
            "windows",
            "linux",
            "apple"
        ]
    }
];

;// CONCATENATED MODULE: ./pages/index.tsx








const getStaticProps = async ()=>{
    return {
        props: {
            games: gamesList
        },
        revalidate: 30
    };
};
const Home = ({ games  })=>{
    let favoritesFromLocalStorage;
    if (false) {}
    const { 0: favoritesList , 1: setFavoritesList  } = (0,external_react_.useState)(favoritesFromLocalStorage);
    const gamesList = games.map((game)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(GameCard_GameCard, {
            game: game,
            favoritesList: favoritesList,
            setFavoritesList: setFavoritesList
        }, game.id);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "VaporWave"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "landing page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Highlights_Highlights, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default())["games-container"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "BEST SELLERS"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Home_module_default())["games-list"],
                                children: gamesList
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(548)));
module.exports = __webpack_exports__;

})();