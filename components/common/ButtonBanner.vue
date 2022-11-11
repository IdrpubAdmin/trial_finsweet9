<template>
    <div class="content">
        <section class="banner btn-banner">
            <h3 class="tit-h2">{{BannerData.title}}</h3>
            <p class="txt-md">{{BannerData.txt}}</p>
            <div class="btn-area">
                <router-link :to="BannerData.path" class="btn-ty01">Contact Us</router-link>
            </div>
        </section>
    </div>
</template>

<script>
module.exports = {
  computed: {
    BannerData() {
      return this.$store.getters["BannerData"].BannerData
    },
  },
}
</script>