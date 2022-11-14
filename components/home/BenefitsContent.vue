<template>
  <!-- content | benefit List 컴포넌트 -->
  <div class="content-bg-wrap bnf-comp">
    <div class="content">
      <!-- content header | 제목 -->
      <div class="content-header">
        <h2 class="lb-txt-2">Features</h2>
        <h3 class="tit-h2">Design that solves problems, one product at a time</h3>
      </div>
      <!-- //content header | 제목 -->
      <!-- content body | 본문 -->
      <!--  Features List Component   -->
      <features-list :article-data="featData"></features-list>
      <!--  //Features List Component    -->
      <!--   user-list Component   -->
      <user-list v-if="false"></user-list>
      <!--   //user-list Component   -->
      <!-- //content body | 본문 -->
    </div>
  </div>
  <!-- //content | benefit List 컴포넌트 -->
</template>

<script>
module.exports = {
  name: "BenefitsContent",
  computed: {
    featData() {
      return this.$store.getters["ArticleData"].featData
    }
  },
  components: {
    FeaturesList,
    UserList
  },
}
</script>