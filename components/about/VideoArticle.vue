<template>
  <section :class="'layout-'+articleData.type">
    <article v-for="list in articleData.data" :key="list.id">
      <div class="art-media">
        <div class="media-box">
          <iframe :src="list.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="art-tet">
        <template v-if="list.subTit">
          <p class="lb-txt-1">{{ list.subTit }}</p>
        </template>
        <template v-else></template>
        <h6 class="tit-h6">{{ list.title }}</h6>
        <p class="txt-r">{{ list.txt }}</p>
        <template v-if="articleData.link === true">
          <div class="txt-md icon-link">
            <router-link :to="list.path">{{ list.linkTxt }}</router-link>
          </div>
        </template>
        <template v-else></template>
      </div>
    </article>
  </section>
</template>

<script>
module.exports = {
  props: {
    articleData: Object
  }
}
</script>