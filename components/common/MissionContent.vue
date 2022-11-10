<template>
  <div class="content-bg-wrap accent">
    <div class="content mission-content">
      <div class="content-header">
        <h3 class="blind">Our Mission, Our Vision</h3>
      </div>
      <video-article :article-data="missionArticle"></video-article>
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
    VideoArticle,
  }
}
</script>