<template>
  <div>
    
        <div id="driving_way" >
          <div style="display: flex;flex-direction: row;">
            <h4>无人机图标:</h4>
            <img src="../img/plane.png" style="height: 50px;width: 50px;"/>
          </div>
        
        <div style="display: flex;flex-direction: row;">
            <h4>无人机纬度:</h4>
      <h4 style="padding-top: 3px;">{{wplane.planeLat}}</h4>
        </div>

    <div style="display: flex;flex-direction: row;">
            <h4>无人机经度:</h4>
      <h4 style="padding-top: 3px;">{{wplane.planeLon}}</h4>
        </div>

    <div style="display: flex;flex-direction: row;">
            <h4>无人机高度:</h4>
      <h4 style="padding-top: 3px;">{{wplane.planeAlt}}m</h4>
        </div>

        <div style="display: flex;flex-direction: row;">
            <h4>目前温度:</h4>
      <h4 style="padding-top: 3px;">{{wplane.temperature}}℃</h4>
        </div>    



            <div  class="item1" :class="{'select':(hover== 0)}"  @click="getPos()" @mouseover="hov(0)" @mouseout="unhov()">
        <img src="../img/gps.png" v-if="hover!=0"  style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
        <img src="../img/gps-black.png" v-if="hover==0" style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
                <span style="font-size:12px;padding-top:6px;padding-left:7px">位置</span>
            </div>





            <div class="item1" style="margin-top:20px" :class="{'select':(hover== 1)}"  @click="getPath()" @mouseover="hov(1)" @mouseout="unhov()" >
        <img src="../img/track.png" v-if="hover!=1"  style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
        <img src="../img/track-black.png" v-if="hover==1" style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
                <span style="font-size:12px;padding-top:5px;padding-left:7px">行驶轨迹</span>
            </div>



    <div class="item1" style="margin-top:20px" :class="{'select':(hover== 2)}"  @click="removePath()" @mouseover="hov(2)" @mouseout="unhov()">
      <img src="../img/clean.png" v-if="hover!=2"  style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
        <img src="../img/clean-black.png" v-if="hover==2" style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
                <span style="font-size:12px;padding-top:5px;padding-left:7px">清除行驶轨迹</span>
        </div>


        <div class="item1" style="margin-top:20px" :class="{'select':(hover== 3)}" @click="trace()"  @mouseover="hov(3)" @mouseout="unhov()">
      <img src="../img/trace-pos.png" v-if="hover!=3"  style="height:24px;width:24px;padding-top:4px;padding-left:8px"/>
        <img src="../img/trace-pos-black.png" v-if="hover==3" style="height:25px;width:25px;padding-top:3px;padding-left:7px"/>
                <span style="font-size:12px;padding-top:5px;padding-left:7px">实时跟踪</span>
        </div>


        
    



            
    </div> 
    
    </div>
</template>

<script>
 

export default {
  
 name: 'wplane',
 

 props:{
    wplane:{
      type:Object,
      default(){
        return null
      }
    }
 },

 

 data(){
  return{
      pathLine:null,
      trackAni:null,
      hover:-1,
      time:0
  }
 },
 methods:{
  showHot(){

  },

  trace(){
      this.axios.get("/server/pos/sendToExplorer").then();
  },
  

  unhov(){
      this.hover=-1;
  },

  hov(t){
      this.hover=t;
  },

  removePath(){
      this.wplane.map.removeOverlay(this.wplane.pathLine);
      this.trackAni.cancel();
  },
 getPos(){
    var point = new BMapGL.Point(this.wplane.planeLon,this.wplane.planeLat);
    this.wplane.map.flyTo(point);
    console.log(this.map.lat);
  },

  getPath(){

    if(this.wplane.pathLine!=null){
        this.wplane.map.removeOverlay(this.wplane.pathLine);
    }

    var point = [];
    for (var i = 0; i < this.wplane.path.length; i++) {
        point.push(new BMapGL.Point(this.wplane.path[i].lng, this.wplane.path[i].lat));
    }

    var pl = new BMapGL.Polyline(point);
  this.wplane.pathLine=pl;
    
    
    var trackAni = new BMapGLLib.TrackAnimation(this.wplane.map, pl, {
        overallView: true, // 动画完成后自动调整视野到总览
        tilt: 30,          // 轨迹播放的角度，默认为55
        duration: 2500,   // 动画持续时长，默认为10000，单位ms
        delay: 0        // 动画开始的延迟，默认0，单位ms
    });
  this.trackAni=trackAni;
  this.trackAni.start();
  },

  print(){
    console.log(this.wplane.planeAlt);
  }
 },
 mounted(){
    
 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#driving_way{
                    position: fixed;
                    top: 10px;
                    right: 20px;
                    width: 270px;
                    height: 650px;
                    background: #fff;
                    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
                    border-radius: 7px;
                    z-index: 99;
                    padding: 10px
                }


.item1{
        width: 130px;
        height: 30px;
    border-radius: 15px;
        display: flex;
        flex-direction: row;
        background-color:#b0b7b7; 
    cursor: pointer;

    }

.select{
  background-color:#609afd; 

}

</style>

