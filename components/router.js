const FinsweetMain = httpVueLoader('../components/home/FinsweetMain.vue');
const HeaderMain = httpVueLoader('../components/common/HeaderMain.vue');
const FooterMain = httpVueLoader('../components/common/FooterMain.vue');
const AboutMain = httpVueLoader('../components/about/AboutMain.vue');
const FaqContent = httpVueLoader('../components/common/FaqContent.vue');
const ArticleType = httpVueLoader('../components/common/ArticleType.vue');
const ButtonBanner = httpVueLoader('../components/common/ButtonBanner.vue');
const SocialBanner = httpVueLoader('../components/common/SocialBanner.vue');
const MainBanner = httpVueLoader('../components/common/MainBanner.vue');
const BenefitsList = httpVueLoader('../components/common/BenefitsList.vue');

const router = new VueRouter({
	routes: [
		{
			name: 'home',
			path: '/',
			component: FinsweetMain,
		},
	]
})
