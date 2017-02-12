<template>
    <section class="panel">
      <h1 class="panel-heading title">推广</h1>
      <ul class="panel-body list">
        <li><a href="http://blog.csdn.net\ali1995" target="_blank">ALI博客</a></li>
        <li><a href="htt://blog.csdn.net\ali1995" target="_blank">ALI博客</a></li>
      </ul>
    </section>
</template>

<script>
    export default {
        name: 'promotion',
        data () {
            return {}
        },
        mounted: function () {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    text-align: left;
    border-bottom: solid #ccc 1px;
  }
  .list{
    text-align: left;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  ul li{
    line-height: 24px;
    height: 24px;
  }
</style>

