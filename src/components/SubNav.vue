<template>
  <nav>
    <ul class="nav nav-pills">
      <li role="presentation" v-bind:class="{active: isActive(tab.key)}" v-for="tab in tabs">
        <router-link :to="{name: 'index', query: {tab: tab.key}}">{{tab.value}}</router-link>
      </li>
    </ul>
  </nav>

</template>

<script>
    export default {
        name: 'subNav',
        data () {
            return {
              tabs: [
                {key: 'tech', value: '技术'},
                {key: 'creative', value: '创意'},
                {key: 'play', value: '好玩'},
                {key: 'apple', value: 'Apple'},
                {key: 'jobs', value: '酷工作'},
                {key: 'deals', value: '交易'},
                {key: 'city', value: '城市'},
                {key: 'qna', value: '问与答'},
                {key: 'hot', value: '最热'},
                {key: 'all', value: '全部'},
                {key: 'r2', value: 'R2'}
              ]
            }
        },
        methods: {
          isActive(tab){
            return this.$route.query.tab === tab;
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav{
    border-bottom: 1px solid #ccc;
    padding: 6px 0;
  }
</style>
