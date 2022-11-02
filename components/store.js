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


const store = new Vuex.Store({
    namespaced: true,
    modules: {
        NavigationData: NavigationData,
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
    },
});