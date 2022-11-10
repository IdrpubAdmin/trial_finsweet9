const app = new Vue({
    el: '#app',
    mixins: [ appData ],
    store,
    router,
    // VueAwesomeSwiper,
    components: {
        HeaderMain,
        FooterMain,
    }
})