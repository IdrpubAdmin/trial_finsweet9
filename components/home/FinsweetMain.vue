<template>
  <div>
    <main-banner :banner-cont="bannerCont"></main-banner>
    <work-content></work-content>
    <main-proj-content></main-proj-content>
    <benefits-list></benefits-list>
    <cli-content></cli-content>
    <faq-content></faq-content>
    <inq-content></inq-content>
    <blg-content></blg-content>
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
    MainProjContent,
    CliContent,
    InqContent,
    BlgContent
  },
  computed: {
    bannerCont() {
      return this.$store.getters["MainBannerData"].MainBannerData;
    },
  },
}
</script>