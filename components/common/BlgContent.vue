<template>
  <div class="content blog-content">
    <!--  Content header | 제목  -->
    <div class="content-header">
      <h3 class="tit-h2">Our blog</h3>
    </div>
    <!--  Content header | 제목  -->
    <!--  Content body | 본문   -->
    <article-type :article-data="articleData"></article-type>
    <!--   //content body | 본문   -->
  </div>
</template>

<script>
module.exports = {
  name: "blogContent",
  props: {
    articleData: Object
  },
  components: {
    ArticleType
  },
  computed : {

  }
}
</script>