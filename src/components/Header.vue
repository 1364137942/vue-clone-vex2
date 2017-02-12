<template>
  <nav class="navbar nav-inverse" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">导航条</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <h2><router-link class="title" :to="{name: 'index'}">V2EX</router-link></h2>
      </div>
      <div class="collapse navbar-collapse" style="float: right">
        <ul class="nav navbar-nav">
          <li class="activer"><router-link :to="{name: 'index'}">首页</router-link></li>
          <li><router-link :to="{name:'register'}">注册</router-link></li>
          <li><router-link :to="{name:'login'}">登录</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: 900;
  font-size: 52px;
}
  nav{
    background-color: #fff;
    border-radius: 0;
  }
  .icon-bar{
    background-color: #ccc;
  }
  .title:hover {
    text-decoration: none;
  }
</style>
