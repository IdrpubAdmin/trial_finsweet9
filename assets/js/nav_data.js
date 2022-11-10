let NavigationData = {
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

let CategoryData = {
    namespaced: true,
    state: {
        workCategory: [
            {
                id: 1,
                title: "All",
                key: "all",
                active: true,
            },{
                id: 2,
                title: "UI Design",
                key: "ui",
                active: false,
            },{
                id: 3,
                title: "Webflow Design",
                key: "webflow",
                active: false,
            },{
                id: 4,
                title: "Figma Design",
                key: "figma",
                active: false,
            }
        ]
    },
    mutations: {
        ctgyActive(state, payload) {
            for(let i=0; i<state.workCategory.length; i++){
                state.workCategory[i].active = false
                if(state.workCategory[i].id === payload.id){
                    state.workCategory[i].active = true
                } 
            }
        }
    }
}