<template>
  <!-- content | benefit List 컴포넌트 -->
  <div class="content-bg-wrap bnf-comp ty02">
    <div class="content">
      <!-- content header | 제목 -->
      <div class="content-header">
        <h3 class="tit-h2">{{ tit }}</h3>
      </div>
      <!-- //content header | 제목 -->
      <!-- content body | 본문 -->
      <!--  Features List    -->
      <features-list :article-data="bnfData"></features-list>
      <!--  //Features List    -->
      <!--   user-list Component   -->
      <user-list></user-list>
      <!--   //user-list Component   -->
      <!-- //content body | 본문 -->
    </div>
  </div>
  <!-- //content | benefit List 컴포넌트 -->
</template>

<script>
module.exports = {
  name: "BenefitsContent",
  props: {
    tit: String,
  },
  computed: {
    bnfData() {
      return this.$store.getters["ArticleData"].bnfData
    }
  },
  components: {
    FeaturesList,
    UserList,
  }
}
</script>