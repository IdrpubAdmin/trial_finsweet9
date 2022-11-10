const app = new Vue({
    el: '#app',
    store,
    router,
    components: {
        HeaderMain,
        FooterMain,
    },
    mixins: [ appData ],
})