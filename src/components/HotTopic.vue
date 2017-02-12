<template>
    <section class="panel">
      <h1 class="panel-heading">今日热议主题</h1>
      <ul class="media-list panel-body">
        <li class="media" v-for="topic in hots">
          <div class="media-left">
            <a href="#">
              <router-link :to="{name: 'member', params: {id: topic.member.id}}">
                <img class="media-object" v-bind:src="topic.member.avatar_normal" v-bind:alt="topic.member.username">
              </router-link>
            </a>
          </div>
          <div class="media-body">
            <router-link :to="{name: 'show', params: {id: topic.id}}">{{topic.title}}</router-link>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
    export default {
        name: 'hotTopic',
        data () {
            return {
              hots: []
            }
        },
        mounted: function () {
          this.$http.get('/api/topics/hot.json').then(function (response) {
            this.hots = response.body;
          }).then(function (err) {
//            console.log(err)
          })
        },
      methods: {
        initData: function () {

        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    text-align: left;
    border-bottom: 1px solid #ccc;
  }
  li:not(:last-child){
    overflow: hidden;
    border-bottom: solid 1px #ccc;
    padding-bottom: 12px;
  }
</style>
