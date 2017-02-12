<template>
  <section class="container-fluid">
    <section class="panel">
      <div class="panel-heading">
        <ol class="breadcrumb">
          <li><router-link :to="{name:'index'}">v2ex</router-link></li>
          <li class="active">{{node.title}}</li>
        </ol>
      </div>
      <div class="panel-body">
        <div class="row">
          <h1 class="col-md-10">{{topic.title}}</h1>
          <div class="col-md-2 avatar">
            <img v-bind:src="member.avatar_large" v-bind:alt="member.username">
          </div>
        </div>
        <div class="row">
          <p class="col-md-12 topic-content" v-html="topic.content_rendered"></p>
        </div>
      </div>
    </section>

    <reply-comp></reply-comp>
  </section>

</template>

<script>
  import Reply from "./Reply.vue";
    export default {
      name: 'show',
      data () {
        return {
          topic: {},
          node: {},
          member: {}
        }
      },
      mounted: function () {
        this.$http.get('/api/topics/show.json', {params: {id: this.$route.params.id}}).then(function (response) {
            this.topic = response.body[0];
            this.node = this.topic.node;
            this.member = this.topic.member;
        }).then(function (err) {
          console.log(err)
        });
      },
      components: {
        "reply-comp": Reply
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .breadcrumb {
    margin-bottom: 0;

  }
  h1 {
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
  }
  .avatar{
    text-align: right;
    vertical-align: middle;
  }
  .topic-content {
    word-wrap: break-word;
    line-height: 28px;
    font-size: 18px;
    color: #5d5c5c;
  }
  a {
    color: #5e5e5e;
  }
  a:hover {
     color: #909090;
     text-decoration: none;
   }

</style>
