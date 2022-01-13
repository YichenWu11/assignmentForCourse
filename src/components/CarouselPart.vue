<template>
  <div>
    <el-carousel type="card" height="1200px" class="spe-carousel" :autoplay="false">
      <el-carousel-item v-for="item in 4" :key="item">
        <Diagram v-show="item === 1"/>
        <StudyMaterial v-show="item === 2"/>
        <MyThinking v-show="item === 3"/>
        <MyCareer v-show="item === 4"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import StudyMaterial from "./StudyMaterial.vue"
  import Diagram from "./Diagram.vue"
  import MyThinking from "./MyThinking.vue"
  import MyCareer from "./MyCareer.vue"
  export default {
    name: "CarouselPart",
    components: {
      StudyMaterial,
      Diagram,
      MyThinking,
      MyCareer
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: whitesmoke;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 3px 10px 10px grey;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: ghostwhite;
    border: 1px solid grey;
    border-radius: 20px;
    /*opacity: 0.75;*/
    box-shadow: 3px 10px 10px grey;
  }

  .spe-carousel {
    display: block;
    width: 1530px;
    top: -30px;
    z-index: 0;
  }

  .line {
    height: 2px;
    /*width: calc(100% - 20px);*/
    width: 100%;
    background-color: gray;
    position: absolute;
    /* overflow-y: auto; */
  }

</style>