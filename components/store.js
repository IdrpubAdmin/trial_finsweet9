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
            if(state.timer === null) {
                state.timer = setTimeout(function() {
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
        HeaderData: function HeaderData(state) {
            return state.HeaderData;
        }
    },
});