<template>
  <div class="header">
    <div class="guide">
      <i class="icon-kuajingzhifuiconliebiao iconfont" ></i>
      <!--<div class="tab" v-for="item in headerTab1" :key="item.id">
        <router-link :to="item.linkTo">
          <mt-button plain size="small" type="primary">{{ item.name }}</mt-button>
        </router-link>
      </div>-->
      <Button-group>
        <Button v-for="item in headerTab1" :key="item.id" @click="search(1, item)" :class="{isActive: item.isActive}">
          {{ item.name }}
        </Button>
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
            name: '接手',
            isActive: false
          },
          {
            id: 2,
            name: '发布',
            isActive: true
          }
        ],
        queryParams: {
          pageId: 1,
          pageSize: 20,
          receiveCustomerId: 0,
          customerId: 0
        }
      }
    },
    methods: {
      search(pageId, button){
        //控制isActive
        this.headerTab1.map(item =>{
          item.isActive = false;
        });
        button.isActive = true;

        //接手
        if(button.id === 1){
          this.queryParams.receiveCustomerId = 1;
          this.queryParams.customerId = 0;
        }

        //发布
        if(button.id === 2){
          this.queryParams.receiveCustomerId = 0;
          this.queryParams.customerId = 1;
        }

        if(pageId){
          this.queryParams.pageId = pageId;
        }
        this.getRateList();
      },
      getRateList (){
        let params = this.queryParams;
        api.fetchPost(api.path.getRateList, params).then((data) => {
          //控制加载条
          this.loading = false;
          this.$Message.success('操作成功');
          this.$emit('get-order',data);
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
  .ivu-btn-group>.isActive
    color: #fff;
    background-color: #26a2ff;
    border-color: #26a2ff;

</style>
