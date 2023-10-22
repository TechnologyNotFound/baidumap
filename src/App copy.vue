<template>
    <div id="app">
   
   
   
    <div id="container" ref="container"></div>

   <div id="driving_way1" >


		<div  class="item" :class="{'select':(hover== 0)}"  @click="changeSelect(1)" @mouseover="hov(0)" @mouseout="unhov()">
        	<img src="./img/gps.png" v-if="hover!=0"  style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
        <img src="./img/gps-black.png" v-if="hover==0" style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px">无人机位置</span>
        </div>


		<div  class="item" :class="{'select':(hover== 1)}"  @click="changeSelect(2)" @mouseover="hov(1)" @mouseout="unhov()">
        	<img src="./img/data.png" v-if="hover!=1"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="./img/data-black.png" v-if="hover==1" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px">数据显示</span>
        </div>

		<div  class="item" :class="{'select':(hover== 2)}"  @click="changeSelect(3)" @mouseover="hov(2)" @mouseout="unhov()">
        	<img src="./img/plane_control.png" v-if="hover!=2"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="./img/plane_control_black.png" v-if="hover==2" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px">飞控参数</span>
        </div>


   </div>

   <wplane :wplane="wplane" v-if="selected==1 "></wplane>
   
   
   
     
    </div>
   </template>
    
   <script>
   import wplane from '@/components/wplane.vue';
   import plane from './img/plane.png';
   import Swiper from 'swiper'
   
          
            
      
   
   export default {
    
    name: 'App',
    components:{
       wplane
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
       temperature:"NA",
       planeLat:36.16685,
       planeLon:120.504607,
       planeAlt:10,
       marker:null,
       time:0,
	   selected:0,
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
   
     pathLine:null,
     trackAni:null,
     hover:-1,
    wplane:{
       "map":this.map,
       "planeLat":this.planeLat,
       "planeLon":this.planeLon,
       "planeAlt":this.planeAlt,
       "path":this.path,
       "marker":this.marker,
       "temperature":"NA"
   
     }
    
   
   
     }
    },
   
    methods:{
		changeSelect(t){
			this.selected=t;
		},
       changed(){
           this.wplane.planeLon=120.504607;
           this.wplane.planeLat=36.16685;
           this.planeLon=120.504607;
           this.planeLat=36.16685;
           var point = new BMapGL.Point(120.504607,36.16685);
       //   this.wplane.map.centerAndZoom(point, 25);//地图视野转到无人机的位置
           this.wplane.marker.setPosition(point);//修改wplane的新坐标
       },
       
    
   
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
   
           function changing(event){

               temp.planeLon+=0.000002;//=position.lnt;
               temp.planeLat+=0.000002 ;//=position.lat;
               var point = new BMapGL.Point(temp.planeLon,temp.planeLat);
               temp.marker.setPosition(point);//修改wplane的新坐标
               temp.temperature=event.data;
               // m.flyTo(point);
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
           }
           websocket.onerror=function () {
               alert('websocket通信错误')
           }
           window.onbeforeunload=function () {
               websocket.close();
           }
   
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
   
   
   
     },
      unhov(){
         this.hover=-1;
     },
     hov(t){
         this.hover=t;

     },
     removePath(){
         this.map.removeOverlay(this.pathLine);
         this.trackAni.cancel();
     },
     getPos(){
       var point = new BMapGL.Point(this.wplane.planeLon,this.wplane.planeLat);
       this.map.flyTo(point);
       console.log(this.map.lat);
     },
   
     getPath(){
       var point = [];
       for (var i = 0; i < this.path.length; i++) {
           point.push(new BMapGL.Point(this.path[i].lng, this.path[i].lat));
       }
       var pl = new BMapGL.Polyline(point);
     this.pathLine=pl;
       
       
       var trackAni = new BMapGLLib.TrackAnimation(this.map, pl, {
           overallView: true, // 动画完成后自动调整视野到总览
           tilt: 30,          // 轨迹播放的角度，默认为55
           duration: 2500,   // 动画持续时长，默认为10000，单位ms
           delay: 0        // 动画开始的延迟，默认0，单位ms
       });
     this.trackAni=trackAni;
   
   
     this.trackAni.start();
     }
    
    },
   
    mounted(){
      this.mapInit();
       this.wplaneInit();
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
   
   </style>
   