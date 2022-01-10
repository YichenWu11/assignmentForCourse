<template>
  <div class="container">
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__rotateIn"
    >
      <a href="https://www.nba.com/warriors/?tmd=1" target="_blank"><img src="../assets/warriors.png"  width="110px" height="110px" alt="Warrior" id="warrior"/></a>
    </transition>
    <h3 id="welcome">&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Wu Yichen's FinalWork Page</h3>
    <p id="intro">Created For the Final Project for the Intorduction of Computer Course</p>
    <div class="nouse"></div>
  </div>
</template>

<script>

export default {
  name: "TopPart"
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 290px;
  background: linear-gradient(to right, rgb(63,73,83), rgb(46,51,73));
  margin: 0;
  padding: 0;
}

#warrior {
  border: 3px solid grey;
  border-radius: 20px;
  margin-top:20px;
  -webkit-transition: width 1s, height 1s,-webkit-transform 1s;
  transition: width 1s, height 1s, transform 1s;
}

#warrior:hover {
  -webkit-transform: scale(1.2,1.2);
  transform: scale(1.2,1.2);
  box-shadow: 0 0 10px grey;
}

#welcome {
  color: white;
  font-weight: bold;
  font-size: xx-large;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 0;
}

#intro {
  color: rgb(175,183,194);
  flex:1 1 auto;
  margin:0;
  padding: 0;
}

.nouse {
  width:300px;
  height:40px;
  background-color: lightgrey;
  margin-bottom: 7px;
  border: 3px solid grey;
  border-radius: 20px;
}


</style>