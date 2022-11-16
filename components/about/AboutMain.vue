<template>
  <div class="about-contents">
    <about-us-content></about-us-content>
    <who-we-content></who-we-content>
    <follow-content></follow-content>
    <mission-content></mission-content>
    <benefits-content02 :tit="aboutTit"></benefits-content02>
    <team-content></team-content>
  </div>
</template> 

<script>
module.exports = {
  components: {
    AboutUsContent,
    WhoWeContent,
    FollowContent,
    MissionContent,
    BenefitsContent02,
    TeamContent,
  },
  computed: {
    aboutTit() {
      return this.$store.getters["ArticleData"].bnfTitData.aboutTit;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>