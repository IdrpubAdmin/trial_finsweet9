<template>
    <section :class="'layout-'+articleData.type">
        <article v-for="list in articleData.data" :key="list.id">
            <img src="../assets/images/blog01.png" alt="img">
            <div class="text">
                <p>{{list.date}}</p>
                <p>{{list.title}}</p>
                <p>{{list.txt}}</p>
                <div v-if="list.link === true"><router-link to="/">Read More</router-link></div>
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