const FinsweetMain = httpVueLoader('../components/home/FinsweetMain.vue');
const AboutMain = httpVueLoader('../components/about/AboutMain.vue');

const router = new VueRouter({
	routes: [
		{
			name: 'home',
			path: '/',
			component: FinsweetMain,
		},
	]
})
