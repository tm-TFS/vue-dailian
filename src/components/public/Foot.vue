<template>
  <mt-tabbar class="foot" v-model="footId" fixed>
    <mt-tab-item id="/" @click="goLink(1)">
        <i class="icon-fcstubiao23-blue-copy iconfont"></i>
        首页
    </mt-tab-item>
    <mt-tab-item id="/order">
      <i class="icon-dingdan-blue-copy iconfont"></i>
      订单

    </mt-tab-item>
    <mt-tab-item id="/publish">
      <i class="icon-fabu-blue iconfont"></i>
      发布

    </mt-tab-item>
    <mt-tab-item id="/mine">
      <i class="icon-wode-blue iconfont"></i>
      我的

    </mt-tab-item>
  </mt-tabbar>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'foot',
    data () {
      return {
        footId: '/'
      }
    },
    watch: {
      footId (val, old){
        this.$router.push({path: val});
      },
      $route (val, oldVal) {
        console.log(val.path);
        this.footId = val.path;
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mint-tabbar
    padding 5px 0

  .iconfont
    font-size 20px
    display inline-block
</style>

