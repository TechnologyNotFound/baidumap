<template>

    <div id="driving_way1" >
		<div  class="item" :class="{'select':(hover== '0-0')}"  @click="changeRightSelected(1)" @mouseover="hov('0-0')" @mouseout="unhov()">
        	<img src="../img/earth.png" v-if="hover!='0-0'"  style="height:21px;width:21px;padding-top:3px;padding-left:7px"/>
        <img src="../img/earth-black.png" v-if="hover=='0-0'" style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px">无人机位置</span>
        </div>


		<div  class="item" :class="{'select':(hover== '0-1')}"  @click="changeLeftSelected(1)" @mouseover="hov('0-1')" @mouseout="unhov()">
        	<img src="../img/data.png" v-if="hover!='0-1'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/data-black.png" v-if="hover=='0-1'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px">数据显示</span>
        </div>

		<div  class="item" :class="{'select':(hover== '0-2')}"  @click="changeLeftSelected(2)" @mouseover="hov('0-2')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='0-2'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='0-2'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px">飞控参数</span>
        </div>


		<div  class="item" :class="{'select':(hover== '0-3')}"  @click="changeLeftSelected(3)" @mouseover="hov('0-3')" @mouseout="unhov()">
        	<img src="../img/plane_state.png" v-if="hover!='0-3'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_state_black.png" v-if="hover=='0-3'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px">飞控状态</span>
        </div>


        <div  class="item" :class="{'select':(hover== '0-4')}"  @click="changeShow()" @mouseover="hov('0-4')" @mouseout="unhov()">
        	<img src="../img/hot.png" v-if="hover!='0-4'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/hot_black.png" v-if="hover=='0-4'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px">热力图</span>
        </div>


        

   </div>

</template>

<script>
import store from '@/store';
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
		},

        changeShow(){
            store.state.showWhich.showHot^=1;
           
        }

    },
    
    data(){
     return{
     
     hover:-1
    
   
   
     }
    },
}
</script>

<style>
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
</style>