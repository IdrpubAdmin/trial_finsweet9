<template>
    <article class="text-article">
        <h5 class="tit-h3">{{textData.title}}</h5>
        <p class="txt1 txt-r" v-html="textData.txt1"></p>
        <p class="txt2 txt-r" v-if="textData.txt2" v-html="textData.txt2"></p>
        <ul class="info-list" v-if="textData.list">
            <li class="info-item" v-for="list in textData.list" :key="list.id"><p class="txt-r">{{list.txt}}</p></li>
        </ul>
        <p class="txt2 txt-r" v-if="textData.txt3" v-html="textData.txt3"></p>
    </article>               
</template>

<script>
module.exports = {
  props: {
    textData: Object
  },
}
</script>