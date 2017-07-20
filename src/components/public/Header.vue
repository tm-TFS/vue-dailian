<template>
  <div class="header">
    <div class="guide">
      <i class="icon-kuajingzhifuiconliebiao iconfont" @click="con"></i>
      <!--<div class="tab" v-for="item in headerTab1" :key="item.id">
        <router-link :to="item.linkTo">
          <mt-button plain size="small" type="primary">{{ item.name }}</mt-button>
        </router-link>
      </div>-->
      <Button-group>
        <Button v-for="item in headerTab1" :key="item.id" @click="search(1,item.linkTo)">
          {{ item.name }}
        </Button>
        <!--<Button >昨日</Button>
        <Button >今日</Button>
        <Button >明日</Button>-->
      </Button-group>
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Toast} from 'mint-ui';
  import {Button} from 'iview';
  import api from '@/fetch/api';
  export default {
    name: 'index',
    data () {
      return {
        headerTab1: [
          {
            id: 1,
            name: '优质订单',
            isActive: false,
            linkTo: '1'
          },
          {
            id: 2,
            name: '公共频道',
            isActive: true,
            linkTo: '2'
          },
          {
            id: 3,
            name: '内部频道',
            isActive: false,
            linkTo: '3'
          }
        ],
        queryParams: {
          pageId: 1,
          pageSize: 20,
          publishType: 2
        }
      }
    },
    methods: {
      con () {
        Toast('123');
      },
      search(pageId, type){
        //type 任务频道 1-优质 2-公共 3-内部
        if(pageId){
          this.queryParams.pageId = pageId;
        }
        if(type){
          this.queryParams.type = type;
        }
        this.getRateList();
      },
      getRateList (){
        let params = this.queryParams;
        api.fetchPost(api.path.disableCustomer, params).then((data) => {
          //控制加载条
          this.loading = false;
          this.$Message.success('操作成功');
          //重新查询详情
          this.getCustomerDetail();
        }).catch(err => {
          this.$Message.error(err);
          this.loading = false;
        })
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
  .ivu-btn-group>.ivu-btn
    width: 80px
    color: #26a2ff;
    background-color: #fff;
    border-color: #26a2ff;
  .ivu-btn:hover
    color: #fff;
    background-color: #26a2ff;
    border-color: #26a2ff;

</style>
