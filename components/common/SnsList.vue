<template>
  <div class="sns-list-wrap">
    <ul class="sns-list" :class="snsData.type">
      <li v-for="item in snsData.data" class="sns-item" :key="item.id">
        <a :href="item.path" :title="`${ item.title } 이동`" :class="`${ item.title }`" target="_blank">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  name: "SnsList",
  props: {
    snsData: Object
  }
}
</script>