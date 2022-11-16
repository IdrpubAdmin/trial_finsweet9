<template>
    <div class="contact-contents">
        <div class="content contact-content">
            <div class="content-header">
                <h3 class="tit-h2">Contact Us</h3>
                <p class="txt-r">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <section class="contact-section">
              <form>
                <fieldset>
                  <legend class="blind">견적서 요청</legend>
                  <div class="input-wrap">
                    <label class="lb-txt-1" for="">Name</label>
                    <input class="txt-r" type="text" placeholder="Enter your name">
                  </div>
                  <div class="input-wrap">
                    <label class="lb-txt-1" for="">Email</label>
                    <input class="txt-r" type="email" placeholder="Enter your Emial">
                  </div>
                  <div class="input-wrap">
                    <label class="lb-txt-1" for="">Subject</label>
                    <input class="txt-r" type="text" placeholder="Provide context">
                  </div>
                  <div class="input-wrap">
                    <label class="lb-txt-1" for="">Subject</label>
                    <input class="txt-r" type="text" placeholder="Select Subject">
                  </div>
                  <div class="text-input-wrap">
                    <label class="lb-txt-1" for="">Message</label>
                    <textarea class="txt-r" name="" id="" cols="30" rows="10" placeholder="Write your  question here"></textarea>
                  </div>
                </fieldset>
                <div class="btn-area">
                  <router-link to="/privacy" class="btn-ty02">Send Messege</router-link>
                </div>
              </form>
            </section>
        </div>
    </div>
</template>

<script>
module.exports = {
  mounted() {
    window.scrollTo(0, 0);
  },
}
</script>