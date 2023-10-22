<template>

    <div id="driving_way2">

    </div>

</template>

<script>
   import * as echarts from 'echarts';

    

export default {
    data(){
        return{
            data : [],
            x:0,
            y:0,
            xData:[],
            yData:[],
            option:{},
            myChart:{},
            wid:50,
            hight:30
        }
    },


    mounted(){
      var me=this;
        for (let i = 0; i <= this.wid; i++) {
    me.xData.push(i);
    }

    for (let j = 0; j <= this.hight; j++) {
      me.yData.push(j);
    }
    var xData=me.xData;
    var yData=me.yData;
    var data=me.data;
    me.option = {
  tooltip: {},
  xAxis: {
    type: 'category',
    data: xData
  },
  yAxis: {
    type: 'category',
    data: yData
  },
  visualMap: {
    min: 0,
    max: 50,
    calculable: true,
    realtime: false,
    inRange: {
      color: [
        '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026'
      ]
    }
  },
  series: [
    {
      name: 'Gaussian',
      type: 'heatmap',
      data: data,
      emphasis: {
        itemStyle: {
          borderColor: '#333',
          borderWidth: 1
        }
      },
      progressive: 1000,
      animation: false
    }
  ]
};

var option=me.option;

   $(document).ready(function(){
var chartDom = document.getElementById('driving_way2');
me. myChart = echarts.init(chartDom);
me.myChart.setOption(option);
    });

    },

    methods:{

      
        
        draw(temperature){

            var me=this;

            if(me.data.length>=this.wid*this.hight){
                me.data[me.y*this.wid+me.x][2]=temperature;
            }

            else{
            me.data.push([me.x,me.y,temperature]);
            }

            me.x++;
            if(me.x>=this.wid){
              me.x=0;
              me.y++;
            }

            if(me.y>=this.hight){
              me.y=0;
            }

            

            me.option.series[0].data=me.data;
            

            me.myChart.setOption(me.option);



        }

    }

}
</script>

<style >
    #driving_way2{
                    position: fixed;
                    top: -750px;
                    left: 360px;
                    width: 900px;
                    height:550px;
                    background: #fff;
                    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
                    border-radius: 7px;
                    z-index: 99;
                    padding: 10px
                }

    
</style>