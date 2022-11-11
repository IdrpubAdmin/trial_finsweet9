<template>
  <div class="content features-content">
    <div class="content-header blind">
      Features
    </div>
    <article-type :article-data="featuresData"></article-type>
  </div>
</template>

<script>
module.exports = {
  name: "FeaturesContent",
  components: {
    ArticleType
  },
  computed: {
    featuresData() {
      return this.$store.getters["ArticleData"].featuresData;
    },
  },
}
</script>