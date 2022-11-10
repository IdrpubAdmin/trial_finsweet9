<template>
  <div class="content features-content">
    <div class="content-header blind">
      Features
    </div>
    <article-bg-type :article-data="featuresData"></article-bg-type>
  </div>
</template>

<script>
module.exports = {
  name: "FeaturesContent",
  components: {
    ArticleBgType
  },
  computed: {
    featuresData() {
      return this.$store.getters["ArticleData"].featuresData;
    },
  },
}
</script>