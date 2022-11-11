<template>
  <!--  Features List    -->
  <section class="ico-list-wrap" :class="articleData.type">
    <ul class="ico-list-ty">
      <!--    ico list item      -->
      <li class="list-item" v-for="item in articleData.data" :key="item.id">
        <div class="ico-item">
          <div class="ico-box" :class="item.icoTy"></div>
          <div class="txt-box">
            <p class="tit-h6">{{ item.tit }}</p>
            <p class="txt-r">{{ item.txt }} </p>
          </div>
        </div>
      </li>
      <!--    //ico list item      -->
    </ul>
  </section>
  <!--  //Features List    -->
</template>

<script>
module.exports = {
  name: "FeaturesList",
  props: {
    articleData: Object,
  }
}
</script>