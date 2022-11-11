<template>
  <div class="content-bg-wrap inq-content-wrap">
    <div class="content inq-content">

      <!--  Content header | 제목  -->
      <div class="content-header">
        <h3 class="tit-h2">Building stellar websites for early startups</h3>
        <p class="txt-r">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua ut enim.
        </p>
      </div>
      <!--  Content header | 제목  -->
      <!--  Content body | 본문   -->
      <section class="inq-section">
        <div class="txt-box">
          <p class="tit-h4">Send inquiry</p>
          <p class="txt-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.</p>
        </div>
        <div class="input-box">
          <form>
            <fieldset>
              <legend class="blind">견적서 요청</legend>
              <input type="text" placeholder="Your Name">
              <input type="email" placeholder="Email">
              <input type="text" placeholder="Paste your Figma design URL">
            </fieldset>
            <div class="btn-wrap">
              <router-link to="/privacy" class="btn-ty01">
                Send an Inquiry
              </router-link>
            </div>
          </form>
          <div class="icon-link w">
            <router-link to="/contact" class="lb-txt-2">
              Get in touch with us
            </router-link>
          </div>
        </div>
      </section>
      <!--   //content body | 본문   -->

    </div>
  </div>
</template>

<script>
module.exports = {
  name: "inqContent",
  computed: {
    mpcData() {
      return this.$store.getters["ArticleData"].mpcData.slice(0, 3);
    },
    path() {
      return this.$store.state.path.img
    }
  }
}
</script>