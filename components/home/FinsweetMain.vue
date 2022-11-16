<template>
  <div class="home-contents">
    <main-banner :banner-cont="bannerCont"></main-banner>
    <work-content></work-content>
    <main-proj-content></main-proj-content>
    <benefits-content></benefits-content>
    <cli-content></cli-content>
    <faq-content></faq-content>
    <inq-content></inq-content>
    <blg-content :article-data="homeBlgArticle"></blg-content>
  </div>
</template>

<script>
module.exports = {
  components: {
    MainBanner,
    WorkContent,
    AboutMain,
    FaqContent,
    ArticleType,
    BenefitsContent,
    ButtonBanner,
    SocialBanner,
    MainProjContent,
    CliContent,
    InqContent,
    BlgContent
  },
  computed: {
    bannerCont() {
      return this.$store.getters["MainBannerData"].MainBannerData;
    },
    homeBlgArticle() {
      return this.$store.getters["ArticleData"].homeBlgArticle;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>