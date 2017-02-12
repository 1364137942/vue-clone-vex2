<template>
    <section class="panel">
      <div class="panel-heading">
        回复
      </div>
      <ul class="media-list panel-body">
        <li class="media" v-for="reply in replies">
          <div class="media-left">
            <a href="#">
              <router-link :to="{name: 'member', params: {id: reply.member.id}}">
                <img class="media-object" v-bind:src="reply.member.avatar_normal" v-bind:alt="reply.member.username">
              </router-link>
            </a>
          </div>
          <div class="media-body">
            <p class="user">
              <router-link class="username" :to="{name: 'member', params: {id: reply.member.id}}">{{reply.member.username}}</router-link>
              •
              <span>{{reply.created | formatDate}}</span>
            </p>
            <p v-html="reply.content_rendered"></p>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
    export default {
      name: 'replay',
      data () {
        return {
          replies: []
        }
      },
      mounted: function () {
        this.$http.get('/api/replies/show.json', {params: {topic_id: this.$route.params.id}}).then(function (response) {
          this.replies = response.body;
          console.log(this.replies);
        }).then(function (err) {
          console.log(err)
        })
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel-heading {
    border-bottom: 1px solid #ccc;
  }
  ul li {
    padding: 12px 0;
    margin: 0;
  }
  ul li:not(:last-child) {
    border-bottom: solid 1px #ccc;
  }
  .user {
    color: #ccc;
    font-size: 14px;
    line-height: 22px;
  }
  .username {
    cursor: pointer;
  }
  .username:hover {
    color: #fff;
    background-color: #909090;
    text-decoration: none;
  }

</style>
