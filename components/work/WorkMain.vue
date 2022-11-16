<template>
    <div class="work-contents">
        <social-banner></social-banner>
        <work-article></work-article>
        <button-banner></button-banner>
    </div>
</template>

<script>
module.exports = {
  components: {
    SocialBanner,
    ButtonBanner,
    WorkArticle,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>