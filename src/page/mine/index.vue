<template>
  <!--<div id="personHTML">
    <ul class="mui-table-view" style="margin-top: 0px;height: auto; ">
      <li id="setaccount" class="mui-table-view-cell mui-media" style="background-color: #26a2ff;height: 13rem;-moz-background-size:100% 100%;background-size:100% 100%;">

        <div class="mui-media-body" style="margin-top: 35px;">
          <div class="mui-pull-left" style="width:100px; height:100px; border-radius:100px; overflow:hidden;">
            <img id="iconhead" src="../../assets/logo.png" style="width:100px; height:100px;" />
          </div>
          <div class="mui-pull-left" style="margin-top: 30px;margin-left:10px;">
            <span id="nickname" style="font-size: 18px;"></span>
            <p id="UID" class="mui-ellipsis"></p>
            <p id="Mobile" class="mui-ellipsis"></p>
          </div>
        </div>

      </li>
      <li id="balance" class="mui-table-view-cell">
        <div class="divleft">
          <p>账户余额</p>
          <p id="sumbal" class="money">0.00</p>
        </div>
        <div class="divcenter">
          <p>冻结金额</p>
          <p id="freezebal" class="money">0.00</p>
        </div>
        <div class="divright">
          <p>可用资金</p>
          <p id="operatebal" class="money">0.00</p>
        </div>
      </li>
    </ul>
    <ul class="mui-table-view" style="margin-top: 10px;">
      <li class="mui-table-view-cell">
        <a id="fund" class="mui-navigate-right">
          <span class="mui-icon iconfont icon-zijinguanli mcolor" style="font-size: 19px;margin-top: -3px;"></span> 资金管理
        </a>
      </li>
    </ul>
    <ul class="mui-table-view" style="margin-top: 10px;">
      <li class="mui-table-view-cell">
        <a id="safecenter" class="mui-navigate-right">
          <span class="mui-icon iconfont icon-anquanzhongxin mcolor"></span> 安全中心
        </a>
      </li>
    </ul>
    <ul class="mui-table-view" style="margin-top: 10px;">
      <li class="mui-table-view-cell">
        <a id="setting" class="mui-navigate-right">
          <span class="mui-icon iconfont icon-zhanghaoxinxi mcolor" style="font-size: 21px;"></span> 账号设置
        </a>
      </li>
    </ul>
    <ul class="mui-table-view" style="margin-top: 10px;">
      <li class="mui-table-view-cell">
        <a id="feedback" class="mui-navigate-right">
          <span class="mui-icon iconfont icon-wodefankui mcolor" style="font-size: 18px;margin-top: -3px;"></span> 帮助与反馈
        </a>
      </li>
    </ul>
  </div>-->
  <div class="content">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-arrowleft mui-pull-left"></a>
      <button id="btnpublish" class="mui-btn mui-btn-link mui-btn-nav mui-pull-right">
        确认发布
      </button>
      <h1 class="mui-title">创建订单任务</h1>
    </header>
    <div class="mui-content pullrefresh">
      <!--<div class="mui-scroll">-->
      <ul class="mui-table-view">
        <li class="mui-table-view-cell"><span id="orderTitle"><span class="mui-icon iconfont icon-dingdanxinxi2 tcolor" style="font-size:16px;"></span> 发单信息<span style="color:#ee6a6a;">(必填)</span></span>
        </li>
        <li id="liareaselect" class="mui-table-view-cell">
          <a class="mui-navigate-right" id="areaselect">
            <label class="lcolor">游戏区服</label><input type="text" readonly="true" id="zoneserver" v-model="serverName" placeholder="请选择您所在的区服" maxlength="50">
            <input id="zoneserverid" type="text" v-model="serverId">
          </a>
        </li>
        <li class="mui-table-view-cell">
          <label class="lcolor">订单任务</label><input type="text" id="title" placeholder="最多28个中文字符" maxlength="56">
        </li>
        <li class="mui-table-view-cell">
          <label class="lcolor">订单价格</label><input type="tel" id="price" placeholder="请输入金额" maxlength="5" style="width:62%;"><span class="unit">元</span>
        </li>
        <li class="mui-table-view-cell">
          <label class="lcolor">代练时限</label><input type="tel" id="timelimit" placeholder="要求时间" maxlength="5" style="width:62%;"><span class="unit">小时</span>
        </li>
        <li class="mui-table-view-cell">
          <label class="lcolor">安全保证金</label><input type="tel" id="ensure1" placeholder="请输入金额" maxlength="5" style="width:62%;"><span class="unit">元</span> <span id="ensure1_help" class="mui-icon mui-icon-help bcolor" style="font-size:18px"></span>
        </li>
        <li class="mui-table-view-cell">
          <label class="lcolor">效率保证金</label><input type="tel" id="ensure2" placeholder="请输入金额" maxlength="5" style="width:62%;"><span class="unit">元</span> <span id="ensure2_help" class="mui-icon mui-icon-help bcolor" style="font-size:18px"></span>
        </li>
        <li id="ligameacc" class="mui-table-view-cell">
          <label class="lcolor">游戏帐号</label><input type="text" id="gameacc" placeholder="请输入您的游戏帐号" maxlength="50">
        </li>
        <li id="ligamepass" class="mui-table-view-cell">
          <label class="lcolor">游戏密码</label><input type="text" id="gamepass" placeholder="请输入您的游戏密码" maxlength="50" style="width:62%;"><span class="unit">&nbsp;&nbsp;&nbsp;</span> <span id="gamepass_help" class="mui-icon mui-icon-help bcolor" style="font-size:18px;display: none;"></span>
        </li>
        <li id="ligameactor" class="mui-table-view-cell">
          <label class="lcolor">游戏角色名</label><input type="text" id="gameactor" placeholder="请输入您的游戏角色名" maxlength="50">
        </li>
      </ul>
      <div class="title">

      </div>
      <ul class="mui-table-view mui-table-view-radio">
        <li id='s1' class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <div class="mui-media-body blackcolor">
              <span class="mui-icon iconfont icon-you ycolor" style="font-size:20px;"></span> 发布到优质频道
              <p class='mui-ellipsis'>经平台认证实力打手区，更高质高效完成订单</p>
            </div>
          </a>
          <div id='Quality_tips' style="padding:11px 0;color: #999;font-size: 13px;">
            <!--<span class="mui-icon mui-icon-flag ccolor" style="font-size:18px"></span>-->温馨提示：如果您选择将任务发布到优质频道，请将订单任务名称填写规范。<br /><span class="Prompt">段位赛范例：</span><br />1、青铜3-白银3（已有60胜点）<br />2、黄金5-黄金4的100胜点<br />3、大师1胜点-150胜点<br /><span class="Prompt">晋级赛范例：</span><br />1、白银1-黄金5 晋级赛 已1负1胜 <br />2、白银1-黄金5 晋级赛 生死局<br /><span class="Prompt">定位赛范例：</span><br />1、新号定位赛10场 <br />2、黄金定位赛6场
          </div>
        </li>

        <!--<p style="padding: 0 15px;"></p>-->
        <li id='s2' class="mui-table-view-cell mui-selected">
          <a class="mui-navigate-right">
            <div class="mui-media-body blackcolor">
              <span class="mui-icon iconfont icon-gong gcolor" style="font-size:20px;"></span> 发布到公共频道
              <p class='mui-ellipsis'>平台所有代练都可以看到订单，加快接手速度</p>
            </div>
          </a>
        </li>
      </ul>
      <div class="title">

      </div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell"><span id="orderTitle"><span class="mui-icon iconfont icon-dai tcolor" style="font-size:19px"></span> 代练要求<span style="color:#38a3eb;">(非必填)</span></span>
        </li>
        <li class="mui-table-view-cell">
          <textarea id="require" class="tcolor" style="border: none;font-size: 0.9rem;margin-bottom:0px;padding:0px 0px;height: 60px;" placeholder="请输入代练的具体要求(200字内)" maxlength="400"></textarea>
        </li>
      </ul>
      <div class="title"></div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell"><span id="orderTitle"><span class="mui-icon iconfont icon-ibkkj tcolor" style="font-size:18px"></span> 其他信息<span style="color:#38a3eb;">(非必填)</span></span>
        </li>
        <li id="licurrinfo" class="mui-table-view-cell">
          <label class="lcolor">游戏说明</label>
          <div style="width:70%;float:left;">
            <textarea id="currinfo" class="tcolor" style="border: none;font-size: 0.9rem;margin-bottom:0px;padding:0px 0px;height: auto;" placeholder="请输入游戏说明(100字内)" maxlength="200"></textarea>
          </div>
        </li>
        <li class="mui-table-view-cell" id="divgamemobile" style="display: none;">
          <label class="lcolor">验证手机</label><input type="text" id="gamemobile" placeholder="请输入登录验证码的手机" maxlength="50">
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right" id="acselect">
            <label class="lcolor">接单要求</label><input type="text" readonly="true" id="acceptcancel" placeholder="请选择您期望接单打手介入率" maxlength="50">
            <input id="acceptcancelid" type="hidden" value="0" />
          </a>
        </li>
        <li class="mui-table-view-cell">
          <label class="lcolor">联系电话</label><input type="tel" id="Tel" placeholder="请输入您的联系电话" maxlength="50">
        </li>
        <li class="mui-table-view-cell">
          <label class="lcolor">联系QQ</label><input type="tel" id="QQ" placeholder="请输入您的联系QQ" maxlength="50">
        </li>
      </ul>
      <div class="title"></div>
      <!--<ul class="mui-table-view">
                <li class="mui-table-view-cell"><span style="font-size:14px;"><span class="mui-icon iconfont icon-guanyu tcolor" style="font-size:18px"></span> 备注<span style="color:#38a3eb;">(非必填)</span></span>
                </li>
                <li class="mui-table-view-cell">
                    <label class="lcolor">接单价格</label><input type="tel" id="baseprice" placeholder="请输入金额" maxlength="5" style="width:62%;border: none;font-size: 0.9rem;margin-bottom:0px;padding:0px 0px;height: auto;"><span class="unit">元</span>
                </li>
                <li class="mui-table-view-cell">
                    <label class="lcolor">简要标题</label><input type="text" id="lable1" placeholder="请输入简要标题" maxlength="56" style="width:70%;border: none;font-size: 0.9rem;margin-bottom:0px;padding:0px 0px;height: auto;">
                </li>
                <li class="mui-table-view-cell">
                    <textarea id="comment" class="tcolor" style="border: none;font-size: 0.9rem;margin-bottom:0px;padding:0px 0px;height: 60px;" placeholder="请简要的概述订单内容(200字内)" maxlength="800"></textarea>
                </li>
            </ul>-->
      <!--</div>-->
    </div>
    <!--导航遮罩-->
    <div id="Navmask" class="hide" style="width: 100%;height: 100%;opacity:0.2;background: #000;z-index:999;position: fixed;top: 0; left: 0;"></div>
  </div>
