<template>
    <div class="panel">
      <subnav-comp></subnav-comp>
      <div class="loading" v-if="loading">
        Loading...
      </div>
      <div v-if="loadingError" class="alert alert-warning" role="alert">
        数据加载失败, 可能是V2EX API访问超过限额, 请稍候再试
      </div>
      <div class="alert alert-info" role="alert" v-if="isEmpty()">
        暂无数据
      </div>

      <section>
        <ul class="media-list panel-body">
          <li class="media" v-for="topic in topics">
            <div class="media-left">
              <a href="#">
                <img class="media-object" v-bind:src="topic.member.avatar_normal" alt="...">
              </a>
            </div>
            <div class="media-body">
              <div flex="dir:row main:justify cross:baseline">
                <div class="detail">
                  <router-link :to="{name: 'show', params: {id: topic.id}}" class="link">{{topic.title}}</router-link>
                  <div class="classify">
                    <span class='label label-default'>{{ topic.node.title }}</span>
                    •
                    <router-link :to="{name: 'member', params: {id: topic.member.id}}" class="username">{{ topic.member.username }}</router-link>
                    •
                    <span>{{ topic.created | formatDate }}</span>
                  </div>
                </div>
                <span class="badge">{{topic.replies}}</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
  import SubNav from "./SubNav.vue";
  export default {
    name: 'index',
    data () {
        return {
          "loading": true,
          "loadingError": false,
          "originalTopics": [],
          "topics": [],
        }
    },
    mounted: function () {
      this.$http.get('/api/topics/latest.json').then(function (response) {
//        this.originResponseTopics = response.body
        this.topics = response.body;
        this.originalTopics = this.topics;
        this.loading = false;
        this.loadError = false;
      }, function (err) {
        this.loading = false;
        this.loadError = true;
        console.log(err)
      })
    },
    components: {
      "subnav-comp": SubNav
    },
    watch: {
      $route() {
        this.topics = this.selectedTabTopics()
//        console.log(this.topics);
      }
    },
    methods: {
      selectedTabTopics(){
        var topics = [],
            tab = this.$route.query.tab;
        if(tab === 'tech' || tab === undefined || tab === 'all'){
          return this.originalTopics;
        }else{
          this.originalTopics.forEach((item) => {
            console.log(item.node.name === tab);
            if(item.node.name === tab){
              topics.push(item);
            }
          });
          return topics;
        }
      },
      isEmpty: function () {
        return this.topics.length === 0 && !this.loading
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel {
    padding: 0 16px;
  }
  .loading {
    height: 32px;
    line-height: 32px;
  }
  .alert {
    margin-top: 12px;
  }
  section ul {
    padding: 0;
    margin: 0;
  }
  section ul li{
    margin: 0;
    padding: 15px 0;
  }
  section ul li:not(:last-child) {
    border-bottom: 1px solid #cccccc;
  }
  .link {
    color: #778087;
    cursor: pointer;
    font-size: 16px;
    line-height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    /*white-space: nowrap;*/
    display: inline-block;
  }
  .detail {
    color: #ccc;
    font-size: 11px;
    /*height: 48px;*/
  }
  .username {
    color: #616060;
    font-weight: 500;
  }
  .username:hover {
    color: #fff;
    background-color: #909090;
    text-decoration: none;
  }
</style>
