<template>
  <div id="app">
    <TopPart id="top-part"/>
    <div id="content">
      <button class="btn" @click="turnLeft" id="btn1"> L </button>
      <MainContent id="main-content" :index="index"/>
      <button class="btn" @click="turnRight" id="btn2"> R </button>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import TopPart from "./components/TopPart"
  import MainContent from "./components/MainContent"
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {
      TopPart,
      MainContent,
      Footer
    },
    data(){
      return {
        index: 0
      }
    },
    methods:{
      turnLeft(){
        this.index > 0 ? this.index-- : this.index = 0;
      },
      turnRight(){
        this.index < 3 ? this.index++ : this.index = 3;
      }
    },
    watch:{
      index(val){
        if(val === 2){
          loadLine1();
        }
        else if(val === 3){
          loadLine2();
        } 
      }
    }
  }

  // 给文字加上类似笔记本的下划线
  function loadLine1() {
    // console.log("@@@");
    const lineHeight = 30;
    var content = document.querySelector('.passagetext');
    for (var h = 30; h <= 750; h += lineHeight) {
      // console.log(h);
      var line = document.createElement('div');
      line.className = 'line';
      line.style.top = h + 'px';
      content.appendChild(line);
    }
    // console.log(h);
    line = document.createElement('div');
    line.className = 'line';
    line.style.top = h + 'px';
    content.appendChild(line);
  }

  function loadLine2() {
    // console.log("@@@");
    const lineHeight = 30;
    var content = document.querySelector('.passagetext2');
    for (var h = 30; h <= 750; h += lineHeight) {
      // console.log(h);
      line = document.createElement('div');
      line.className = 'line';
      line.style.top = h + 'px';
      content.appendChild(line);
    }
    // console.log(h);
    var line = document.createElement('div');
    line.className = 'line';
    line.style.top = h + 'px';
    content.appendChild(line);
  }
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  margin: 0;
  padding: 0;
  background: rgb(273,273,273);
}

#top-part {
  position:relative;
}

#main-content {
  border-radius: 5px;
  position:relative;
  margin-top: 70px;
  z-index: 0;
  flex:1 1 auto;
  background-color: ghostwhite;
}

#content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex:1 1 auto;
  background-color: whitesmoke;
}

.btn {
  position:sticky;
  top: 100px;
  width: 60px;
  height: 300px;
  margin: 50px 100px 100px 100px;
  opacity: 0.8;
  background-color: white;
  color: gray;
  border: 2px solid lightgrey;
  border-radius: 10px;
  font-weight: bold;
  transition-duration: 0.4s;
  z-index: 1;
  flex:1 1 auto;
}

.btn:hover {
  background-color: lightgray;
  color: ghostwhite;
  box-shadow: 0 5px grey;
}

.btn:active {
  box-shadow: 0 0px grey;
  transform: translateY(4px);
}

.line {
  height: 2px;
  width: 100%;
  background-color: gray;
  position: absolute;
  /* overflow-y: auto; */
}

@media screen and (max-width:1000px) {
  #btn1 {
    margin-left: 200px;
    opacity: 0.4;
  }
  #btn2 {
    margin-right: 200px;
    opacity: 0.4;
  }
}

@media screen and (max-width:700px) {
  #btn1 {
    /*position: relative;*/
    margin-left: 300px;
    opacity: 0.4;
  }
  #btn2 {
    /*position: relative;*/
    margin-right: 300px;
    opacity: 0.4;
  }
}
</style>
