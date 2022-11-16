<template>
  <div class="pricing-contents">
    <pricing-article></pricing-article>
    <faq-content></faq-content>
  </div>
</template>

<script>
module.exports = {
  components: {
    PricingArticle,
    FaqContent,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>