<template>
  <div class="content-bg-wrap grey">
      <div class="content social-banner-content">
          <section class="banner sns-banner">
              <p class="txt-md">What we created</p>
              <h3 class="tit-h2">Our Work Portfolio</h3>
              <p class="txt-md">
                  We help teams create great digital products by 
                  providing them with tools and technology to make 
                  the design-to-code process universally accessible.
              </p>
            <!--  sns list  -->
            <sns-list :sns-data="snsData"></sns-list>
            <!--  //sns list  -->
          </section>
      </div>
  </div>
</template>

<script>
module.exports = {
  computed: {
    BannerData() {
      return this.$store.getters["BannerData"].BannerData
    },
    snsData() {
      return this.$store.getters["NavigationData"].snsData02;
    },
  },
  components: {
    SnsList
  }
}
</script>