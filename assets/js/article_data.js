let ArticleData = {
    namespaced: true,
    state: {
        homeBlgArticle: {
            type: "ty01",
            link: true,
            data: [
                {
                    id: 1,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/blog',
                    src: "img_blog_001",
                    linkTxt: "Read More",
                }, {
                    id: 2,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/blog',
                    src: "img_blog_002",
                    linkTxt: "Read More",
                }, {
                    id: 3,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/blog',
                    src: "img_blog_003",
                    linkTxt: "Read More",
                }
            ]
        },
        blgMainArticle : {
            type: "ty01",
            link: true,
            data: [
                {
                    id: 10,
                    title: "A UX Case Study on Creating a Studious Environment for Students",
                    author: "Andrew Jonson",
                    subTit: "27th January 2021",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.",
                    path: '/blog/10',
                    src: "img_blog_010",
                    linkTxt: "Read More",
                }
            ]
        },
        blgArticle: {
            type: "ty01",
            link: true,
            data: [
                {
                    id: 4,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "27 Jan 2021",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/blog/4',
                    src: "img_blog_004",
                    linkTxt: "Read More",
                }, {
                    id: 5,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "27 Jan 2021",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/blog/5',
                    src: "img_blog_005",
                    linkTxt: "Read More",
                }, {
                    id: 6,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "27 Jan 2021",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/blog/6',
                    src: "img_blog_006",
                    linkTxt: "Read More",
                }, {
                    id: 7,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "27 Jan 2021",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/blog/7',
                    src: "img_blog_007",
                    linkTxt: "Read More",
                }, {
                    id: 8,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "27 Jan 2021",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/blog/8',
                    src: "img_blog_008",
                    linkTxt: "Read More",
                }, {
                    id: 9,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "27 Jan 2021",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/blog/9',
                    src: "img_blog_009",
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
                    path: {name: 'workPost', params: {id: 1}},
                    src: "img_work_001",
                    linkTxt: "View Portfolio",
                    key: "ui",
                }, {
                    id: 2,
                    title: "Template 2",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: {name: 'workPost', params: {id: 2}},
                    src: "img_work_002",
                    linkTxt: "View Portfolio",
                    key: "figma",
                }, {
                    id: 3,
                    title: "Template 3",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: {name: 'workPost', params: {id: 3}},
                    src: "img_work_003",
                    linkTxt: "View Portfolio",
                    key: "ui",
                }, {
                    id: 4,
                    title: "Template 4",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: {name: 'workPost', params: {id: 4}},
                    src: "img_work_004",
                    linkTxt: "View Portfolio",
                    key: "ui",
                }, {
                    id: 5,
                    title: "Template 5",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: {name: 'workPost', params: {id: 5}},
                    src: "img_work_005",
                    linkTxt: "View Portfolio",
                    key: "webflow",
                }, {
                    id: 6,
                    title: "Template 6",
                    txt: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
                    path: {name: 'workPost', params: {id: 6}},
                    src: "img_work_006",
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
                    src: "https://www.youtube.com/embed/uWQ_8CtvzoY?controls=1&loop=1&mute=1&playlist=uWQ_8CtvzoY",
                },
                {
                    id: 2,
                    title: "Laser focus",
                    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    subTit: "Our Vision",
                    src: "https://www.youtube.com/embed/UalTfOIDQ7M?controls=1&loop=1&mute=1&playlist=UalTfOIDQ7M",
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
        featData: {
            type: `type01`,
            tit: ``,
            data: [
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
                }
            ],
        },
        bnfData: {
            type: `ty02`,
            data: [
                {
                    id: 1,
                    icoTy: `ty06`,
                    tit: `Customize with ease`,
                    txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.`,
                },
                {
                    id: 2,
                    icoTy: `ty03`,
                    tit: `Perfectly Responsive`,
                    txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.`,
                },
                {
                    id: 3,
                    icoTy: `ty01`,
                    tit: `Friendly Support`,
                    txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.`,
                }]
        },
        bnfTitData: {
            aboutTit: `The benefits of working with us`,
            featuresTit: `The benefits of working with our team`,
        },
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
        ],
        followData: [
            {
                id: 1,
                tit: `Planning`,
                txt: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr.`
            },
            {
                id: 2,
                tit: `Conception`,
                txt: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr.`
            },
            {
                id: 3,
                tit: `Design`,
                txt: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr.`
            },
            {
                id: 4,
                tit: `Development`,
                txt: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr.`
            },
        ],
        teamData: [
            {
                id: 1,
                img: `img_team_001.png`,
                name: `John Smith`,
                tit: `CEO`,
            },
            {
                id: 2,
                img: `img_team_002.png`,
                name: `Simon Adams`,
                tit: `CTO`,
            },
            {
                id: 3,
                img: `img_team_003.png`,
                name: `Paul Jones`,
                tit: `Design Lead`,
            },
            {
                id: 4,
                img: `img_team_004.png`,
                name: `Sara Hardin`,
                tit: `Project Manager`,
            }

        ],
        featuresData: {
            type: "ty02",
            link: false,
            data: [
                {
                    id: 1,
                    subTit: `Use Client-first`,
                    title: `Top agencies and freelancers around the world use Client-first`,
                    txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
                    src: `img_feat_001`,
                },
                {
                    id: 2,
                    subTit: `Free Revision Rounds`,
                    title: `Get free Revisions and one week of free maintenance`,
                    txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
                    src: `img_feat_002`,
                },
                {
                    id: 3,
                    subTit: `24/7 Support`,
                    title: `Working with us, you will be getting 24/7 priority support`,
                    txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
                    src: `img_feat_003`,
                },
                {
                    id: 4,
                    subTit: `Quick Delivery`,
                    title: `Guranteed 1 week delivery for standard five pager website`,
                    txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
                    src: `img_feat_004`,
                },
            ]
        },
        planData: [
            {
                id: 1,
                type: "ty02",
                price: "299",
                sticker: "Per Design",
                title: "Landing Page",
                txt: "When you’re ready to go beyond prototyping in Figma,",
                btnTxt: "Get started",
                planList: [
                    {
                        id: 1,
                        item: "All limited links"
                    }, {
                        id: 2,
                        item: "Own analytics platform"
                    }, {
                        id: 3,
                        item: "Chat support"
                    }, {
                        id: 4,
                        item: "Optimize hashtags",
                        type: true
                    }, {
                        id: 5,
                        item: "Unlimited users",
                        type: true
                    },
                ]
            },
            {
                id: 2,
                type: "ty01",
                price: "399",
                sticker: "Multi Design",
                title: "Website Page ",
                txt: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
                btnTxt: "Get started",
                planList: [
                    {
                        id: 1,
                        item: "All limited links"
                    }, {
                        id: 2,
                        item: "Own analytics platform"
                    }, {
                        id: 3,
                        item: "Chat support"
                    }, {
                        id: 4,
                        item: "Optimize hashtags",
                    }, {
                        id: 5,
                        item: "Unlimited users"
                    },
                ]
            },
            {
                id: 3,
                type: "ty02",
                price: "499 +",
                sticker: "Per Design",
                title: "Complex Project",
                txt: "When you’re ready to go beyond prototyping in Figma, ",
                btnTxt: "Contact us",
                planList: [
                    {
                        id: 1,
                        item: "All limited links"
                    }, {
                        id: 2,
                        item: "Own analytics platform"
                    }, {
                        id: 3,
                        item: "Chat support"
                    }, {
                        id: 4,
                        item: "Optimize hashtags"
                    }, {
                        id: 5,
                        item: "Unlimited users"
                    }, {
                        id: 6,
                        item: "Assist and Help"
                    },
                ]
            },
        ],
        userListData: [
            {
                id: 1,
                name: `user1`,
                url: `img_logo_user_001`,
                url2: `img_logo_user_w_001`,
            },
            {
                id: 2,
                name: `user2`,
                url: `img_logo_user_002`,
                url2: `img_logo_user_w_002`,
            },
            {
                id: 3,
                name: `user3`,
                url: `img_logo_user_003`,
                url2: `img_logo_user_w_003`,
            },
            {
                id: 4,
                name: `user4`,
                url: `img_logo_user_004`,
                url2: `img_logo_user_w_004`,
            },
            {
                id: 5,
                name: `user5`,
                url: `img_logo_user_005`,
                url2: `img_logo_user_w_005`,
            },
        ]
    },
    mutations: {
        slideOpen(state, payload) {
            if(state.faqData[payload].open === true){
                state.faqData[payload].open = false
            } else{
                for (let i = 0; i < state.faqData.length; i++) {
                    state.faqData[i].open = false
                }
                state.faqData[payload].open = true
            }  
        },
    },
};