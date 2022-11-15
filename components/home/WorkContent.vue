<template>
  <div class="content-bg-wrap grey">
    <div class="content hww-content">
      <!-- content header | 제목 -->
      <div class="content-header">
        <h3 class="tit-h2">How we work</h3>
        <p class="txt-r">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <div class="icon-link b">
          <router-link to="/contact" class="lb-txt-2">Get in touch with us</router-link>
        </div>
      </div>
      <!-- //content header | 제목 -->
      <!--   content body | 본문   -->
      <section>
        <ul class="hww-list">
          <li class="list-item" v-for="item in hwwData" :key="item.id">
            <div class="hww-item">
              <div class="ico-box lb-txt-1">
                {{ item.num }}
              </div>
              <h5 class="tit-h5">{{ item.tit }}</h5>
              <p class="txt-r">{{ item.txt }}</p>
            </div>
          </li>
        </ul>
      </section>
      <!--   //content body | 본문   -->
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "WorkContent",
  computed: {
    hwwData() {
      return this.$store.getters["ArticleData"].hwwData
    }
  }
}
</script>