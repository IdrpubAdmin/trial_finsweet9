var NavigationData = {
    namespaced: true,
    state: {
        categoryData : [
            { id: 1, title: "Home", path: "/"},
            { id: 2, title: "About us", path: "/aboutus" },
            { id: 3, title: "Features", path: "/features" },
            { id: 4, title: "Pricing", path: "/pricing" },
            { id: 5, title: "FAQ", path: "/faq" },
            { id: 6, title: "Blog", path: "/blog" },
        ],
        snsData : [
            {id: 1, title: "facebook"},
            {id: 2, title: "twitter"},
            {id: 3, title: "instagram"},
            {id: 4, title: "linkedin"},
        ]
    }
};

var ArticleData = {
    namespaced: true,
    state: {
        articleData: {
            type: "ty01",
            data: [
                {id:1, date:"19 Jan 2022", title: "블라블라", txt: "이러쿵저러쿵어쩌구저쩌구룰루랄라", link: true},
                {id:2, date:"19 Jan 2022", title: "블라블라", txt: "이러쿵저러쿵어쩌구저쩌구룰루랄라", link: true},
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
        ArticleData: ArticleData,
    },
    state: {
        path: {
            img: '../assets/images/',
            components: '../components/'
        },
    },
    mutations: {

    },
    getters: {
        NavigationData: function NavigationData(state) {
            return state.NavigationData;
        },
        ArticleData: function ArticleData(state) {
            return state.ArticleData;
        },
    },
});