<template>
  <div>
    <main-banner :banner-cont="bannerCont"></main-banner>
    <work-content></work-content>
    <benefits-list></benefits-list>
    <faq-content></faq-content>
    <article-type></article-type>
    <button-banner></button-banner>
    <social-banner></social-banner>
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
    BenefitsList,
    ButtonBanner,
    SocialBanner,
  },
  computed: {
    bannerCont() {
      return this.$store.getters["MainBannerData"].MainBannerData;
    }
  }
}
</script>