<template>
  <!--   Finsweet Users List   -->
  <section class="user-list-wrap">
    <div class="txt-box">
      <p class="tit-h1">100,000+</p>
      <p class="txt-r">finsweet Users</p>
    </div>
    <div class="user-logo-box">
      <ul class="user-list">
        <li class="user-item" v-for="item in userListData" :key="item.id">
          <img :src="`../assets/images/${item.url}.png`" :alt="item.name">
        </li>
      </ul>
    </div>
  </section>
  <!--   //Finsweet Users List   -->
</template>

<script>
module.exports = {
  name: "UserList",
  computed: {
    userListData() {
      return this.$store.getters["ArticleData"].userListData
    }
  }
}
</script>