<template>
  <div class="features-contents">
    <main-banner :banner-cont="bannerCont"></main-banner>
    <benefits-content02 :tit="featuresTit"></benefits-content02>
    <features-content></features-content>
    <faq-content></faq-content>
  </div>
</template>

<script>
module.exports = {
  components: {
    MainBanner,
    BenefitsContent02,
    FeaturesContent,
    FaqContent,
  },
  computed: {
    bannerCont() {
      return this.$store.getters["MainBannerData"].bannerData02;
    },
    featuresTit() {
      return this.$store.getters["ArticleData"].bnfTitData.featuresTit;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>