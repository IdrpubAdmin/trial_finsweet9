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
          <form @submit.prevent="checkForm()" novalidate="true" ref="form">
            <fieldset>
              <legend class="blind">견적서 요청</legend>

              <!-- <label for="name">이름</label> -->
              <input type="text" placeholder="Your Name">

              <!-- <label for="email">이메일<label> -->
              <input type="email" name="email" placeholder="Email" id="email" v-model="user.email">
              <div class="error-message">{{ errors.email }}</div>

              <!-- <label for="figma">figma url<label> -->
              <input type="text" name="url" placeholder="Paste your Figma design URL" id="url" v-model="user.url">
              <div class="error-message">{{ errors.url }}</div>

            </fieldset>

            <!-- 22.12.15 : 주석처리 -->
            <!-- <div class="btn-wrap">
              <router-link to="/contact" class="btn-ty01" value="Submit">
                Send an Inquiry
              </router-link>
            </div> -->
            
            <div class="btn-wrap">
              <button class="btn-ty01" type="submit">
                Send an Inquiry
              </button>
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
  data() {
    return {
      user: {
        email: '',
        url: '',
      },
      valid: true,
      errors: [],
      success: false,
    }
  },
  computed: {
    mpcData() {
      return this.$store.getters["ArticleData"].mpcData.slice(0, 3);
    },
    path() {
      return this.$store.state.path.img
    },
  },
  created() {

  },
  methods: {
    checkForm() {

      const validateEmail = email => {
        if (!email.length) {
          return { valid: false, error: "This field is required" };
        }
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
          return { valid: false, error: "Invalid email address" };
        }
        return { valid: true, error: null };
      };

      // https://www.figma.com/file/
      const validateUrl = url => {
        if (!url.length) {
          return { valid: false, error: "This field is required" };
        }
        if (!url.match('d')) {
          return { valid: false, error: "Invalid Figma url" };
        }
        return { valid: true, error: null };
      } 

      this.errors = [];

      const validEmail = validateEmail(this.user.email);
      this.errors.email = validEmail.error;
      if (this.valid) {
        this.valid = validEmail.valid
      }

      const validUrl = validateUrl(this.user.url)
      this.errors.url = validUrl.error
      if (this.valid) {
        this.valid = validUrl.valid
      }

      // 작동댐 근데 다시 안댐
      if (this.valid) {
        router.push('/contact')
      }

    }
  }
}
</script>