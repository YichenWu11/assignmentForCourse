<template>
  <div class="header">
    <!--添加动画效果-->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceIn"
      leave-active-class="animate__bounceOut"
    >
      <Diagram v-show="index === 0" key="0"/>
      <StudyMaterial v-show="index === 1" key="1"/>
      <MyThinking v-show="index === 2" key="2"/>
      <MyCareer v-show="index === 3" key="3"/>
    </transition-group>
    <!-- <Diagram v-show="index === 0"/>
    <StudyMaterial v-show="index === 1"/>
    <MyThinking v-show="index === 2"/>
    <MyCareer v-show="index === 3"/> -->
  </div>
</template>

<script>
import 'animate.css'
import StudyMaterial from "./StudyMaterial.vue"
import Diagram from "./Diagram.vue"
import MyThinking from "./MyThinking.vue"
import MyCareer from "./MyCareer.vue"


export default {
  name: "MainContent",
  components: {
    StudyMaterial,
    Diagram,
    MyThinking,
    MyCareer,
  },
  props:["index"]
}
</script>

<style scoped>
  .header {
    display: flex;
    top: -100px;
    width: 1000px;
    height: 1000px;
    background-color: ghostwhite;
    /*border: 5px solid white;*/
    border-radius: 30px;
    box-shadow: 0px 0px 10px grey;
    padding: 0;
    margin: 0;
  }

</style>