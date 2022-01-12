<template>
  <div id="app">
    <TopPart id="top-part"/>
    <div id="content">
      <CarouselPart/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import TopPart from "./components/TopPart"
  import Footer from "./components/Footer"
  import CarouselPart from "./components/CarouselPart"

  export default {
    name: 'App',
    components: {
      TopPart,
      Footer,
      CarouselPart
    }
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
  box-shadow: 0 0 grey;
  transform: translateY(4px);
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
