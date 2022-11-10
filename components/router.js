
const WorkMain = httpVueLoader('../components/work/WorkMain.vue');
const HeaderMain = httpVueLoader('../components/common/HeaderMain.vue');
const FooterMain = httpVueLoader('../components/common/FooterMain.vue');

const FaqContent = httpVueLoader('../components/common/FaqContent.vue');
const ArticleType = httpVueLoader('../components/common/ArticleType.vue');
const ButtonBanner = httpVueLoader('../components/common/ButtonBanner.vue');
const SocialBanner = httpVueLoader('../components/common/SocialBanner.vue');
const MainBanner = httpVueLoader('../components/common/MainBanner.vue');
const FeaturesList = httpVueLoader('../components/common/FeaturesList.vue');
const BenefitsContent02 = httpVueLoader('../components/common/BenefitsContent02.vue');

const PricingMain = httpVueLoader('../components/pricing/PricingMain.vue');
const BlogMain = httpVueLoader('../components/blog/BlogMain.vue');

/* home components */
const FinsweetMain = httpVueLoader('../components/home/FinsweetMain.vue');
const WorkContent = httpVueLoader('../components/home/WorkContent.vue');
const MainProjContent = httpVueLoader('../components/home/MainProjContent.vue');
const BenefitsContent = httpVueLoader('../components/home/BenefitsContent.vue');
const CliContent = httpVueLoader('../components/home/CliContent.vue');
const InqContent = httpVueLoader('../components/home/InqContent.vue');
const BlgContent = httpVueLoader('../components/home/BlgContent.vue');
/* //home components */

/* about components */
const AboutMain = httpVueLoader('../components/about/AboutMain.vue');
const VideoArticle = httpVueLoader('../components/about/VideoArticle.vue');
const AboutUsContent = httpVueLoader('../components/about/AboutUsContent.vue');
const WhoWeContent = httpVueLoader('../components/about/WhoWeContent.vue');
const FollowContent = httpVueLoader('../components/about/FollowContent.vue');
const MissionContent = httpVueLoader('../components/about/MissionContent.vue');

const TeamContent = httpVueLoader('../components/about/TeamContent.vue');
/* //about components */

/* features components */
const FeaturesMain = httpVueLoader('../components/features/FeaturesMain.vue');
const FeaturesContent = httpVueLoader('../components/features/FeaturesContent.vue');
const ArticleBgType = httpVueLoader('../components/features/ArticleBgType.vue');
/* //featers components */

const WorkPost = httpVueLoader('../components/work/WorkPost.vue');
const WorkArticle = httpVueLoader('../components/work/WorkArticle.vue');


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
