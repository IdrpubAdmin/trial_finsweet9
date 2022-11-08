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
const FeaturesMain = httpVueLoader('../components/features/FeaturesMain.vue');
const PricingMain = httpVueLoader('../components/pricing/PricingMain.vue');
const BlogMain = httpVueLoader('../components/blog/BlogMain.vue');
const WorkContent = httpVueLoader('../components/common/WorkContent.vue');
const MainProjContent = httpVueLoader('../components/common/MainProjContent.vue');
const CliContent = httpVueLoader('../components/common/CliContent.vue');
const InqContent = httpVueLoader('../components/common/InqContent.vue');
const BlgContent = httpVueLoader('../components/common/BlgContent.vue');

const router = new VueRouter({
	routes: [
		{
			name: 'home',
			path: '/',
			component: FinsweetMain,
		},
		{
			name: 'about',
			path: '/aboutus',
			component: AboutMain,
		},
		{
			name: 'features',
			path: '/features',
			component: FeaturesMain,
		},
		{
			name: 'pricing',
			path: '/pricing',
			component: PricingMain,
		},
		{
			name: 'faq',
			path: '/faq',
			component: FaqContent,
		},
		{
			name: 'blog',
			path: '/blog',
			component: BlogMain,
		},
	]
})
