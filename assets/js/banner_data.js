let BannerData = {
    state: {
        BannerData: {
            title: "Let's build something great together",
            subTit: "19 Jan 2022",
            txt: "Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.",
            path: '/contact',
        },
    },
}

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
            img: 'ty01',
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
            img: `ty02`
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