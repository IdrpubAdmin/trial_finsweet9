<template>
  <div class="content mpc-content">

    <!--  Content header | 제목  -->
    <div class="content-header">
      <h3 class="tit-h2">View our projects</h3>
      <div class="icon-link">
        <router-link to="/work" class="lb-txt-2">View More</router-link>
      </div>
    </div>
    <!--  Content header | 제목  -->
    <!--  Content body | 본문   -->
    <section>
      <ul class="mpc-list">
        <li class="list-item" v-for="item in mpcData" :key="item.id">
          <div class="mpc-item">
            <div class="txt-box">
              <p class="tit-h6">
                {{ item.tit }}
              </p>
              <p class="txt-md mpc-desc">
                {{ item.txt }}
              </p>
              <div class="icon-link y">
                <router-link to="/work" class="lb-txt-2">View project</router-link>
              </div>
            </div>
            <div class="img-box">
              <img :src="path+item.img" :alt="item.tit">
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!--   //content body | 본문   -->
  </div>
</template>

<script>
module.exports = {
  name: "MainProjContent",
  computed: {
    mpcData() {
      return this.$store.getters["ArticleData"].mpcData.slice(0, 3);
    },
    path() {
      return this.$store.state.path.img
    }
  }
}
</script>