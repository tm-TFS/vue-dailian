<template>
  <div class="header">
    <div class="guide">
      <i class="icon-kuajingzhifuiconliebiao iconfont" @click="con"></i>
      <div class="tab" v-for="item in headerTab1" :key="item.id">
        <router-link :to="item.linkTo">
          <mt-button plain size="small" type="primary">{{ item.name }}</mt-button>
        </router-link>
      </div>
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Toast} from 'mint-ui'
  export default {
    name: 'index',
    data () {
      return {
        headerTab1: [
          {
            id: 1,
            name: '优质订单',
            isActive: false,
            linkTo: '/excellent'
          },
          {
            id: 2,
            name: '公共频道',
            isActive: true,
            linkTo: '/public'
          },
          {
            id: 3,
            name: '内部频道',
            isActive: false,
            linkTo: '/private'
          }
        ]
      }
    },
    methods: {
      con () {
        Toast('123');
      },
      change (id) {
        console.log(id);
        Toast(id);
        //this.$store.dispatch('changeNavId', id);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .guide
    display flex
    border-bottom 10px solid rgba(133, 126, 126, 0.2)
    padding  10px 8px
    .tab
      display: inline-block;
      flex 3
    .iconfont
      font-size: 20px
    .icon-kuajingzhifuiconliebiao
      flex 1
    .icon-sousuo
      flex 1
      text-align right
</style>
