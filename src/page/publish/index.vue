<template>
  <div class="publish">
    <mt-header title="创建订单任务">
      <mt-button icon="back" slot="left" ></mt-button>
      <mt-button slot="right" @click="publish()">确认发布</mt-button>
    </mt-header>
    <div @click="bottomModel=true">
      <mt-field label="游戏区服" placeholder="请选择你所在的区服"  v-model="serverName"></mt-field>
    </div>
    <mt-field label="订单任务" placeholder="最多30个字符" type="textarea" rows="2"  v-model="title"></mt-field>
    <mt-field label="订单价格" placeholder="请输入金额" type="number" v-model="price">元</mt-field>
    <mt-field label="订单时限" placeholder="要求时间" type="number" v-model="timeLimit">小时</mt-field>
    <mt-field label="安全保证金" placeholder="请输入金额" type="number"  v-model="saveDeposit"></mt-field>
    <mt-field label="效率保证金" placeholder="请输入金额" type="number" v-model="efficiencyDeposit"></mt-field>
    <mt-field label="游戏账号" placeholder="请输入您的游戏账号" v-model="account"></mt-field>
    <mt-field label="游戏密码" placeholder="请输入您的游戏密码" v-model="password"></mt-field>
    <mt-field label="游戏角色名" placeholder="请输入您的游戏角色名" v-model="nickname"></mt-field>
    <mt-radio
      title="发布频道（优质频道：经平台认证的打手区，更高质高效完成任务）"
      v-model="publishType"
      align="right"
      :options="[{label: '发布到优质频道', value: 1}, {label: '发布到公共频道', value: 2} ]">
    </mt-radio>
    <mt-field label="联系电话" placeholder="请输入您的联系电话" type="tel"  v-model="contactMobile"></mt-field>
    <mt-field label="联系QQ" placeholder="请输入您的联系QQ" type="number"  v-model="qqNum"></mt-field>

    <mt-popup
      v-model="bottomModel"
      position="bottom">
      <mt-picker :slots="slots" value-key="label" @change="onValuesChange"></mt-picker>
    </mt-popup>

  </div>
</template>

<script type="text/ecmascript-6">
  import api from '@/fetch/api';
  import { Toast } from 'mint-ui';
  export default{
    beforeMount () {
      this.getServerList();
    },
    data (){
      return {
        publishType: 1,
        serverId: 0,
        contactMobile: '',
        qqNum: '',
        title: '',
        price: '',
        timeLimit: '',
        saveDeposit: '',
        efficiencyDeposit: '',
        account: '',
        password: '',
        nickname: '',
        serverModel: [],
        bottomModel: false,
        serverList: [],
        searchParams: {},
        slots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'right'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'left'
          }
        ]
      }
    },
    computed: {
      serverName (){
        if(this.serverModel[0] && this.serverModel[1] ){
          return this.serverModel[0].label + ' / ' + this.serverModel[1].label;
        }
      }
    },
    methods: {
      publish (){
        let methods = {};
        if(this.serverId && this.serverName){
          methods.serverId = this.serverId;
          methods.serverName = this.serverName;
        } else {
          Toast('请选择区服');
          return;
        }

        if(this.title){
          methods.title = this.title;
        } else {
          Toast('请输入订单任务');
          return;
        }

        if(this.price){
          methods.price = this.price;
        } else {
          Toast('请输入订单价格');
          return;
        }

        if(this.timeLimit){
          methods.timeLimit = this.timeLimit;
        } else {
          Toast('请输入订单时限');
          return;
        }

        if(this.saveDeposit){
          methods.saveDeposit = this.saveDeposit;
        } else {
          Toast('请输入安全保证金');
          return;
        }

        if(this.efficiencyDeposit){
          methods.efficiencyDeposit = this.efficiencyDeposit;
        } else {
          Toast('请输入效率保证金');
          return;
        }

        if(this.account){
          methods.account = this.account;
        } else {
          Toast('请输入游戏账号');
          return;
        }

        if(this.password){
          methods.password = this.password;
        } else {
          Toast('请输入游戏密码');
          return;
        }

        if(this.nickname){
          methods.nickname = this.nickname;
        } else {
          Toast('请输入游戏角色名');
          return;
        }

        if(this.publishType){
          methods.publishType = this.publishType;
        } else {
          Toast('请选择发布频道');
          return;
        }

        if(this.contactMobile){
          methods.contactMobile = this.contactMobile;
        } else {
          Toast('请输入联系手机号');
          return;
        }

        if(this.qqNum){
          methods.qqNum = this.qqNum;
        } else {
          Toast('请输入联系QQ号');
          return;
        }

        api.fetchPost(api.path.addOrder, methods).then((data) => {
          Toast(data);
          setTimeout(()=>{
            this.$router.push({path: '/order'});
            this.$emit('order-path', '/order');
          }, 1000);
        }).catch(err => {
          this.$Message.error(err);
        })

      },
      onValuesChange(picker, values){
        if(values[0] && values[1] && this.serverModel[0]){
          this.serverId = values[1].value;
          //console.log(this.serverModel[0].value);
          this.slots[1].values = this.serverList.servers2.filter(item=>{
            return item.pid === values[0].value;
          });
        }
        this.serverModel = values;
      },
      getServerList() {
        api.fetchPost(api.path.getServerList, this.searchParams).then((data) => {
          //控制加载条
          this.serverList = data;
          this.slots[0].values = data.servers1;
          this.slots[1].values = data.servers2.filter(item=>{
            return item.pid === data.servers1[0].value;
          });
        }).catch(err => {
          this.$Message.error(err);
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .mint-popup{
    width: 100%
  }
</style>
