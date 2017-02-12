<template>
  <section class="panel">
    <div class="panel-heading">
      <ol class="breadcrumb">
        <li><router-link :to="{name:'index'}">v2ex</router-link></li>
        <li class="active">登录</li>
      </ol>
    </div>

    <form class="form-horizontal panel-body">
      <div class="form-group">
        <label for="username" class="col-sm-2 control-label">用户名</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" id="username" placeholder="用户名或邮箱">
        </div>
      </div>
      <div class="form-group">
        <label for="password" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-6">
          <input type="password" class="form-control" id="password">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">登录</button>
          <a href="#" class="forget">我忘记密码了</a>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
    mounted: function () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .breadcrumb {
    margin-bottom: 0;
  }
  .forget {
    font-size: 12px;
    color: #ccc;
    cursor: pointer;
  }
</style>
