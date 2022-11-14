<template>
  <div class="content-bg-wrap grey">
    <div class="content team-content">
      <div class="content-header">
        <h3 class="tit-h2">Meet our team</h3>
      </div>
      <section>
        <ul class="team-list">
          <li class="list-item" v-for="item in teamData" :key="item.id">
            <article class="team-item">
              <div class="img-box">
                <div class="img-layer">
                  <!--  sns list  -->
                  <sns-list :sns-data="linkData"></sns-list>
                  <!--  //sns list  -->
                </div>
                <div class="img-wrap">
                  <img :src="path+item.img" :alt="item.name">
                </div>
              </div>
              <div class="txt-box">
                <p class="prf-name tit-h6">{{ item.name }}</p>
                <p class="prf-tit txt-r">{{ item.tit }}</p>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "TeamContent",
  computed: {
    teamData() {
      return this.$store.getters["ArticleData"].teamData
    },
    path() {
      return this.$store.state.path.img
    },
    linkData() {
      return this.$store.getters["NavigationData/linkData"]
    }
  },
  components: {
    SnsList
  }
}
</script>