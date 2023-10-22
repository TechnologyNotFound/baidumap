<template>
    
    <div id="driving_way1">
        

        <vue-scroll :ops="ops">

	<div  class="itemBack" :class="{'select':(hover== '1-(-1)')}"  @click="changeLeftSelected(0)" @mouseover="hov('1-(-1)')" @mouseout="unhov()">
        	<img src="../img/backforward.png" v-if="hover!='1-(-1)'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/backforward.png" v-if="hover=='1-(-1)'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-(-1)')}">返回</span>
        </div>

		<div  class="item" :class="{'select':(hover== '1-0')}"  @click="changeRightSelected(2)" @mouseover="hov('1-0')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-0'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-0'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-0')}">惯性传感器数据</span>
        </div>


		<div  class="item" :class="{'select':(hover== '1-1')}"  @click="changeRightSelected(2)" @mouseover="hov('1-1')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-1'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-1'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-1')}">温度传感器数据</span>
        </div>


		<div  class="item" :class="{'select':(hover== '1-2')}"  @click="changeRightSelected(2)" @mouseover="hov('1-2')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-2'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-2'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-2')}">高度数据</span>
        </div>

		<div  class="item" :class="{'select':(hover== '1-3')}"  @click="changeRightSelected(2)" @mouseover="hov('1-3')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-3'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-3'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-3')}">飞控运行模式</span>
        </div>

		<div  class="item" :class="{'select':(hover== '1-4')}"  @click="changeRightSelected(2)" @mouseover="hov('1-4')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-4'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-4'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-4')}">飞控速度数据</span>
        </div>

		<div  class="item" :class="{'select':(hover== '1-5')}"  @click="changeRightSelected(2)" @mouseover="hov('1-5')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-5'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-5'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-5')}">风速估计</span>
        </div>


        <div  class="item" :class="{'select':(hover== '1-6')}"  @click="changeRightSelected(2)" @mouseover="hov('1-6')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-6'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-6'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-6')}">目标姿态数据</span>
        </div>


        <div  class="item" :class="{'select':(hover== '1-7')}"  @click="changeRightSelected(2)" @mouseover="hov('1-7')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-7'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-7'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-7')}">目标速度数据</span>
        </div>

        <div  class="item" :class="{'select':(hover== '1-8')}"  @click="changeRightSelected(2)" @mouseover="hov('1-8')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-8'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-8'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-8')}">回航信息</span>
        </div>


        <div  class="item" :class="{'select':(hover== '1-9')}"  @click="changeRightSelected(2)" @mouseover="hov('1-9')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-9'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-9'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-9')}">电压电流数据</span>
        </div>


        <div  class="item" :class="{'select':(hover== '1-10')}"  @click="changeRightSelected(2)" @mouseover="hov('1-10')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-10'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-10'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-10')}">GPS传感器信息</span>
        </div>


        <div  class="item" :class="{'select':(hover== '1-11')}"  @click="changeRightSelected(2)" @mouseover="hov('1-11')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-11'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-11'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-11')}">遥控器数据</span>
        </div>


        <div  class="item" :class="{'select':(hover== '1-12')}"  @click="changeRightSelected(2)" @mouseover="hov('1-12')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-12'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-12'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-12')}">实时控制帧</span>
        </div>

        <div  class="item" :class="{'select':(hover== '1-13')}"  @click="changeRightSelected(2)" @mouseover="hov('1-13')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='1-13'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='1-13'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '1-13')}">光流传感器数据</span>
        </div>


        </vue-scroll>
   </div>


</template>

<script>
export default {

    props:{
        selection:{
            type:Object
        }
    },
    methods:{
            unhov(){
            this.hover=-1;
        },
        hov(t){
            this.hover=t;

        },
        changeLeftSelected(t){
			this.selection.leftSelected=t;
		},
		changeRightSelected(t){
			this.selection.rightSelected=t;
		}
    },
    
    data(){
     return{
     
     hover:-1,
     ops: {
        vuescroll: {},
        scrollPanel: {
          scrollingX: false,//关闭横向滚动
        },
        rail: {
          keepShow: true,
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: "black", //滚动条颜色
          opacity: 0.8, //滚动条透明度
        },
      },
    
   
   
     }
    }

}
</script>

<style>

        .itemBack{
            width: 70px;
                height: 30px;
                border-radius: 15px;
                display: flex;
                flex-direction: row;
                background-color:#b0b7b7; 
            cursor: pointer;
            margin-left: 10px;
            margin-top: 10px;
        }

         #driving_way1{
                       position: fixed;
                       top: 10px;
                       left: 20px;
                       width: 270px;
                       height: 650px;
                       background: #fff;
                       box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
                       border-radius: 7px;
                       z-index: 99;
                       padding: 10px
                   }

        
   .item{
           width: 130px;
           height: 30px;
       	border-radius: 15px;
           display: flex;
           flex-direction: row;
           background-color:#b0b7b7; 
       cursor: pointer;
	   margin-left: 70px;
	   margin-top: 30px;
   
       }

    .select{
     background-color:#609afd; 
   
        }

    .selectFont{
        font-weight:bold;
    }
</style>