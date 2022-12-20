<template>
  <!-- content | main-banner 컴포넌트 -->
  <div class="content-bg-wrap">
    <div class="main-banner">

      <div class="swiper main-bis-swiper">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="item in MainBannerData" :key="item.id">
            <div class="item-wrap content">
            <!--   banner text   -->
              <div class="banner-txt">
                <h3 class="tit-h1">
                  {{ item.tit }}
                </h3>
                <p class="txt-md">
                  {{ item.txt }}
                </p>
                <div class="btn-wrap">
                  <router-link :to="item.btn1Path" class="btn-ty01">
                    {{ item.btn1Txt }}
                  </router-link>
                  <template v-if="item.btn2">
                    <div class="icon-link w">
                      <router-link :to="item.btn2Path" class="lb-txt-2">
                        {{ item.btn2Txt }}
                      </router-link>
                    </div>
                  </template>

                </div>
              </div>
              <!--   //banner text   -->
              <!--  banner img  -->
              <div class="banner-img" :class="item.img">
              </div>
            </div>
          </li>
          <!--  //banner img  -->
        </ul>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
  <!-- //content | main-banner 컴포넌트 -->

</template>

<script>
module.exports = {
  name: "MainBanner",
  props: {
    item: Object
  },
  computed: {
    MainBannerData() {
      return this.$store.getters["MainBannerData"].MainBannerData
    },
  },
  methods: {},
  mounted() {
    const swiper = new Swiper('.main-bis-swiper', {
      // Optional parameters
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      autoplay: {
        delay: 4000,
      },
    });
  }
}
</script>