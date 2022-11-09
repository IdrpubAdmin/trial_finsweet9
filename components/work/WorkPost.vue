<template>
    <div class="work-post-contents">
        <div class="content post-main">
            <section>
                <div class="post-texts">
                    <p class="tit-h6">Web design and development</p>
                    <h3 class="tit-h2">Finsweet Design case studies</h3>
                    <p class="txt-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse.
                    </p>
                </div>
                <img :src="'../assets/images/' + postData.src + '.png'" alt="article img">
                <ul class="post-summary">
                    <li>
                        <p class="txt-md">Client</p>
                        <p class="tit-h6">facebook.com</p>
                    </li>
                    <li>
                        <p class="txt-md">Service</p>
                        <p class="tit-h6">Product Design</p>
                    </li>
                    <li>
                        <p class="txt-md">Deliverable</p>
                        <p class="tit-h6">UI Screens, UX Flow & Prototype</p>
                    </li>
                </ul>
            </section>
        </div>
        <div class="content post-info">
            <section class="post-detail-1">
                <div class="info-texts">
                    <h5 class="tit-h3">About the project</h5>
                    <p class="txt-r">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <ul class="info-list">
                    <li><p class="txt-r">Lorem ipsum dolor sit amet, consectetur adipiscing</p></li>
                    <li><p class="txt-r">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p></li>
                    <li><p class="txt-r">Duis aute irure dolor in reprehenderit in voluptate velit esse</p></li>
                    <li><p class="txt-r">Excepteur sint occaecat cupidatat non proident, sunt in culpa</p></li>
                </ul>
                <img src="../assets/images/work_post001.png" alt="article img">
            </section>
            <section class="post-detail-2">
                <div class="info-texts">
                    <h5 class="tit-h3">How we do it</h5>
                    <p class="txt-r">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <ul class="info-list">
                    <li><p class="txt-r">Lorem ipsum dolor sit amet, consectetur adipiscing</p></li>
                    <li><p class="txt-r">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p></li>
                    <li><p class="txt-r">Duis aute irure dolor in reprehenderit in voluptate velit esse</p></li>
                    <li><p class="txt-r">Excepteur sint occaecat cupidatat non proident, sunt in culpa</p></li>
                </ul>
                <ul class="category-list">
                    <li class="ctgy-item"><p class="lb-txt-1 active">Keywords</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">Design</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">UI/UX</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">Wireframing</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">Branding</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">Development</p></li>
                    <li class="ctgy-item"><p class="lb-txt-1">webflow</p></li>
                </ul>
            </section>
        </div>
        <button-banner></button-banner>
    </div>
</template>

<script>
module.exports = {
  components: {
    ButtonBanner,
  },
  props: {
    id: Number
  },
  computed: {
    postData() {
      let dataBase = this.$store.getters["PostData"].PostData;
      for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].id == this.$route.params.id) {
          return dataBase[i];
        }
      }
    }
  },
}
</script>