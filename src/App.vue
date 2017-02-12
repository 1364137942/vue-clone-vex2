<template>
  <div id="app">
    <header-comp></header-comp>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
        <div class="col-sm-3 sider">
          <v2ex-comp></v2ex-comp>
          <promotion-comp></promotion-comp>
          <hotTopic-comp></hotTopic-comp>
        </div>
      </div>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
  import Header from "components/Header.vue";
  import V2ex from "components/V2ex.vue";
  import Promotion from "components/Promotion.vue";
  import HotTopic from "components/HotTopic.vue";
  import Footer from "components/Footer.vue";
export default {
  name: 'app',
  components: {
    "header-comp": Header,
    "v2ex-comp": V2ex,
    "promotion-comp": Promotion,
    "hotTopic-comp": HotTopic,
    "footer-comp": Footer
  },
  mounted: function () {


  }
}
</script>

<style>
  body {
    background-color: #ddd;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
  }
  @media (max-width: 768px) {
    .sider{
      display: none;
    }
  }
</style>
