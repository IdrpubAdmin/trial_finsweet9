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
        snsData : [
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
            subTit:"19 Jan 2022",
            txt: "Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.",
            path: '/',
        },
    },
}

var ArticleData = {
    namespaced: true,
    state: {
        articleData: {
            type: "ty02",
            link: true,
            data: [
                {   
                    id: 1,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/',
                },{   
                    id: 2,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/',
                },{   
                    id: 3,
                    title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
                    subTit: "19 Jan 2022",
                    txt: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
                    path: '/',
                }
            ]
        },
        faqData : [
            {num: "01", open: true, title: "How much time does it take ?"},
            {num: "02", open: false, title: "What is your class naming convention ?"},
            {num: "03", open: false, title: "How do we communicate ?"},
            {num: "04", open: false, title: "I have a bigger project. Can you handle it ?"},
            {num: "05", open: false, title: "What is your class naming convention ?"}
        ]
    },
    mutations: {
        slideOpen(state, payload){
            for(let i=0; i<state.faqData.length; i++){
                state.faqData[i].open = false
            }
            state.faqData[payload].open = true
        },
    },
};

const store = new Vuex.Store({
    namespaced: true,
    modules: {
        NavigationData: NavigationData,
        HeaderData: HeaderData,
        ArticleData: ArticleData,
        BannerData : BannerData,
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
    },
});