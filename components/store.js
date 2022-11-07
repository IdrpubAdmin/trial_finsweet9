var NavigationData = {
    namespaced: true,
    state: {
        categoryData: [
            {id: 1, title: "Home", path: "/"},
            {id: 2, title: "About us", path: "/aboutus"},
            {id: 3, title: "Features", path: "/features"},
            {id: 4, title: "Pricing", path: "/pricing"},
            {id: 5, title: "FAQ", path: "/faq"},
            {id: 6, title: "Blog", path: "/blog"},
        ],
        snsData: [
            {id: 1, title: "facebook"},
            {id: 2, title: "twitter"},
            {id: 3, title: "instagram"},
            {id: 4, title: "linkedin"},
        ]
    }
};

let HeaderData = {
    namespaced: true,
    state: {
        navActive: false,
        scrollY: 0,
        lastScrollY: 0,
        timer: null,
    },
    mutations: {
        navChange(state) {
            state.navActive = !state.navActive;
        },
        handleScroll(state) {
            if (state.timer === null) {
                state.timer = setTimeout(function () {
                    state.lastScrollY = state.scrollY
                    state.scrollY = window.scrollY
                    clearTimeout(state.timer)
                    state.timer = null
                }, 200)
            }
        }
    }
};

var BannerData = {
    state: {
        BannerData: {
            title: "Let's build something great together",
            subTit: "19 Jan 2022",
            txt: "Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.",
            path: '/',
        },
    },
}

var ArticleData = {
    namespaced: true,
    state: {
        articleData: {
            type: "ty01",
            data: [
                {
                    id: 1,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    link: true,
                    path: '/',
                }, {
                    id: 2,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    link: true,
                    path: '/',
                }, {
                    id: 3,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    link: true,
                    path: '/',
                }
            ]
        },
        faqData: [
            {num: "01", open: true, title: "How much time does it take ?"},
            {num: "02", open: false, title: "What is your class naming convention ?"},
            {num: "03", open: false, title: "How do we communicate ?"},
            {num: "04", open: false, title: "I have a bigger project. Can you handle it ?"},
            {num: "05", open: false, title: "What is your class naming convention ?"}
        ],
        featData: [
            {
                id: 1,
                icoTy: `ty1`,
                tit: `Uses Client First`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 2,
                icoTy: `ty2`,
                tit: `Two Free Revision Round`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 3,
                icoTy: `ty3`,
                tit: `Template Customization`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 4,
                icoTy: `ty4`,
                tit: `24/7 Support`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 5,
                icoTy: `ty5`,
                tit: `Quick Delivery`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 6,
                icoTy: `ty6`,
                tit: `Hands-on approach`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
        ],
        hwwData: [
            {
                id: 1,
                num: `01`,
                tit: `Strategy`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.`
            },
            {
                id: 2,
                num: `02`,
                tit: `Wireframing`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.`
            },
            {
                id: 3,
                num: `03`,
                tit: `Design`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.`
            },
            {
                id: 4,
                num: `04`,
                tit: `Development`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.`
            },
        ],
    },
    mutations: {
        slideOpen(state, payload) {
            for (let i = 0; i < state.faqData.length; i++) {
                state.faqData[i].open = false
            }
            state.faqData[payload].open = true
        },
    },
};

let MainBannerData = {
    namespaced: true,
    state: {
        MainBannerData: {
            id: 1,
            tit: `Building stellar websites for early startups`,
            txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            btn1Txt: "View our work",
            btn1Path: '/work',
            btn2: true,
            btn2Txt: "View Pricing",
            btn2Path: '/pricing',
            img: 'ty1',
        },
        bannerData02: {
            id: 2,
            tit: `All the features you need`,
            txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            btn1Txt: "View Pricing",
            btn1Path: '/pricing',
            btn2: false,
            btn2Txt: "",
            btn2Path: '',
            img: `ty2`
        }
    },
    mutations: {
        navChange(state) {
            state.navActive = !state.navActive;
        },
        handleScroll(state) {
            if (state.timer === null) {
                state.timer = setTimeout(function () {
                    state.lastScrollY = state.scrollY
                    state.scrollY = window.scrollY
                    clearTimeout(state.timer)
                    state.timer = null
                }, 200)
            }
        }
    }
};

const store = new Vuex.Store({
    namespaced: true,
    modules: {
        NavigationData: NavigationData,
        HeaderData: HeaderData,
        ArticleData: ArticleData,
        BannerData: BannerData,
        MainBannerData: MainBannerData,
    },
    state: {
        path: {
            img: '../assets/images/',
            components: '../components/',
        },
    },
    mutations: {},
    getters: {
        NavigationData: function NavigationData(state) {
            return state.NavigationData;
        },
        HeaderData: function HeaderData(state) {
            return state.HeaderData;
        },
        ArticleData: function ArticleData(state) {
            return state.ArticleData;
        },
        BannerData: function BannerData(state) {
            return state.BannerData;
        },
        MainBannerData: function MainBannerData(state) {
            return state.MainBannerData;
        }
    },
});