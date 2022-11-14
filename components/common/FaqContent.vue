<template>
  <div class="content faq-content">
    <div class="content-header">
      <h3 class="tit-h3">Frequently asked questions</h3>
      <p class="lb-txt-1">Contact us For More Info</p>
    </div>
    <section>
      <ul class="faq-list">
        <li class="faq-item" 
          v-for="(faq, i) in faqData" 
          :key="faq.num" 
          @click="slideOpen(i)" 
          :class="{'slide-on':faq.open}"
        >
          <div class="faq-text">
            <div class="item-tit">
                <span class="tit-h6">{{faq.num}}</span>
                <p class="tit-h6">{{faq.title}}</p>
                <div class="faq-btn">
                  <span class="st-ln-1"></span>
                  <span class="st-ln-2"></span>
                </div>
            </div>
            <p class="hide-txt lb-txt-1">
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
module.exports = {
  computed: {
    faqData() {
      return this.$store.getters["ArticleData"].faqData;
    },
  },
  methods: {
    slideOpen(payload){
      this.$store.commit('ArticleData/slideOpen', payload)
    },
  },
}
</script>