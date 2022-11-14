const store = new Vuex.Store({
    namespaced: true,
    modules: {
        NavigationData: NavigationData,
        HeaderData: HeaderData,
        ArticleData: ArticleData,
        BannerData: BannerData,
        MainBannerData: MainBannerData,
        CategoryData: CategoryData,
        PostData: PostData,
        TextData: TextData,
    },
    state: {
        darkMode: false,
        path: {
            img: '../assets/images/temp/',
            components: '../components/',
        },
    },
    mutations: {
        themaBtn(state){
            if(state.darkMode === true){
                state.darkMode = false
                state.NavigationData.snsData02.type = 'ty02'
            } else {
                state.darkMode = true
                state.NavigationData.snsData02.type = 'ty01'
            }
        }
    },
    getters: {
        darkMode: function darkMode(state) {
            return state.darkMode;
        },
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
        },
        CategoryData: function CategoryData(state) {
            return state.CategoryData;
        },
        PostData: function PostData(state) {
            return state.PostData;
        },
        TextData: function TextData(state) {
            return state.TextData;
        },
    },
});