<template>
  <!-- content | benefit List 컴포넌트 -->
  <div class="content-bg-wrap bnf-ty">
    <div class="content">
      <!-- content header | 제목 -->
      <div class="content-header">
        <h2 class="lb-txt-2">Features</h2>
        <h3 class="tit-h2">Design that solves problems, one product at a time</h3>
      </div>
      <!-- //content header | 제목 -->
      <!-- content body | 본문 -->
      <!--  Features List    -->
      <section class="ico-list-wrap">
        <ul class="ico-list-ty">
          <!--    ico list item      -->
          <li class="ico-item" v-for="item in featData" :key="item.id">
            <div class="ico-box" :class="item.icoTy"></div>
            <div class="txt-box">
              <p class="tit-h6">{{ item.tit }}</p>
              <p class="txt-r">{{ item.txt }} </p>
            </div>
          </li>
          <!--    //ico list item      -->
        </ul>
      </section>
      <!--  //Features List    -->
      <template v-if="false">
        <!--   Finsweet Users List   -->
        <section class="user-list-wrap">
          <div class="txt-box">
            <p class="tit-h1">100,000+</p>
            <p class="txt-r">finsweet Users</p>
          </div>
          <div class="user-logo-box">
            <ul class="user-list">
              <li class="user-item">
                <img src="../assets/images/img_logo_user1.png" alt="user1">
              </li>
              <li class="user-item">
                <img src="../assets/images/img_logo_user2.png" alt="user1">
              </li>
              <li class="user-item">
                <img src="../assets/images/img_logo_user3.png" alt="user1">
              </li>
              <li class="user-item">
                <img src="../assets/images/img_logo_user4.png" alt="user1">
              </li>
              <li class="user-item">
                <img src="../assets/images/img_logo_user5.png" alt="user1">
              </li>
            </ul>
          </div>
        </section>
        <!--   //Finsweet Users List   -->
      </template>
      <!-- //content body | 본문 -->
    </div>
  </div>
  <!-- //content | benefit List 컴포넌트 -->
</template>

<script>
module.exports = {
  name: "BenefitsList",
  computed: {
    featData() {
      return this.$store.getters["ArticleData"].featData
    }
  }
}
</script>