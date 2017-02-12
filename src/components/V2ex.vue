<template>
    <div class="panel">
      <dl>
        <dt><strong>V2EX = way to explore</strong></dt>
        <dd>V2EX是一个关于分享和探索的地方</dd>
      </dl>
      <div>
        <router-link class="btn btn-default" :to="{name:'register'}">现在注册</router-link>
        <p>
          已注册用户请<router-link class="login" :to="{name:'login'}">登录</router-link>
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'v2ex',
        data () {
            return {}
        },
        mounted: function () {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  dl{
    padding: 10px;
    text-align: left;
    line-height: 32px;
    border-bottom: #ccc solid 1px;
  }
  dl dt{
    font-weight: 900;
    color: black;
    font-family: "黑体";
  }
  dl dd{
    color: #ccc;
    font-size: 14px;
  }
  .panel > div{
    margin-top: 16px;
    text-align: center;
  }
  .login{
    margin-left: 12px;
    color: #a9a9a9;
  }
  p{
    margin: 16px 0;
  }
</style>
