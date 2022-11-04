<template>
  <div>
    <main-banner :banner-cont="bannerCont"></main-banner>
<!--    <about-main></about-main>-->
    <benefits-list></benefits-list>
    <faq-content></faq-content>
<!--    <article-type></article-type>-->
  </div>
</template>

<script>
module.exports = {
  components: {
    MainBanner,
    AboutMain,
    FaqContent,
    ArticleType,
    BenefitsList,
  },
  computed: {
    bannerCont() {
      return this.$store.getters["BannerData"].bannerData01;
    }
  }
}
</script>