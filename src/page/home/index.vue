<template>
  <div class="home">
    <!--<mt-navbar class="choose" v-model="selected">
      <mt-tab-item :id="item.id" v-for="item in headerTab2" :key="item.id" @click="change(item.id)">
        {{ item.name }}

      </mt-tab-item>
    </mt-navbar>-->
    <filter-bar
      top="40"
      :bar-menus="barMenus"
      @showDialog="handleShowDialog"
      @closeDialog="handleCloseDialog"
      @changeTab="handleChangeTab"
      @changeMainItem="handleChangeMainItem"
      @changeSelect="changeData">
    </filter-bar>
    <div class="content">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item class="list" :id="item.id" v-for="item in content " :key="item.id">

          <div class="list-item" v-for="_item in item.content" :title="_item">
            <div class="content">
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
  import api from '@/fetch/api';
  import FilterBar from '@/components/filter-bar/FilterBar';
  export default {
    name: 'index',
    components: {
      'filter-bar': FilterBar
    },
    data () {
      return {
        barMenus: [
          {
            name: '附近',
            icon: '',
            value: 'area',
            showTabHeader: true,
            defaultIcon: '',
            selectIcon: '',
            selectIndex: 0,
            tabs: [{
              icon: '',
              name: '商圈',
              selectIndex: 0,
              detailList: [{
                name: '附近',
                icon: '',
                selectIndex: 0,
                list: [{
                  name: '默认',
                  value: 'all'
                }, {
                  name: '500米',
                  value: '500'
                }, {
                  name: '1000米',
                  value: '1000'
                }]
              }, {
                name: '朝阳区',
                icon: '',
                selectIndex: 1,
                list: [{
                  name: '全部',
                  value: 'all'
                }, {
                  name: '建国门',
                  value: 'jianguomen'
                }, {
                  name: '亚运村',
                  value: 'yayuncun'
                }]
              }, {
                name: '海淀区',
                icon: '',
                selectIndex: 2,
                list: [{
                  name: '全部',
                  value: 'all'
                }, {
                  name: '中关村',
                  value: 'zhongguancun'
                }, {
                  name: '五道口',
                  value: 'wudaokou'
                }]
              }]
            },
              {
                icon: '',
                name: '地铁沿线',
                selectIndex: 1,
                detailList: [{
                  name: '1号线',
                  icon: '',
                  selectIndex: 0,
                  list: [{
                    name: '平果圆',
                    value: 'pingguoyuan'
                  }, {
                    name: '古城',
                    value: 'gucheng'
                  }, {
                    name: '八角游乐园',
                    value: 'bajiaoyouleyuan'
                  }]
                }, {
                  name: '2号线',
                  icon: '',
                  selectIndex: 1,
                  list: [{
                    name: '积水潭',
                    value: 'jishuitan'
                  }, {
                    name: '鼓楼大街',
                    value: 'guloudajie'
                  }, {
                    name: '安定门',
                    value: 'andingmen'
                  }]
                }, {
                  name: '4号线',
                  icon: '',
                  selectIndex: 2,
                  list: [{
                    name: '安和桥北',
                    value: 'anheqiaobei'
                  }, {
                    name: '北宫门',
                    value: 'beigongmen'
                  }, {
                    name: '西宛',
                    value: 'xiwan'
                  }]
                }]
              }
            ]
          }, {
            name: '菜系',
            icon: '',
            value: 'food',
            showTabHeader: false,
            defaultIcon: '',
            selectIcon: '',
            selectIndex: 0,
            tabs: [{
              icon: '',
              name: '',
              selectIndex: 0,
              detailList: [{
                name: '全部',
                icon: '',
                value: '全部',
                selectIndex: 0,
                list: [{
                  name: "全部",
                  value: 'all'
                }]
              }, {
                name: '中餐馆',
                icon: '',
                value: '中餐馆',
                selectIndex: 1,
                list: [{
                  name: '全部',
                  value: 'all'
                }, {
                  name: '火锅',
                  value: 'hot pot'
                }, {
                  name: '川菜',
                  value: 'Sichuan cuisine'
                }]
              }, {
                name: '西餐馆',
                icon: '',
                value: '西餐管',
                selectIndex: 2,
                list: [{
                  name: '全部',
                  value: 'all'
                }, {
                  name: '披萨',
                  value: 'pizza'
                }, {
                  name: '牛排',
                  value: 'steak'
                }]
              }]
            }]
          }, {
            name: '排序',
            icon: '',
            value: 'compositor',
            showTabHeader: false,
            defaultIcon: '',
            selectIcon: '',
            selectIndex: 0,
            tabs: [{
              icon: '',
              name: '',
              selectIndex: 0,
              detailList: [{
                name: '只能排序',
                icon: '',
                value: '0',
                selectIndex: 0
              }, {
                name: '离我最近',
                icon: '',
                value: '1',
                selectIndex: 1
              }, {
                name: '评价最好',
                icon: '',
                value: '2',
                selectIndex: 2
              }]
            }]
          }, {
            name: '筛选',
            icon: '',
            value: 'filter',
            type: 'filter',
            showTabHeader: false,
            defaultIcon: '',
            selectIcon: '',
            selectIndex: 0,
            tabs: [{
              icon: '',
              name: '价格',
              selectIndex: 0,
              detailList: [{
                name: '0-50',
                value: '0-50',
                selectIndex: -1
              }, {
                name: '50-100',
                value: '50-100',
                selectIndex: -1
              }, {
                name: '100-150',
                value: '100-150',
                selectIndex: -1
              },
                {
                  name: '150-200',
                  value: '150-200',
                  selectIndex: -1
                }, {
                  name: '200-250',
                  value: '200-250',
                  selectIndex: -1
                }, {
                  name: '300-350',
                  value: '300-350',
                  selectIndex: -1
                }
              ]
            }, {
              icon: '',
              name: '入住类型',
              selectIndex: 1,
              detailList: [{
                name: '不限',
                value: 'all',
                selectIndex: -1
              }, {
                name: '全日房',
                value: 'daily',
                selectIndex: -1
              }, {
                name: '钟点房',
                value: 'time',
                selectIndex: -1
              },
                {
                  name: '支持团购',
                  value: 'group buy',
                  selectIndex: -1
                }
              ]
            }]
          }
        ],
        selected: 1,
        totalPage: 1,
        queryParams: {
          pageId: 1,
          pageSize: 20,
          sortKey: 'id',
          order: 'desc'
        },
        rateList: [],
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
        for (let i = 0; i < 10; i++) {
          item.content.push(`这是列表${item.id}数据${i}`);
        }
      });
    },
    methods: {
      search (pageId, sorts){
        this.pageId = pageId || this.pageId;
        //传入排序字段
        if (sorts) {
          this.searchParams.sortKey = sorts.key;
          this.searchParams.order = sorts.order;
        }
        this.getRateList();
      },
      getRateList () {
        api.fetchPost(api.path.getRateList, this.searchParams).then((data) => {
          //控制加载条
          this.rateList = data.data;
          this.totalPage = data.total;
        }).catch(err => {
          this.$Message.error(err);
        })
      },
      handleShowDialog(v) {
        // console.log(v);
      },
      handleCloseDialog(v) {
        // console.log(v);
      },
      handleChangeTab(v) {
        // console.log(v);
      },
      handleChangeMainItem(v) {
        // console.log(v)
      },
      changeData(v) {
        console.log(v);
      }
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
