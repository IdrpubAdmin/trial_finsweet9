<template>
  <!-- content | main-banner 컴포넌트 -->
  <div class="content-bg-wrap tint-blue">
    <div class="content main-banner">

      <div class="swiper main-bis-swiper">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
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
          </li>
          <!--  //banner img  -->
          </ul>
          <!--    swiper navigation button     -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <!--    //swiper navigation button     -->
        </div>
      </div> 
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
  methods: {},
  mounted() {
    const swiper = new Swiper('.main-bis-swiper', {
      // Optional parameters
      slidesPerView: 1,
      loop: true,
      pagination: false,
      autoplay: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          autoplay: false,
          loop: false,
        }
      }
    });
  }
}
</script>