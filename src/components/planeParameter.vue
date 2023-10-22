<template>
    
    <div id="driving_way1">
        <vue-scroll :ops="ops">

	<div  class="itemBack" :class="{'select':(hover== '2-(-1)')}"  @click="changeLeftSelected(0)" @mouseover="hov('2-(-1)')" @mouseout="unhov()">
        	<img src="../img/backforward.png" v-if="hover!='2-(-1)'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/backforward.png" v-if="hover=='2-(-1)'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-(-1)')}">返回</span>
        </div>

		<div  class="item" :class="{'select':(hover== '2-0')}"  @click="changeRightSelected(2)" @mouseover="hov('2-0')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-0'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-0'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-0')}">PID_1P</span>
        </div>


		<div  class="item" :class="{'select':(hover== '2-1')}"  @click="changeRightSelected(2)" @mouseover="hov('2-1')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-1'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-1'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-1')}">PID_ONE_POWER</span>
        </div>


		<div  class="item" :class="{'select':(hover== '2-2')}"  @click="changeRightSelected(2)" @mouseover="hov('2-2')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-2'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-2'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-2')}">PID_ONE_LAG</span>
        </div>

		<div  class="item" :class="{'select':(hover== '2-3')}"  @click="changeRightSelected(2)" @mouseover="hov('2-3')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-3'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-3'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-3')}">PID_ONE_FB</span>
        </div>

		<div  class="item" :class="{'select':(hover== '2-4')}"  @click="changeRightSelected(2)" @mouseover="hov('2-4')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-4'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-4'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-4')}">PID_MODE</span>
        </div>

		<div  class="item" :class="{'select':(hover== '2-5')}"  @click="changeRightSelected(2)" @mouseover="hov('2-5')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-5'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-5'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-5')}">PAR69</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-6')}"  @click="changeRightSelected(2)" @mouseover="hov('2-6')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-6'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-6'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-6')}">PAR70</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-7')}"  @click="changeRightSelected(2)" @mouseover="hov('2-7')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-7'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-7'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-7')}">RCINMODE</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-8')}"  @click="changeRightSelected(2)" @mouseover="hov('2-8')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-8'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-8'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-8')}">UNLOCKPWM</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-9')}"  @click="changeRightSelected(2)" @mouseover="hov('2-9')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-9'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-9'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-9')}">UNLOCKOO</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-10')}"  @click="changeRightSelected(2)" @mouseover="hov('2-10')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-10'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-10'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-10')}">AUTOGYRCAL</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-11')}"  @click="changeRightSelected(2)" @mouseover="hov('2-11')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-11'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-11'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-11')}">BETTERYCELLS</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-12')}"  @click="changeRightSelected(2)" @mouseover="hov('2-12')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-12'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-12'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-12')}">LVWARN</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-13')}"  @click="changeRightSelected(2)" @mouseover="hov('2-13')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-13'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-13'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-13')}">LVREIN</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-14')}"  @click="changeRightSelected(2)" @mouseover="hov('2-14')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-14'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-14'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-14')}">LVDOWN</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-15')}"  @click="changeRightSelected(2)" @mouseover="hov('2-15')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-15'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-15'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-15')}">CENPOSX</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-16')}"  @click="changeRightSelected(2)" @mouseover="hov('2-16')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-16'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-16'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-16')}">CENPOSY</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-17')}"  @click="changeRightSelected(2)" @mouseover="hov('2-17')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-17'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-17'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-17')}">CENPOSZ</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-18')}"  @click="changeRightSelected(2)" @mouseover="hov('2-18')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-18'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-18'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-18')}">TAKEOFFHIGH</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-19')}"  @click="changeRightSelected(2)" @mouseover="hov('2-19')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-19'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-19'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-19')}">TAKEOFFSPEED</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-20')}"  @click="changeRightSelected(2)" @mouseover="hov('2-20')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-20'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-20'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-20')}">LANDSPEED</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-21')}"  @click="changeRightSelected(2)" @mouseover="hov('2-21')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-21'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-21'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-21')}">ANDSPEEDMAX</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-22')}"  @click="changeRightSelected(2)" @mouseover="hov('2-22')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-22'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-22'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-22')}">AUTOLAND</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-23')}"  @click="changeRightSelected(2)" @mouseover="hov('2-23')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-23'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-23'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-23')}">HEATSWITCH</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-24')}"  @click="changeRightSelected(2)" @mouseover="hov('2-24')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-24'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-24'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-24')}">HEATTMP</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-25')}"  @click="changeRightSelected(2)" @mouseover="hov('2-25')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-25'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-25'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-25')}">MAXSPEED_H</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-26')}"  @click="changeRightSelected(2)" @mouseover="hov('2-26')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-26'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-26'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-26')}">MAXSPEED_C</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-27')}"  @click="changeRightSelected(2)" @mouseover="hov('2-27')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-27'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-27'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-27')}">MAXSPEED_U</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-28')}"  @click="changeRightSelected(2)" @mouseover="hov('2-28')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-28'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-28'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-28')}">MAXSPEED_C</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-29')}"  @click="changeRightSelected(2)" @mouseover="hov('2-29')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-29'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-29'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-29')}">MAXSPEED_D</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-30')}"  @click="changeRightSelected(2)" @mouseover="hov('2-30')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-30'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-30'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-30')}">NUL</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-31')}"  @click="changeRightSelected(2)" @mouseover="hov('2-31')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-31'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-31'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-31')}">SAFEATT</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-32')}"  @click="changeRightSelected(2)" @mouseover="hov('2-32')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-32'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-32'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-32')}">MAGMODE</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-33')}"  @click="changeRightSelected(2)" @mouseover="hov('2-33')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-33'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-33'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-33')}">ACANGVELMAX</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-34')}"  @click="changeRightSelected(2)" @mouseover="hov('2-34')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-34'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-34'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-34')}">YCANGVELMAX</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-35')}"  @click="changeRightSelected(2)" @mouseover="hov('2-35')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-35'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-35'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-35')}">YCANGACCMAX</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-36')}"  @click="changeRightSelected(2)" @mouseover="hov('2-36')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-36'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-36'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-36')}">RT_ALT</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-37')}"  @click="changeRightSelected(2)" @mouseover="hov('2-37')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-37'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-37'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-37')}">RT_SPD</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-38')}"  @click="changeRightSelected(2)" @mouseover="hov('2-38')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-38'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-38'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-38')}">NUL</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-39')}"  @click="changeRightSelected(2)" @mouseover="hov('2-39')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-39'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-39'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-39')}">FILTER_GYR</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-40')}"  @click="changeRightSelected(2)" @mouseover="hov('2-40')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-40'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-40'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-40')}">FILTER_ACC</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-41')}"  @click="changeRightSelected(2)" @mouseover="hov('2-41')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-41'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-41'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-41')}">FUSION_ATT</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-42')}"  @click="changeRightSelected(2)" @mouseover="hov('2-42')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-42'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-42'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-42')}">FUSION_MAG</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-43')}"  @click="changeRightSelected(2)" @mouseover="hov('2-43')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-43'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-43'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-43')}">FUSION_HOR</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-44')}"  @click="changeRightSelected(2)" @mouseover="hov('2-44')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-44'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-44'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-44')}">FUSION_VER</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-45')}"  @click="changeRightSelected(2)" @mouseover="hov('2-45')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-45'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-45'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-45')}">FENCE_MODE</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-46')}"  @click="changeRightSelected(2)" @mouseover="hov('2-46')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-46'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-46'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-46')}">FENCE_RADIUS</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-47')}"  @click="changeRightSelected(2)" @mouseover="hov('2-47')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-47'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-47'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-47')}">FENCE_WIDTH_X</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-48')}"  @click="changeRightSelected(2)" @mouseover="hov('2-48')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-48'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-48'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-48')}">FENCE_WIDTH_Y</span>
        </div>



        <div  class="item" :class="{'select':(hover== '2-49')}"  @click="changeRightSelected(2)" @mouseover="hov('2-49')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-49'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-49'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-49')}">FENCE_HEIGHT</span>
        </div>



        <div  class="item" :class="{'select':(hover== '2-50')}"  @click="changeRightSelected(2)" @mouseover="hov('2-50')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-50'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-50'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-50')}">COM1_BAUD</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-51')}"  @click="changeRightSelected(2)" @mouseover="hov('2-51')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-51'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-51'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-51')}">COM2_BAUD</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-52')}"  @click="changeRightSelected(2)" @mouseover="hov('2-52')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-52'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-52'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-52')}">COM2_MODE</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-53')}"  @click="changeRightSelected(2)" @mouseover="hov('2-53')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-53'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-53'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-53')}">COM2_BAUD</span>
        </div>


        <div  class="item" :class="{'select':(hover== '2-54')}"  @click="changeRightSelected(2)" @mouseover="hov('2-54')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-54'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-54'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-54')}">RGBOUT_ENA</span>
        </div>

        <div  class="item" :class="{'select':(hover== '2-55')}"  @click="changeRightSelected(2)" @mouseover="hov('2-55')" @mouseout="unhov()">
        	<img src="../img/plane_control.png" v-if="hover!='2-55'"  style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
        <img src="../img/plane_control-black.png" v-if="hover=='2-55'" style="height:22px;width:22px;padding-top:3px;padding-left:7px"/>
            <span style="font-size:12px;padding-top:6px;padding-left:7px" :class="{'selectFont':(hover== '2-55')}">AVOID_HDIST</span>
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
           width: 150px;
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