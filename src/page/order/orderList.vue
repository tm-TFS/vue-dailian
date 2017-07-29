<template>
  <div class="order">
    <div class="header">
      <div class="guide">
        <i class="icon-kuajingzhifuiconliebiao iconfont"></i>
        <Button-group>
          <Button v-for="item in headerTab1" :key="item.id" @click="search(1, item)" :class="{isActive: item.isActive}">
            {{ item.name }}
          </Button>
        </Button-group>
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <!--<mt-tab-container v-model="selected" v-if="content[0].content.length">
      <mt-tab-container-item class="list" :id="item.id" v-for="item in content " :key="item.id">
        &lt;!&ndash;v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20">&ndash;&gt;

        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
          <div class="list-item" v-for="_item in item.content" :title="_item">
            <div class="content">
              <span><i class="icon-gong iconfont" style=""></i>{{ _item.title }}</span>
              <p>{{ _item.serverName }}</p>
              <p>保证金 {{ _item.saveDeposit }}</p>
              <p>发布人： {{ _item.publishName }}</p>
            </div>
            <div class="price">
              ￥ {{ _item.price }}
            </div>
          </div>
        </mt-loadmore>
      </mt-tab-container-item>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-tab-container>
    <div v-else>
      您还没有属于自己的订单呦。
    </div>-->

    <div class="list" v-model="selected" v-if="orderList.length">
      <!--v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="20">-->

      <!--auto-fill 若为真，loadmore 会自动检测并撑满其容器 这里写死false 不然 bottom-method 上拉加载函数会一直触发-->
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :auto-fill="false" :bottom-method="loadBottom" :bottomDistance="110" :bottom-all-loaded="false"  ref="loadmore">
        <div class="list-item" v-for="item in orderList" >
          <div class="content">
            <span><i class="icon-gong iconfont" style=""></i>{{ item.title }}</span>
            <p>{{ item.serverName }}</p>
            <p>保证金 {{ item.saveDeposit }}</p>
            <p>发布人： {{ item.publishName }}</p>
          </div>
          <div class="price">
            ￥ {{ item.price }}
          </div>
        </div>
        <!--<div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>-->
      </mt-loadmore>
    </div>
    <div v-else>
      您还没有属于自己的订单呦。
    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './Header'
  import {Toast} from 'mint-ui';
  import {Button} from 'iview';
  import api from '@/fetch/api';

  export default{
    mounted(){
      this.search(1);
    },
    data (){
      return {
        topStatus: '',
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
          customerId: 1
        },
        selected: 1,
        ableLoadMore: true,
        pageId: 1,
        content: [
          {
            id: 1,
            content: []
          }
        ],
        orderList: []
      }
    },
    methods: {
      loadTop(){
        this.search(1);
        this.$refs.loadmore.onTopLoaded();
      },
      handleTopChange(status) {
        this.topStatus = status;
      },
      loadBottom(){
        if (this.ableLoadMore) {
          this.pageId++;
          this.search(this.pageId);
        } else {
          Toast('没有更多了');
        }
        this.$refs.loadmore.onBottomLoaded();
      },
      search(pageId, button){
        if (button) {
          //控制isActive
          this.headerTab1.map(item => {
            item.isActive = false;
          });
          button.isActive = true;

          //接手
          if (button.id === 1) {
            this.queryParams.receiveCustomerId = 1;
            this.queryParams.customerId = 0;
          }

          //发布
          if (button.id === 2) {
            this.queryParams.receiveCustomerId = 0;
            this.queryParams.customerId = 1;
          }
        }
        if (pageId) {
          this.queryParams.pageId = pageId;
        }
        this.getRateList();
      },
      getRateList (){
        let params = this.queryParams;
        api.fetchPost(api.path.getRateList, params).then((data) => {
          //控制加载条
          this.loading = false;
          if (this.pageId > 1) {
            this.content[0].content = this.content[0].content.concat(data.data);
          } else {
            this.content[0].content = data.data;
            this.orderList = data.data;
          }
          this.ableLoadMore = data.current_page >= (data.total / data.per_page) ? false : true;
          this.$Message.success('操作成功');

        }).catch(err => {
          this.$Message.error(err);
          this.loading = false;
        })
      },
      change (id) {
        console.log(id);
        Toast(id);
        //this.$store.dispatch('changeNavId', id);
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../src/assets/mixin.styl";
  .list
    padding-bottom: 44px;
    border-1px(#26a2ff)
    margin 2px 0
    .list-item
      display flex
      border-bottom 10px solid rgba(133, 126, 126, 0.2)
      .content
        flex 2
        margin 6px 0 6px 8px
        .icon-gong
          content: "\E660";
          font-size: 18px;
          color: #26a2ff;
          margin-right: 12px;
        p
          color: #888;
          font-size: 12px;
          margin-top: 6px;
          margin-left: 30px;
      .price
        margin auto 0
        flex 1
        font-size 18px
        color red
    &:last-child
      border-bottom 0 rgba(133, 126, 126, 0.2)

  .guide
    display flex
    border-bottom 10px solid rgba(133, 126, 126, 0.2)
    padding 10px 8px
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

  .ivu-btn-group > .ivu-btn
    width: 80px
    color: #26a2ff;
    background-color: #fff;
    border-color: #26a2ff;

  .ivu-btn-group > .isActive
    color: #fff;
    background-color: #26a2ff;
    border-color: #26a2ff;
</style>
