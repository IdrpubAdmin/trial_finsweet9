<template>
  <div class="blog-contents">
    <div class="content blog-main-content">
      <div class="content-header">
        <div class="header-tit">
          <h3 class="tit-h2">{{ blgMainArticle.data[0].title }}</h3>
          <p class="txt-md"><span>{{ blgMainArticle.data[0].author }}</span> Post on <span>{{ blgMainArticle.data[0].subTit }}</span></p>
        </div>
        <article-type :article-data="blgMainArticle"></article-type>
      </div>
    </div>
    <blg-content :article-data="blgArticle"></blg-content>
  </div>
</template>

<script>
module.exports = {
  computed: {
    blgArticle() {
      return this.$store.getters["ArticleData"].blgArticle;
    },
    blgMainArticle() {
      return this.$store.getters["ArticleData"].blgMainArticle;
    },
  },
  components: {
    BlgContent,
    ArticleType
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>