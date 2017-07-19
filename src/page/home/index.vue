<template>
  <div class="home">
        <mt-navbar class="choose" v-model="selected">
      <mt-tab-item :id="item.id" v-for="item in headerTab2" :key="item.id" @click="change(item.id)">
        {{ item.name }}

      </mt-tab-item>
    </mt-navbar>
    <div class="content">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item class="list" :id="item.id" v-for="item in content " :key="item.id">

          <div class="list-item" v-for="_item in item.content" :title="_item">
            <div class="content" >
              <span><i class="icon-gong iconfont" style=""></i>铂金4-铂金3 明文110</span>
              <p>王者荣耀/苹果微信 默认福</p>
              <p>保证金 100</p>
              <p>发布人： 咻咻咻</p>
            </div>
            <div class="price">
              ￥ 600.00
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'index',
    data () {
      return {
        selected: 1,
        html_con: "铂金4-铂金3 明文110 \n 王者荣耀/苹果微信 默认福 \n 保证金 100\n发布人： 咻咻咻",
        headerTab2: [
          {
            id: 1,
            name: '王者荣耀',
            isActive: false,
          },
          {
            id: 2,
            name: '全部',
            isActive: true,
          },
          {
            id: 3,
            name: '默认排序',
            isActive: false,
          }
        ],
        content: [
          {
            id: 1,
            content: []
          },
          {
            id: 2,
            content: []
          },
          {
            id: 3,
            content: []
          }
        ]
      }
    },
    beforeMount () {
      this.content.map(function (item) {
        for(let i = 0; i< 10; i++){
          item.content.push(`这是列表${item.id}数据${i}`);
        }
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

@import "../../../src/assets/mixin.styl";

.list
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
</style>
