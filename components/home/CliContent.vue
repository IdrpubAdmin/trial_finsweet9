<template>
  <div class="content-bg-wrap grey">
    <div class="content cli-content">
      <!--  Content header | 제목  -->
      <div class="content-header">
        <h3 class="tit-h3">What our clients say about us</h3>
        <p class="txt-r">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
      </div>
      <!--  Content header | 제목  -->
      <!--  Content body | 본문   -->
      <section>
        <!--    swiper    -->
        <div class="swiper cli-swiper">
          <ul class="cli-list swiper-wrapper">
            <!--      swiper-slide      -->
            <li class="list-item swiper-slide" v-for="item in cliData" :key="item.id">
              <div class="cli-opi-item">
                <div class="txt-box">
                  <p class="tit-h5">{{ item.txt }}</p>
                </div>
                <div class="prf-box">
                  <div class="prf-img">
                    <img :src="path+item.img" :alt="item.name">
                  </div>
                  <div class="prf-txt">
                    <div class="prf-name lb-txt-1">
                      {{ item.name }}
                    </div>
                    <div class="prf-title">
                      {{ item.tit }}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!--      //swiper-slide      -->
          </ul>
          <!--    swiper navigation button     -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <!--    //swiper navigation button     -->
        </div>
        <!--    //swiper    -->
      </section>
      <!--  // Content body | 본문   -->
    </div>
  </div>
</template>

<script>


module.exports = {
  name: "CliContent",
  components: {},
  computed: {
    cliData() {
      return this.$store.getters["ArticleData"].cliData
    },
    path() {
      return this.$store.state.path.img
    }
  },
  mounted() {
    const swiper = new Swiper('.cli-swiper', {
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