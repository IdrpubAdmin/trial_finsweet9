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
          <a href="#none" class="btn-ty01">
            {{ bannerCont.btn1Txt }}
          </a>
          <template v-if="bannerCont.btn2">
            <div class="icon-link w">
              <a href="#none" class="lb-txt-2">
                {{ bannerCont.btn2Txt }}
              </a>
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