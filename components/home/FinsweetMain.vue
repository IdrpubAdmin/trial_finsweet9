<template>
  <div>
    Home연결확인
    <main-banner :banner-cont="bannerCont"></main-banner>
    <about-main></about-main>
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
  },
  computed: {
    bannerCont() {
      return this.$store.getters["BannerData"].bannerData01;
    }
  }
}
</script>