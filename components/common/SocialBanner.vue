<template>
    <div class="content">
        <section class="banner sns-banner">
            <p class="txt-md">What we created</p>
            <h3 class="tit-h2">Our Work Portfolio</h3>
            <p class="txt-md">
                We help teams create great digital products by 
                providing them with tools and technology to make 
                the design-to-code process universally accessible.
            </p>
            <div class="sns-list-wrap">
                <ul class="sns-list ty2">
                  <li v-for="item in snsData" class="sns-item" :key="item.id">
                    <router-link to="/" :title="`${ item.title } 이동`" :class="`${ item.title }`"></router-link>
                  </li>
                </ul>
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
    snsData() {
      return this.$store.getters["NavigationData"].snsData;
    },
  },
}
</script>