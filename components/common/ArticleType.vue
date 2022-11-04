<template>
    <section :class="'layout-'+articleData.type">
        <article v-for="list in articleData.data" :key="list.id">
            <img src="../assets/images/blog01.png" alt="img">
            <div class="art-tet">
                <p v-if="list.subTit" class="txt-md">{{list.subTit}}</p>
                <h6 class="tit-h6">{{list.title}}</h6>
                <p class="txt-r">{{list.txt}}</p>
                <div v-if="list.link === true" class="txt-md icon-link b">
                  <router-link :to="list.path">Read More</router-link>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
module.exports = {
  computed: {
    articleData() {
      return this.$store.getters["ArticleData"].articleData;
    },
  },
}
</script>