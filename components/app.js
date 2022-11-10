const app = new Vue({
    el: '#app',
    mixins: [ appData ],
    store,
    router,
    components: {
        HeaderMain,
        FooterMain,
    }
})