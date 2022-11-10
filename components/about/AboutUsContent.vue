<template>
    <div class="content about-us-content">
      <div class="content-header">
        <h3 class="blind">About Us</h3>
      </div>
      <article-type :article-data="aboutUsArticle"></article-type>
    </div>
</template>

<script>
module.exports = {
  components: {
    ArticleType,
  },
  computed: {
    aboutUsArticle() {
      return this.$store.getters["ArticleData"].aboutUsArticle;
    },
  },
}
</script>