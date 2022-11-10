const app = new Vue({
    el: '#app',
    store,
    router,
    // VueAwesomeSwiper,
    components: {
        HeaderMain,
        FooterMain,
    },
    mixins: [ appData ],
})