</template>

<!--
<style  type="text/css">

  .ui-logo {
    width: 60px;
    height: 600px;
    margin: 60px auto 25px auto;
    background-position: left center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 60px;
  }

  .money {
    font-size: 18px;
    color: #ee6a6a;
  }

  .span_money {
    position: absolute;
    right: 15px;
    font-size: 18px;
    color: #ee6a6a;
  }

  .span_money_unit {
    position: absolute;
    right: 15px;
    font-size: 18px;
    color: #777777;
  }

  .mcolor {
    color: #999;
    font-size: 20px;
    vertical-align: middle;
  }
  #personHTML .iconfont{
    margin-right: 5px;
  }
  .divleft {
    float: left;
    width: 33%;
    text-align: center;
  }

  .divcenter {
    border-left-style: dotted;
    border-left-color: #BBBBBB;
    border-left-width: thin;
    float: left;
    width: 33%;
    text-align: center;
  }

  .divright {
    border-left-style: dotted;
    border-left-color: #BBBBBB;
    border-left-width: thin;
    float: left;
    width: 33%;
    text-align: center;
  }

  .release {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 11111;
  }

  .li_release {
    list-style-type: none;
    float: left;
    width: 30%;
    margin-right: 5%;
    text-align: center;
    margin-bottom: 20px;
  }

  .end {
    margin-right: 0;
  }

  .mui-ios .mui-table-view-cell,
  .mui-android .mui-table-view-cell {
    /*清除点击后的背景*/
    background: none;
  }

  .mui-pull-top-pocket {
    top: -80px !important;
  }
  #copyorder{
    width:27.3rem;
    background-size:100% 100%;
    height:43.3rem;
    position: absolute;
    top: 10%;
    margin-left: 2.3rem;
    box-shadow: none;
  }
  .mui-table-view:after{
    background-color: #e7e7e7;
  }
  .mui-table-view:before{
    background-color: #e7e7e7;
  }
  .mui-table-view-cell:after{
    height: 0;
  }
  .mui-table-view-cell{
    font-size: 14px;
  }
  .mui-table-view{
    color: #444;
  }

  p{
    color: #444;
  }

  /*底部导航*/
  #Nav{
    padding-top: 5px;
    border-top:1px solid #ededed;
  }
  #Nav a{
    /*	display: table-cell;*/

    width: 25%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    /* white-space: nowrap;
     text-overflow: ellipsis;*/
    color: #929292;
    float: left;
    padding: 0;
    margin: 0;
  }
  #Nav .active{
    color: #38a3eb;
  }
  #Nav .navtab {
    display:block;
    overflow:hidden;
    font-size:14px;
    text-overflow:ellipsis
  }

  html,body,#Nav{
    max-width: 640px;
    margin: 0 auto;
  }
