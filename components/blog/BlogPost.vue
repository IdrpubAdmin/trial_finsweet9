<template>
    <div class="blog-post-contents">
        <div class="content post-main">
            <section>
                <div class="post-texts">
                    <h3 class="tit-h2">{{postData.title}}</h3>
                    <p class="txt-md">{{postData.txt}}</p>
                </div>
                <div class="img-wrap">
                    <img :src="'../assets/images/temp/' + postData.src + '.png'" alt="article img">
                </div>
            </section>
        </div>
        <div class="content post-info">
            <section class="post-detail-1">
                <text-article :text-data="textData[0]"></text-article>
                <div class="media-box">
                    <iframe :src="postData.media" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="post-detail-2">
                <text-article :text-data="textData[1]"></text-article>
                <div class="img-wrap">
                    <img src="../assets/images/temp/img_blog_post_001.jpg" alt="article img">
                </div>
            </section>
            <section class="post-detail-3">
                <text-article :text-data="textData[2]"></text-article>
            </section>
        </div>
    </div>
</template>

<script>
module.exports = {
  components: {
    TextArticle,
    ButtonBanner,
  },
  props: {
    id: Number
  },
  computed: {
    postData() {
      let dataBase = this.$store.getters["PostData"].blogPost;
      for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].id == this.$route.params.id) {
          return dataBase[i];
        }
      }
    },
    textData() {
      let dataBase = this.$store.getters["TextData"].blogPost;
      for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].id == this.$route.params.id) {
          return dataBase[i].postData;
        }
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>