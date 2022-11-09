const FinsweetMain = httpVueLoader('../components/home/FinsweetMain.vue');
const WorkMain = httpVueLoader('../components/work/WorkMain.vue');
const HeaderMain = httpVueLoader('../components/common/HeaderMain.vue');
const FooterMain = httpVueLoader('../components/common/FooterMain.vue');
const AboutMain = httpVueLoader('../components/about/AboutMain.vue');
const FaqContent = httpVueLoader('../components/common/FaqContent.vue');
const ArticleType = httpVueLoader('../components/common/ArticleType.vue');
const ButtonBanner = httpVueLoader('../components/common/ButtonBanner.vue');
const SocialBanner = httpVueLoader('../components/common/SocialBanner.vue');
const MainBanner = httpVueLoader('../components/common/MainBanner.vue');
const BenefitsContent = httpVueLoader('../components/common/BenefitsContent.vue');
const FeaturesMain = httpVueLoader('../components/features/FeaturesMain.vue');
const PricingMain = httpVueLoader('../components/pricing/PricingMain.vue');
const BlogMain = httpVueLoader('../components/blog/BlogMain.vue');
const WorkContent = httpVueLoader('../components/common/WorkContent.vue');
const MainProjContent = httpVueLoader('../components/common/MainProjContent.vue');
const CliContent = httpVueLoader('../components/common/CliContent.vue');
const InqContent = httpVueLoader('../components/common/InqContent.vue');
const BlgContent = httpVueLoader('../components/common/BlgContent.vue');
const ArticleType02 = httpVueLoader('../components/common/ArticleType02.vue');
const AboutUsContent = httpVueLoader('../components/common/AboutUsContent.vue');
const WhoWeContent = httpVueLoader('../components/common/WhoWeContent.vue');
const FollowContent = httpVueLoader('../components/common/FollowContent.vue');
const MissionContent = httpVueLoader('../components/common/MissionContent.vue');
const FeaturesList = httpVueLoader('../components/common/FeaturesList.vue');
const BenefitsContent02 = httpVueLoader('../components/common/BenefitsContent02.vue');
const WorkPost = httpVueLoader('../components/work/WorkPost.vue');

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
		{
			name: 'work',
			path: '/work',
			component: WorkMain,
		},
		{
			name: 'workPost',
			path: '/work/:id',
			component: WorkPost,
			props: route => ({id:Number(route.params.id)}),
		},
	]
})
