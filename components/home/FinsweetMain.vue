 <template>
    <div>
        <main-banner :banner-cont="bannerCont"></main-banner>
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
    AboutMain,
    FaqContent,
    ArticleType,
    BenefitsList,
    ButtonBanner,
    SocialBanner,
  },
  computed: {
    bannerCont() {
      return this.$store.getters["BannerData01"].bannerData01;
    }
  }
}
</script>