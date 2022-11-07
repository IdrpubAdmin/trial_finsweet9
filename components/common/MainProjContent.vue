<template>
  <div class="content mpc-content">

    <!--  Content header | 제목  -->
    <div class="content-header">
      <h3 class="tit-h2">View our projects</h3>
      <div class="icon-link">
        <router-link to="/" class="lb-txt-2">View More</router-link>
      </div>
    </div>
    <!--  Content header | 제목  -->
    <!--   content body | 본문   -->
    <section>
      <ul class="mpc-list">
        <li class="list-item">
          <div class="mpc-item">
            <div class="txt-box">
              <p class="tit-h6">
                Workhub office Webflow Webflow Design
              </p>
              <p class="txt-md">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
              </p>
              <div class="icon-link y">
                <router-link to="/" class="lb-txt-2">View project</router-link>
              </div>
            </div>
            <div class="img-box">
              <img src="../assets/images/img_proj_001.png" alt="">
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="mpc-item">
            <div class="txt-box">
              <p class="tit-h6">
                Workhub office Webflow Webflow Design
              </p>
<!--              <p class="txt-md">-->
<!--                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam-->
<!--              </p>-->
              <div class="icon-link y">
                <router-link to="/" class="lb-txt-2">View project</router-link>
              </div>
            </div>
            <div class="img-box">
              <img src="../assets/images/img_proj_002.png" alt="">
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="mpc-item">
            <div class="txt-box">
              <p class="tit-h6">
                Unisaas Website Design
              </p>
<!--              <p class="txt-md">-->
<!--                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam-->
<!--              </p>-->
              <div class="icon-link y">
                <router-link to="/" class="lb-txt-2">View project</router-link>
              </div>
            </div>
            <div class="img-box">
              <img src="../assets/images/img_proj_003.png" alt="">
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!--   //content body | 본문   -->
  </div>
</template>

<script>
module.exports = {
  name: "MainProjContent"
}
</script>