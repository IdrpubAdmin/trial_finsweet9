let ArticleData = {
    namespaced: true,
    state: {
        homeArticle: {
            type: "ty01",
            link: true,
            data: [
                {
                    id: 1,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/',
                    src: "blog001",
                    linkTxt: "Read More",
                }, {
                    id: 2,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/',
                    src: "blog002",
                    linkTxt: "Read More",
                }, {
                    id: 3,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/',
                    src: "blog003",
                    linkTxt: "Read More",
                }
            ]
        },
        workArticle: {
            type: "ty01",
            link: true,
            data: [
                {
                    id: 1,
                    title: "Template 1",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: { name:'workPost', params: {id: 1}},
                    src: "work001",
                    linkTxt: "View Portfolio",
                    key: "ui",
                }, {
                    id: 2,
                    title: "Template 2",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: { name:'workPost', params: {id: 2}},
                    src: "work002",
                    linkTxt: "View Portfolio",
                    key: "figma",
                }, {
                    id: 3,
                    title: "Template 3",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: { name:'workPost', params: {id: 3}},
                    src: "work003",
                    linkTxt: "View Portfolio",
                    key: "ui",
                }, {
                    id: 4,
                    title: "Template 4",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: { name:'workPost', params: {id: 4}},
                    src: "work004",
                    linkTxt: "View Portfolio",
                    key: "ui",
                }, {
                    id: 5,
                    title: "Template 5",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: { name:'workPost', params: {id: 5}},
                    src: "work005",
                    linkTxt: "View Portfolio",
                    key: "webflow",
                }, {
                    id: 6,
                    title: "Template 6",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: { name:'workPost', params: {id: 6}},
                    src: "work006",
                    linkTxt: "View Portfolio",
                    key: "webflow",
                },
            ]
        },
        aboutUsArticle: {
            type: "ty02",
            link: false,
            data: [
                {
                    id: 1,
                    title: "Our designs solve problems",
                    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                    subTit: "About us",
                    path: '/',
                    src: "img_about_001",
                    linkTxt: "View Portfolio",
                },
            ]
        },
        missionArticle: {
            type: "ty02",
            link: false,
            data: [
                {
                    id: 1,
                    title: "Inspire, Innovate, Share",
                    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    subTit: "Our Mission",
                    src: "img_about_002",
                },
                {
                    id: 2,
                    title: "Laser focus",
                    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    subTit: "Our Mission",
                    src: "img_about_003",
                },
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
                icoTy: `ty01`,
                tit: `Uses Client First`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 2,
                icoTy: `ty02`,
                tit: `Two Free Revision Round`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 3,
                icoTy: `ty03`,
                tit: `Template Customization`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 4,
                icoTy: `ty04`,
                tit: `24/7 Support`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 5,
                icoTy: `ty05`,
                tit: `Quick Delivery`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 6,
                icoTy: `ty06`,
                tit: `Hands-on approach`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
        ],
        bnfData: [
            {
                id: 1,
                icoTy: `ty01`,
                tit: `Uses Client First`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 2,
                icoTy: `ty02`,
                tit: `Two Free Revision Round`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            },
            {
                id: 3,
                icoTy: `ty03`,
                tit: `Template Customization`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.`,
            }
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
        cliData: [
            {
                id: 1,
                img: `img_cli_001.png`,
                name: `Jenny wilson`,
                tit: `Vice President`,
                txt: `"The best agency we’ve worked with so far. They understand our product and are able
                    to add new features with a great focus."`
            },
            {
                id: 2,
                img: `img_cli_001.png`,
                name: `Jacob wilson`,
                tit: `Vice President`,
                txt: `"The best agency we’ve worked with so far. They understand our product and are able
                    to add new features with a great focus."`
            },
            {
                id: 3,
                img: `img_cli_001.png`,
                name: `Mike wilson`,
                tit: `Vice President`,
                txt: `"The best agency we’ve worked with so far. They understand our product and are able
                    to add new features with a great focus."`
            },
            {
                id: 4,
                img: `img_cli_001.png`,
                name: `harry wilson`,
                tit: `Vice President`,
                txt: `"The best agency we’ve worked with so far. They understand our product and are able
                    to add new features with a great focus."`
            },
        ],
        mpcData: [
            {
                id: 1,
                tit: `Workhub office Webflow Webflow Design`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam`,
                img: `img_proj_001.png`,
            },
            {
                id: 2,
                tit: `Unisaas Website Design`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam`,
                img: `img_proj_002.png`,
            },
            {
                id: 3,
                tit: `Church Website Design`,
                txt: `Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam`,
                img: `img_proj_003.png`,
            }
        ]
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