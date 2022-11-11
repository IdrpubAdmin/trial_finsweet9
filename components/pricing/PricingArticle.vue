<template>
    <div class="content our-price-content">
        <div class="content-header">
            <h3 class="tit-h2">Our Pricing Plans</h3>
            <p class="txt-md">When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
        </div>
        <section class="plan-list">
            <article class="plan-item" v-for="item in planData" :key="item.id" :class="{'plan-point': item.type === 'ty01'}">
                <div class="text-wrap">
                <div class="plan-text">
                    <p class="plan-price tit-h3">$<span>{{item.price}}</span><span class="sticker txt-r">{{item.sticker}}</span></p>
                    <h5 class="tit-h6">{{item.title}}</h5>
                    <p class="txt-md">{{item.txt}}</p>
                </div>
                <ul class="plan-detail-list">
                    <li class="plan-detail-item" v-for="planList in item.planList" :key="planList.id" :class="{'disable': planList.type}">
                        <p class="txt-r">{{planList.item}}</p>
                    </li>
                </ul>
                <div class="btn-area">
                    <router-link to="/contact" :class="'btn-' + item.type">{{item.btnTxt}}</router-link>
                </div>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
module.exports = {
  computed: {
    planData() {
      return this.$store.getters["ArticleData"].planData
    }
  },
}
</script>