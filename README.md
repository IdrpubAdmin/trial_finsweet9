# trial_finsweet9

------

## 퍼블리싱 작업환경

- gulp Task Tool 사용 : dev > gulpfile.js 참조
- Vue, Vue-router, Vuex 사용

## 퍼블리싱 작업내용

- style.css 구조
```

    // abstracts
    @import
    "utils/mixin",
    "utils/variables";
    
    // base
    @import
    "base/normalize",
    "base/reset",
    "base/fonts";
    
    // layout
    @import
    "layout/common",
    "layout/layout",
    "layout/header",
    "layout/footer",
    "layout/banner";
    
    // pages
    @import
    "pages/about",
    "pages/blog",
    "pages/contact",
    "pages/features",
    "pages/home",
    "pages/pricing",
    "pages/work",
    "pages/promotion";
    
```
- 기본폰트 : Poppins, sans-serif
- mediaQuery 분기사이즈(글로벌사이즈 기준)

  - mobile : ~ 640px
  - 
