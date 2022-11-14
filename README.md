# trial_finsweet9

------

## 퍼블리싱 산출물 리스트

- 프로젝트 일정: [구글문서](https://docs.google.com/spreadsheets/d/1mh2SzZfh0xiaZTmFxeQMdffucxeJnq50qPq6LXha1TQ/edit?pli=1#gid=677785488)
- 마크업리스트: [구글문서](https://docs.google.com/spreadsheets/d/1mh2SzZfh0xiaZTmFxeQMdffucxeJnq50qPq6LXha1TQ/edit?pli=1#gid=0)
- Style Guide : [promotion.html](./pages/promotion.html#/)

## 지원브라우저
- Microsoft Edge, Mozilla FireFox, google Chrome, Apple Safari(최신버전 기준)

## 퍼블리싱 작업환경

- gulp Task Tool 사용 : dev > gulpfile.js 참조
- Vue, Vue-router, Vuex 사용 : components > app.js, router.js, store.js 참조

## 퍼블리싱 작업내용
- 기본폰트 : Poppins, sans-serif
- mediaquery 분기사이즈(글로벌사이즈 기준)

    - Mobile : ~ 640px
    - Tablet : 641px ~ 1023px
    - PC : 1024px ~ 
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
- 기본 layout 마크업 구조
```
body
    #wrapper
        #header : header
        #footer : footer
        #container : 본문
            .content-header : 구역 header
            .content : 구역 본문
                section
                    article
```
- 파일 위치 : 마크업 리스트 참조
- 컴포넌트별 역할
```
common
├    ArticleType : 포스트 형식의 사진과 설명이 있는 공통 컴포넌트
├    BenefitsContent02 : Benefits of working with us 관련 공통 컴포넌트
├    ButtonBanner : 중앙 링크 버튼이 있는 베너 컴포넌트
├    FaqContent : FAQ 공통 컴포넌트
├    FeaturesList : BenefitsContent 내부 아이콘이 있는 박스형 리스트를 출력하는 공통 컴포넌트
├    FooterMain : Footer 공통 컴포넌트
├    HeaderMain : Header 공통 컴포넌트
├    SocialBanner : SNS 링크가 포함된 베너 컴포넌트
├    UserList : BnenfitsContent 내부 고객사 시그니처 리스트를 출력하는 공통 컴포넌트
   
home
├     FinsweetMain: Home Main 컴포넌트
      ├   WorkContent : How we work Content 본문
      ├   MainProjContent : View Our Project Content 본문
      ├   BenefitsContent : Features Content 본문
      ├   CliContent : What our clients say Content 본문
      ├   InqContent : Send Inquiry Content 본문
      └   BlgContent : Our Blog Content 본문

about
├    AboutMain : About Main 컴포넌트
     ├    AboutUsContent : About Us Content 본문
     ├    WhoWeContent : Who we are Content 본문
     ├    FollowContent : Process we Follow Content 본문
     ├    MissionContent : Our Mission, Our Vision Content 본문
          └   VideoArticle : MissionContent Content 본문
     └   TeamContent : Meat our team Content 본문

features
├     FeaturesMain : Features Main 컴포넌트
      └   FeaturesContent : FeaturesMain의 Content 본문

pricing
├     PricingMain : Pricing의 메인 컴포넌트
      └   PricingArticle : PricingMain의 Content 본문 

blog
├     BlogMain : Blog 메인 컴포넌트
└     PlogPost : Blog post 메인 컴포넌트

contact
├     ContactMain : Contact 메인 컴포넌트
      └  PrivacyPolicy : Form 작성 후 제출 시 이동되는 개인정보처리동의 컴포넌트
    
work
├     WorkMain : work 메인 컴포넌트
      └    WorkArticle : WorkMain의 content 본문
└     WorkPost : work post 메인 컴포넌트
```
- 네이밍 가이드
  - 컴포넌트명 : 파스칼 케이스 사용 (TestVariableOne) 
  - 파일명 : 스네이크 케이스 사용 (test_variable_one)
  - 클래스명 : 케밥 케이스 사용 (test-variable-one)

## 퍼블리싱 산출물 디렉토리 구조

```
/root
├ /dev : 퍼블리셔 전용
│　└ /css_dev : 신규 css를 위한 sass 폴더
│　　├ /base : 웹표준, 브라우저 최적화, 웹페이지 기본 세팅 관련 scss
│　　├ /layout : layout 및 공통 클래스 요소에 관련한 scss
│　　├ /pages : 페이지별 세부 scss
│　　├ /utils : sass변수, mixin 선언 scss
│　　└ styles.scss : css 산출물 생성을 위한 gulp-sass용 scss
│
│　└ /node_modules : node.js 실행 관련 파일
│
│　└ /page_dev : gulp-html-extend 구동용 자료(퍼블 전용)
│
│　└ /js_dev : 페이지 동작 관련 js 생성 자료(퍼블 전용) 
│
│　├ gulpfile.js : gulp 작동을 위한 스크립트
│　├ layout_template.html : gulp-html-extend용 html 파일(퍼블 전용)
│　├ pakage.json : node.js 실행 관련 파일
│　└ pakage-lock.json : node.js 실행 관련 파일
│
│
├ /static : 퍼블 static 소스
│　├ /css : scss파일로 렌더링이 완료된 신규 css
│　├ /fonts : 신규 font
│　├ /images : 신규 images
      └ /ico : icon 등 디자인 요소 img 파일 모음
│　└ /js : 페이지 동작 실행 관련 신규 js
│
│
├ /components : Vue.js sfc 모음
│　├ app.js : Vue 실행 세팅 파일
│　├ router.js : Vue-router 실행 세팅 파일
│　└ store.js : Vuex 실행 세팅 파일
│
│
├ /pages : html 산출물
│
├ index.html : 퍼블 마크업 리스트 html
└ README.md : 퍼블리싱 산출물 index

```
