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
          <form @submit="checkForm.prevent">
            <fieldset>
              <legend class="blind">견적서 요청</legend>

              <label for="name">이름</label>
              <input type="text" placeholder="Your Name" v-model="form.name">

              <label for="email">이메일<label>
              <input type="email" placeholder="Email" v-model="form.email">

              <label for="figma">figma url<label>
              <input type="text" placeholder="Paste your Figma design URL" v-model="form.url">

              <div class="error-message">
                {{ error }}
              </div>

            </fieldset>
            <div class="btn-wrap">
              <router-link to="/contact" class="btn-ty01" @click.native="check">
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
  data: {
    form: {
      name: '',
      email: '',
      url: '',
    },
    errors: [],
  },
  computed: {
    mpcData() {
      return this.$store.getters["ArticleData"].mpcData.slice(0, 3);
    },
    path() {
      return this.$store.state.path.img
    }
  },
  methods: {
      // check(e) {
      //   const e_RegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      //   const objEmail = document.getElementById("email")
      //   const error = document.querySelector(".error-message")

      //   if(!e_RegExp.test(objEmail.value)){
            
      //       error.textContent ="Invalid email address or Figma URL"
      //       return false;
      //   }
      // },
    checkForm(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.email) {
        this.errors.push("이름은 필수입니다.");
      }
      if (!this.figma) {
        this.errors.push("이메일은 필수입니다.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("이메일 형식을 확인하세요.");
      }
      if (!this.errors.length) return true;
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}
</script>