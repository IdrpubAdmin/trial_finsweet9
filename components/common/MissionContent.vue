<template>
  <div class="content-bg-wrap accent">
    <div class="content mission-content">
      <div class="content-header">
        <h3 class="blind">Our Mission, Our Vision</h3>
      </div>
      <article-type :article-data="missionArticle"></article-type>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "MissionContent",
  computed: {
    missionArticle() {
      return this.$store.getters["ArticleData"].missionArticle;
    },
  },
  components: {
    ArticleType,
  }
}
</script>