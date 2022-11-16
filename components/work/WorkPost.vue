<template>
    <div class="work-post-contents">
        <div class="content post-main">
            <section>
                <div class="post-texts">
                    <p class="tit-h6">{{postData.subTit}}</p>
                    <h3 class="tit-h2">{{postData.title}}</h3>
                    <p class="txt-md">{{postData.txt}}</p>
                </div>
                <div class="img-wrap">
                    <img :src="'../assets/images/temp/' + postData.src + '.png'" alt="article img">
                </div>
                <ul class="post-summary">
                    <li>
                        <p class="txt-md">Client</p>
                        <p class="tit-h6">{{postData.client}}</p>
                    </li>
                    <li>
                        <p class="txt-md">Service</p>
                        <p class="tit-h6">{{postData.service}}</p>
                    </li>
                    <li>
                        <p class="txt-md">Deliverable</p>
                        <p class="tit-h6">{{postData.deliverable}}</p>
                    </li>
                </ul>
            </section>
        </div>
        <div class="content post-info">
            <section class="post-detail-1">
                <text-article :text-data="textData[0]"></text-article>
                <div class="img-wrap">
                    <img src="../assets/images/temp/img_work_post_001.png" alt="article img">
                </div>
            </section>
            <section class="post-detail-2">
                <text-article :text-data="textData[1]"></text-article>
                <ul class="category-list">
                    <li class="ctgy-item"><p class="lb-txt-1 active">Keywords</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">Design</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">UI/UX</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">Wireframing</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">Branding</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">Development</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">webflow</p></li>
                </ul>
            </section>
        </div>
        <button-banner></button-banner>
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
      let dataBase = this.$store.getters["PostData"].workPost;
      for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].id == this.$route.params.id) {
          return dataBase[i];
        }
      }
    },
    textData() {
      let dataBase = this.$store.getters["TextData"].workPost;
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