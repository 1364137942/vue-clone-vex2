<template>
    <section class="panel">
      <ul class="media-list panel-body">
        <li class="media">
          <div class="media-left">
            <img class="media-object" v-bind:src="member.avatar_normal" alt="...">
          </div>
          <div class="media-body">
            <p>{{member.username}}</p>
            <p>V2EX 第 {{member.id}} 号会员, 加入于 {{member.created | formatDate}}</p>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
    export default {
        name: 'member',
        data () {
            return {
              member: []
            }
        },
        mounted: function () {
          this.$http.get('/api/members/show.json', {params: {id: this.$route.params.id}}).then(function (response) {
            this.member = response.body
          }).then(function (err) {
            console.log(err)
          })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    line-height: 24px;
  }
  .media-body p:last-child {
    font-size: 12px;
    color: #ccc;
  }
</style>
