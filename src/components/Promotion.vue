<template>
    <section class="panel">
      <h1 class="panel-heading title">个人小作品</h1>
      <ul class="panel-body list">
        <li><a href="http://blog.csdn.net\ali1995" target="_blank">ALI博客</a></li>
        <li><a href="http://www.alispace0.com/canvas" target="_blank">画板小程序</a></li>
        <li><a href="http://www.alispace0.com/react-slider" target="_blank">react轮播图</a></li>
        <li><a href="http://www.alispace0.com/pintu" target="_blank">pintu小程序</a></li>
        <li><a href="http://v2ex.alispace0.com/v2ex/dist" target="_blank">v2ex克隆项目</a></li>
      </ul>
    </section>
</template>

<script>
    export default {
        name: 'promotion',
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

