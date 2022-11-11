<template>
  <!-- content | main-banner 컴포넌트 -->
  <div class="content-bg-wrap tint-blue">
    <div class="content main-banner">
      <!--   banner text   -->
      <div class="banner-txt">
        <h3 class="tit-h1">
          {{ bannerCont.tit }}
        </h3>
        <p class="txt-md">
          {{ bannerCont.txt }}
        </p>
        <div class="btn-wrap">
          <router-link :to="bannerCont.btn1Path" class="btn-ty01">
            {{ bannerCont.btn1Txt }}
          </router-link>
          <template v-if="bannerCont.btn2">
            <div class="icon-link w">
              <router-link :to="bannerCont.btn2Path" class="lb-txt-2">
                {{ bannerCont.btn2Txt }}
              </router-link>
            </div>
          </template>

        </div>
      </div>
      <!--   //banner text   -->
      <!--  banner img  -->
      <div class="banner-img" :class="bannerCont.img">
      </div>
    </div>
    <!--  //banner img  -->
  </div>
  <!-- //content | main-banner 컴포넌트 -->

</template>

<script>
module.exports = {
  name: "MainBanner",
  props: {
    bannerCont: Object
  },
  computed: {},
  methods: {}
}
</script>