</style>-->
<style type="text/css">
  html,body {
    background-color: #f7f7f7;
    font-family: "微软雅黑";
    height: 100%;
    max-width: 640px;
    margin: 0 auto;
  }
  .area {
    margin: 30px auto 0px auto;
  }

  .mui-input-group {
    margin-top: 10px;
  }

  .mui-input-group:first-child {
    margin-top: 30px;
  }

  .mui-input-group label {
    width: 20%;
  }

  .mui-input-row label~input,
  .mui-input-row label~select,
  .mui-input-row label~textarea {
    width: 80%;
  }

  .mui-checkbox input[type=checkbox],
  .mui-radio input[type=radio] {
    top: 6px;
  }

  .mui-content-padded {
    margin-top: 25px;
  }

  .mui-btn-block {
    padding: 12px 0px;
  }

  .mcolor {
    margin: 10px 5px 5px 30px;
    color: #333333;
  }

  .bcolor {
    color: #FF6700;
  }

  .ccolor {
    color: #007AFF;
  }

  .tipcolor {
    background-color: #efeff4;
  }

  .title {
    /*margin: 10px 15px 7px;
        color: #6d6d72;
        font-size: 15px;*/
    height: 10px;
    background: none;
  }

  .lcolor {
    font-size: 0.8rem;
    color: #444;
    display: inline-block;
    width: 25%;
    float: left;
  }

  .scolor {
    font-size: 0.9rem;
    color: #444;
    width: 70%;
    display: inline-block;
  }

  .tcolor {
    font-size: 0.9rem;
    color: #999;
  }

  .blackcolor {
    font-size: 0.9rem;
    color: #444;
  }

  .ycolor {
    color: #d33e3a;
  }

  .gcolor {
    color: #2e92ce;
  }

  .tip {
    padding: 0.26rem 0.6rem;
    color: #3399ff;
    font-size: 0.9rem;
    line-height: 1rem;
  }

  .unit {
    color: #666;
    font-size: 0.8rem;
    width: auto;
    margin-right: 0px;
  }

  .mui-popup {
    width: 80% !important;
    color: #444;
  }

  .mui-ios .mui-table-view-cell,
  .mui-android .mui-table-view-cell {
    /*清除点击后的背景*/
    background: none;
  }

  #hdfoot {
    height: 52px;
    display: block;
  }

  .mui-content {
    height: auto;
    background-color: #f7f7f7;
  }

  .mui-popup-title {
    color: #444;
  }

  .mui-popup-title+.mui-popup-text {
    color: #666;
  }

  .mui-popup-input input {
    color: #444;
    height: 36px;
    border-color: #ececec;
  }

  .mui-checkbox input[type=checkbox]:checked:before,
  {
    color: #fff;
  }

  .mui-bar-nav {
    box-shadow: none;
    padding-top: 4px;
    height: 50px;
  }

  a {
    color: #999;
  }

  .mui-title {
    font-weight: normal;
    color: #444;
  }

  .mui-bar-nav~.mui-content {
    padding-top: 50px;
  }

  .mui-content>.mui-table-view:first-child {
    margin: 0;
  }
  .mui-bar .mui-btn-link{
    color: #38a3eb;
  }
  .mui-bar .mui-btn-nav.mui-pull-right{
    margin-right: 5px;
    font-size: 14px;
  }
  .mui-table-view-cell:after{
    background-color: #e7e7e7;
  }
  .mui-table-view:after,.mui-table-view:before{
    height: 0;
  }
  #orderTitle{
    font-size:14px;
    color: #444;
  }
  .mui-table-view-radio .mui-table-view-cell>a:not(.mui-btn){
    margin-right: 0;
  }
  .mui-table-view-radio .mui-table-view-cell{
    padding-right: 15px;
  }
  input[type=color], input[type=date], input[type=datetime-local], input[type=datetime], input[type=email], input[type=month], input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], input[type=week], select, textarea{
    width:70%;
    border: none;
    font-size: 0.8rem;
    margin-bottom:0px;
    padding:0px 0px;
    height: auto;
  }
  #put{
    width: 80%;
    margin-left: 10%;
    margin-bottom: 15px;
    height: 40px;
    padding: 10px 15px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3px;
  }
  p{
    font-size: 13px;
    color: #999;
  }
  .Prompt{
    color: #666;
    margin-top: 5px;
    display: inline-block;
  }
  .hide{
    display: none;
  }
  .mui-content{

    width: 100%;
    max-width: 640px;
    background-color: #f7f7f7;

  }
  .mui-bar {
    box-shadow: none;
    padding-top: 4px;
    height: 50px;
    max-width: 640px;
    margin: 0 auto;
  }

</style>
<script type="text/ecmascript-6">
  import api from '@/fetch/api';
  let area1;
  export default{
    data(){
      return {
        publishType: 1,
        serverId: 1,
        serverName: '',
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
        LAreaData1 : [{
          "id": "2",
          "name": "一级",
          "child": [{
            "id": "21",
            "name": "二级1",
            "child": [{
              "id": "211",
              "name": "三级1"
            }, {
              "id": "212",
              "name": "三级2"
            }, {
              "id": "213",
              "name": "三级3"
            }]
          }, {
            "id": "22",
            "name": "二级2"
          }, {
            "id": "23",
            "name": "二级3"
          }]
        }]
      }
    },
    watch: {
      serverName(val){
        console.log(val);
        //split 字符串转数组
        this.serverId = area1.valueTo.split(',').pop();
        this.mui.alert(this.serverId);
      }
    },
    mounted(){
      area1 = new LArea();
      area1.init({
        'trigger': '#zoneserver', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': 1, //选择完毕后id属性输出到该位置  这里修改了 valueTo 为真时，能取到 area1.valueTo
        'keys': {
          id: 'id',
          name: 'name'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'level': 3, //菜单级数
        'data': this.LAreaData1 //数据源
      });
    },
  }
</script>
