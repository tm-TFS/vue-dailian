<template>
<div class="search">
  <div class="mui-row">
    <div class="mui-col-xs-10 mui-col-sm-10 ">
      <div class="mui-input-row mui-search">
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
        //console.log(item.content);
        /*let content = item.content;
        let params = {id: item.id, specialName: item.specialname};
        let xueke_index,menlei_index,target_index,course_index,jobDirection_index;
        xueke_index = content.indexOf('学科');
        menlei_index = content.indexOf('门类');

        target_index = content.indexOf('业务培养目标');
        course_index = content.indexOf('主要课程');
        jobDirection_index = content.indexOf('就业方向');

        if(target_index === -1){
          target_index = content.indexOf('培养目标');
        }

        if(jobDirection_index === -1){
          jobDirection_index = content.indexOf('毕业生应获得以下几方面的知识和能力');
        }

        params.xueke = content.substring(xueke_index,menlei_index);
        params.menlei = content.substring(menlei_index,target_index);
        if(course_index === -1){
          params.target = content.substring(target_index,jobDirection_index);
          params.course = "";
        } else {
          params.target = content.substring(target_index,course_index);
          params.course = content.substring(course_index,jobDirection_index);
        }
        params.jobDirection = content.substring(jobDirection_index,10000);

        console.log(params);*/
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
.mui-search{
  margin-right 4%
}
.mui-row {
  margin 4% 4%
}
</style>
