<template>
    <div id="app">
   
   
   
    <div id="container" ref="container" @click="print()"></div>

   <navigation v-if="selection.leftSelected==0 " :selection="selection"></navigation>
   
   <data-display v-if="selection.leftSelected==1 " :selection="selection"></data-display>

   <planeParameter v-if="selection.leftSelected==2 " :selection="selection"></planeParameter>

    <wplane :wplane="wplane" v-if="selection.rightSelected==1 " ref="wplane"></wplane>
   
   
   <thermodynamic ref="thermodynamic" v-show="showWhich.showHot==1"></thermodynamic>
   
     
    </div>
   </template>
    
   <script>

   import wplane from '@/components/wplane.vue';
   import navigation from '@/components/navigation.vue';
   import dataDisplay from '@/components/dataDisplay.vue';
   import plane from './img/plane.png';
   import planeParameter from '@/components/planeParameter.vue';
   import thermodynamic from './components/thermodynamic.vue';
   import store from '@/store';
   import Swiper from 'swiper'
   
          
            
      
   
   export default {
    
    name: 'App',
    components:{
       wplane,
	   navigation,
	   dataDisplay,
	   planeParameter,
       thermodynamic
    },
    watch:{
        'wplane.planeLat': function(newVal,oldVal) {
           // if(this.time>=1){
         var point = new BMapGL.Point(this.wplane.planeLon,newVal);
       //   this.wplane.map.centerAndZoom(point, 25);//地图视野转到无人机的位置
         this.wplane.marker.setPosition(point);//修改wplane的新坐标
   
           // }
           // else{
           // 	this.time++;
           // }
       },
   
   
    },
   
    data(){
     return{
       map:null,
       showWhich:{},
       temperature:"NA",
       planeLat:36.16685,
       planeLon:120.504607,
       planeAlt:10,
       marker:null,
	   selection:{
			'leftSelected':0,
			'rightSelected':1

	   },
       path : [{
           'lng': 120.504607,
           'lat': 36.16685
       }, {
   
           'lng': 120.504634,
           'lat': 36.167447
       }, {
           
           'lng': 120.504289,
           'lat': 36.1676
       }, {
           'lng': 120.503583,
           'lat': 36.16792
       },{
           'lng':120.503727,
           'lat':36.168292
       },{
           'lng':120.502955,
           'lat':36.168062
       },{
           'lng':120.503255,
           'lat':36.166689
       },{
           'lng':120.503947,
           'lat':36.166485
       },{
           'lng':120.504607,
           'lat':36.16685
       }
   
     ],
   
    wplane:{
       "map":this.map,
       "planeLat":this.planeLat,
       "planeLon":this.planeLon,
       "planeAlt":this.planeAlt,
       "path":this.path,
       "marker":this.marker,
       "temperature":"NA",
       "test":0
   
     }
    
   
   
     }
    },
   
    methods:{

        print(){
            this.$refs.wplane.print();    
        },

//         trace(){
//       this.axios.get("/server/pos/sendToExplorer").then();
//   },
         
   
     wplaneInit(){
           this.wplane.map=this.map;
           this.wplane.planeLat=this.planeLat;
           this.wplane.planeLon=this.planeLon;
           this.wplane.planeAlt=this.planeAlt;
           this.wplane.path=this.path;
           this.wplane.marker=this.marker;
   
           var websocket=null;
           if('WebSocket' in window){
               websocket =new ReconnectingWebSocket('ws://localhost:8099/webSocket');//写上后端启动WebSocket的启动地址
           }else{
               alert('该浏览器不支持websocket!');
           }
   
   
           var temp=this.wplane;
           var m=this.map;
           var me=this;
   

           function changing(event){
            temp.planeLon+=0.000002;//=position.lnt;
               temp.planeLat+=0.000002 ;//=position.lat;
               var point = new BMapGL.Point(temp.planeLon,temp.planeLat);
               temp.marker.setPosition(point);//修改wplane的新坐标
               temp.temperature=event.data;
               console.log("温度:"+temp.temperature);
           }
   
   
           websocket.onopen=function (event) {
               console.log('建立连接');
               console.log('欢迎使用WebSocket');
           }
           websocket.onclose=function (event) {
               console.log('连接关闭');
           }
           websocket.onmessage=function (event) {
               changing(event);
               if(me.$refs.thermodynamic!=null)
              me.$refs.thermodynamic.draw(temp.temperature);

           }
        //    websocket.onerror=function () {
        //        alert('websocket通信错误')
        //    }
           window.onbeforeunload=function () {
               websocket.close();
           }

        //    this.trace();
   
     },
   
     mapInit(){
     var map = new BMapGL.Map("container"); // 创建Map实例
     var point = new BMapGL.Point(this.planeLon,this.planeLat);//经度在前，纬度在后
     
     map.centerAndZoom(point, 25);
     this.map=map; 
     
   
       var myIcon = new BMapGL.Icon(plane, new BMapGL.Size(50, 50), {   
           // plane指定定位位置。  
           // 当标注显示在地图上时，其所指向的地理位置距离图标左上   
           // 角各偏移10像素和25像素。您可以看到在本例中该位置即是  
           // 图标中央下端的尖角位置。   
           anchor: new BMapGL.Size(10, 25),   
           // 设置图片偏移。  
           // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您  
           // 需要指定大图的偏移位置，此做法与css sprites技术类似。   
           // imageOffset: new BMapGL.Size(0, 0 - 25)   // 设置图片偏移   
       });   
   
       var marker = new BMapGL.Marker(point, {icon: myIcon}); 
   
   
       this.marker=marker;
       // var point = new BMapGL.Point(120.504194,36.167031);   
       // var marker = new BMapGL.Marker(point);        // 创建标注   
       // map.addOverlay(marker);                     // 将标注添加到地图中
       
       
       map.addOverlay(marker);                     // 将标注添加到地图中
       map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩
       this.$refs.wplane.print();
   
   
     },


    
    },
   
    mounted(){
      this.mapInit();
       this.wplaneInit();
       this.showWhich=store.state.showWhich;
    }
   
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

   
   #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    
   }

   #container{
    height: 800px;
    overflow: hidden;
    margin-top: -60px;
    
   }


   
   </style>
   