<template>
<div class="search">
  <div class="mui-row">
    <div class="mui-col-xs-10 mui-col-sm-10 ">
      <div class="mui-input-row my-search">
        <input type="search" class="mui-input-clear " placeholder="专业名称搜索" v-model="specialName">
      </div>
    </div>
    <div class="mui-col-xs-2 mui-col-sm-2">
      <button type="button" class="mui-btn mui-btn-primary" @click="search()">搜索</button>
    </div>
  </div>
  <ul class="mui-table-view">
    <li class="mui-table-view-cell" v-for="item in list" @click="getDetail(item)">
      <a class="mui-navigate-right">{{item.specialname}}</a>
    </li>
    <!--<li class="mui-table-view-cell">
      <a class="mui-navigate-right">Item 2</a>
    </li>
    <li class="mui-table-view-cell">
      <a class="mui-navigate-right">Item 3</a>
    </li>-->
  </ul>

</div>
</template>

<script type="text/ecmascript-6">
  import api from '@/fetch/api';
  export default{
    methods: {
      search(){
        api.fetchPost(api.path.getSpecials, {specialName: this.specialName}).then((data) => {
          console.log(data);
          this.list = data;
        }).catch(err => {
          this.$Message.error(err);
        })

      },
      getDetail(item){
        this.$router.push({path: '/specialDetail/' + item.id});
      }
    },
    data(){
      return {
        specialName: "",
        list: [],
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.my-search{
  margin-right 4%
}
.mui-row {
  margin 4% 4%
}
</style>
