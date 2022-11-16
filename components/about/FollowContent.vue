<template>
  <div class="content follow-content">
    <div class="content-header">
      <h3 class="tit-h2">
        The process we follow
      </h3>
    </div>
    <section>
      <ul class="follow-list">
        <!--    process list    -->
        <li class="list-item" v-for="item in followData" :key="item.id">
          <article class="follow-item">
            <div class="dia-box">
              <div class="dia-dot"></div>
              <div class="dia-line"></div>
            </div>
            <div class="txt-box">
              <p class="tit-h6">
                {{ item.tit }}
              </p>
              <p class="txt-r">
                {{ item.txt }}
              </p>
            </div>
          </article>
        </li>
        <!--    //process list    -->
      </ul>
    </section>
  </div>
</template>

<script>
module.exports = {
  name: "FollowContent",
  computed: {
    followData() {
      return this.$store.getters["ArticleData"].followData
    }
  }

}
</script>