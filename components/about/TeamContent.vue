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
                  <div class="sns-list-wrap">
                    <ul class="sns-list">
                      <li v-for="item in linkData" class="sns-item">
                        <router-link to="/" :title="`${ item.title } 이동`" :class="`${ item.title }`">
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <img :src="path+item.img" :alt="item.name">
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
  }
}
</script>