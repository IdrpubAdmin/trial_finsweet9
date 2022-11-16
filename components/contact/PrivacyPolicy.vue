<template>
    <div class="privacy-contents">
        <div class="content privacy-content">
            <div class="content-header">
                <h3 class="tit-h2">Privacy Policy</h3>
                <p class="txt-md">When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your </p>
            </div>
            <section class="privacy-info">
                <text-article 
                    v-for="textData in textData" 
                    :key="textData.id" 
                    :text-data="textData"
                ></text-article>    
            </section>
        </div>
    </div>
</template>

<script>
module.exports = {
  components: {
    TextArticle,
  },
  computed: {
    textData() {
      return this.$store.getters["TextData"].privacyData;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>