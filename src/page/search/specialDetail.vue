<template>
  <div class="detail">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
      <h1 class="mui-title">{{special.specialName}}</h1>
    </header>
    <div class="mui-content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">专业名称： {{special.specialName}}</li>
        <li class="mui-table-view-cell">{{special.xueke}}</li>
        <li class="mui-table-view-cell">{{special.target}}</li>
        <li class="mui-table-view-cell" v-show="special.course">{{special.course}}</li>
        <li class="mui-table-view-cell">{{special.jobDirection}}</li>
        <li class="mui-table-view-cell" @click="dangdangSearch()">
          <a class="mui-navigate-right" style="color: #26a2ff">{{special.specialName}} 当当网销售前10书籍</a>
        </li>
        <li class="mui-table-view-cell" @click="zhihuSearch()">
          <a class="mui-navigate-right" style="color: #26a2ff">{{special.specialName}} 知乎上的热门问答</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import api from '@/fetch/api';
  export default{
    mounted(){
      this.detail = this.$route.query;
      api.fetchPost(api.path.getSpecialDetail, {id: this.$route.params.id}).then((data) => {
        console.log(data);
        this.formate(data);
      }).catch(err => {
        this.$Message.error(err);
      });
    },
    data(){
      return {
        special: {},
        detail: {}
      }
    },
    methods: {
      dangdangSearch(){
        window.location.href='http://search.dangdang.com/?key=' + this.special.specialName + '&act=input&sort_type=sort_sale_amt_desc#J_tab';
      },
      zhihuSearch(){
        window.location.href='https://www.zhihu.com/search?type=content&q=' + this.special.specialName;
        //this.$router.push({path: 'https://www.zhihu.com/search?type=content&q=' + this.special.specialName});
      },
      formate(data){
        let content = data.content;
        let params = {specialName: data.specialname};
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
        this.special = params;
        console.log(params);

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
