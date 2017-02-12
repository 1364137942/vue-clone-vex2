<template>
    <section class="panel">
      <div class="panel-heading">
        <ol class="breadcrumb">
          <li><router-link :to="{name:'index'}">v2ex</router-link></li>
          <li class="active">注册</li>
        </ol>
      </div>
      <form class="form-horizontal panel-body">
        <div class="form-group">
          <label for="username" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" id="username">
            <span class="help-block">请使用半角的 a-z 或数字 0-9</span>
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-6">
            <input type="password" class="form-control" id="password">
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-sm-2 control-label">电子邮件</label>
          <div class="col-sm-6">
            <input type="email" class="form-control" id="email">
            <span class="help-block">请使用真实电子邮箱注册，我们不会将你的邮箱地址分享给任何人</span>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">注册</button>
          </div>
        </div>
      </form>
    </section>
</template>

<script>
    export default {
        name: 'register',
        data () {
            return {}
        },
        mounted: function () {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .help-block{
    font-size: 12px;
  }
  .breadcrumb{
    margin-bottom: 0;
  }
</style>
