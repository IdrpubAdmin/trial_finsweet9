<template>
    <div class="work-contents">
        <social-banner></social-banner>
        <div class="content work-content">
            <ul class="category-nav">
                <li class="ctgy lb-txt-1" @click="">All</li>
                <li class="ctgy lb-txt-1" @click="">UI Design</li>
                <li class="ctgy lb-txt-1" @click="">Webflow Design</li>
                <li class="ctgy lb-txt-1" @click="">Figma Design</li>
            </ul>
            <article-type :article-data="articleData"></article-type>
        </div>
        <button-banner></button-banner>
    </div>
</template>

<script>
module.exports = {
  components: {
    SocialBanner,
    ButtonBanner,
    ArticleType,
  },
  computed : {
    articleData() {
      return this.$store.getters["ArticleData"].workArticle;
    },
  }
}
</script>