<template>
    <div class="content work-content">
        <ul class="category-nav">
            <li v-for="item in workCategory" :key="item.id" class="ctgy-item" :class="{'active':item.active}" @click="sort(item)">
              <button class="lb-txt-1">{{item.title}}</button>
            </li>
        </ul>
        <article-type :article-data="articleSort"></article-type>
    </div>
</template>

<script>
module.exports = {
  data() {
    return {
      articleSort : {}
    }
  },
  components: {
    ArticleType,
  },
  computed : {
    articleData() {
      return this.$store.getters["ArticleData"].workArticle;
    },
    workCategory() {
      return this.$store.getters["CategoryData"].workCategory;
    },
  },
  created() {
    this.articleSort = {...this.articleData}
  },
  methods: {
    sort(payload){
      if(payload.key === "all"){
        this.articleSort = {...this.articleData}
      }else {
        this.articleSort.data = []
        for(let i=0; i<this.articleData.data.length; i++){
          if(this.articleData.data[i].key === payload.key){
            this.articleSort.data.push(this.articleData.data[i])
          } 
        }
      }
      this.$store.commit('CategoryData/ctgyActive', payload)
    },
  },
}
</script>