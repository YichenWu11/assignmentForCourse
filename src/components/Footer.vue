<template>
  <div class="footer">
    <MusicPlayer></MusicPlayer>
    <div id="welcome" style="padding-top:30px;color:white;">
      <p>Welcome to Wu Yichen's FinalWork page&nbsp;&nbsp;</p>
    </div>
  </div>

</template>

<script>
import MusicPlayer from "./MusicPlayer.vue";
export default {
  name: "Footer",
  components:{
    MusicPlayer
  }
}
</script>

<style scoped>
.footer {
  position: sticky;
  bottom: -40px;
  background: linear-gradient(to right, rgb(63,73,83), rgb(46,51,73));
  width: 100%;
  height: 95px;
  box-shadow: 10px 10px 5px grey;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content:space-between;
  /*-webkit-transition: width 1s, height 1s,-webkit-transform 1s;*/
  transition: width 0.5s, height 0.5s, transform 0.5s;
  z-index:1;
}

.footer:hover {
  transform:translate(0,-43px);
  -ms-transform:translate(0,-43px); /* IE 9 */
  -webkit-transform:translate(0,-43px); /* Safari and Chrome */
}

.footer p {
  /*font-size: xx-large;*/
  font-weight: bold;
  float: right;
  margin-top: 20px;
  margin-bottom: 0;
  color: lightseagreen;
  font: italic 2em Georgia, serif;
  text-shadow: 3px 3px 3px grey;
  /* font-family:"Times New Roman",Times,serif; */
  /* font-family:Arial,Helvetica,sans-serif; */
}

@media only screen and (max-width:1200px) {
  #welcome {
    display: none;
  }
}


</style>