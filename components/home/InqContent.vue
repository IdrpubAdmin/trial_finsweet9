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
          <form @submit.prevent="checkForm()" novalidate="true">
            <fieldset>
              <legend class="blind">견적서 요청</legend>

              <label for="name"><span class="blind">name</span></label>
              <input type="text" placeholder="Your Name" v-model="user.name" id="name">

              <label for="email"><span class="blind">email</span></label>
              <input type="email" name="email" placeholder="Email" v-model="user.email" id="email">
              <div class="error-message">{{ errors.email }}</div>

              <label for="url"><span class="blind">url</span></label>
              <input type="text" name="url" placeholder="Paste your Figma design URL" v-model="user.url" id="url" >
              <div class="error-message">{{ errors.url }}</div>

            </fieldset>

            <!-- 22.12.15 : 주석처리 -->
            <!-- <div class="btn-wrap">
              <router-link to="/contact" class="btn-ty01" tag="button" type="submit">
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
        name: '',
        email: '',
        url: '',
      },
      validE: false,
      validU: false,
      errors: [],
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
        // valid는 email안의 valid임
        // email { 
        //    valid : true
        //    error : null
        // }
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
        // url { 
        //    valid : true
        //    error : null
        // }
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
      // 위에 있는 값을 가져와서 data에 넣은거
      this.errors.email = validEmail.error;
      // true나 false를 data값에 넣음 : ex) false가 되면 data안의 validE도 false가 됨
      // url { 
      //    valid : true
      //    error : null
      // }
      if (validEmail.valid) {
      // true일 경우에 true로 바꿔라 
        this.validE = validEmail.valid
      }


      const validUrl = validateUrl(this.user.url)
      this.errors.url = validUrl.error
      if (validUrl.valid) {
        this.validU = validUrl.valid
      } 

      console.log(this.validU)

      // valid가 하나여서 여쪽부터 안넘어감 -> 계속 false인 상태
      // 둘다 만족해야하니까 하나만 false되면 안됨
      if (this.validE && this.validU) {
        this.$store.commit('UserDadaLoaded', this.user);
        router.push('/contact')
      }

    }
  }
}
</script>