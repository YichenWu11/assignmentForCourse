<template>
  <div style="float:left;margin-top: 0;margin-bottom: 0;">
    <div class="play_wrap" id="player">
      <div class="search_bar">
        <!-- 搜索歌曲 -->
        <ul class="song_list" style="padding-left: 0;">
          <li v-for="(item,index) in musicList" :key=index>
            <a href="javascript:void(0)" @click="playMusic(item.id)"></a>
            <b>{{ item.name}}</b>
            <div style="float:right"><b>{{item.artists[0].name }}</b></div>
          </li>
        </ul>
        <input type="text"  autocomplete="off" v-model="query" @keyup.enter="searchMusic" placeholder="来点音乐吗?"/>
      </div>

      <div class="audio_con">
        <audio :src="musicUrl" ref="audio" controls autoplay loop class="myaudio" @play="play" @pause="pause"></audio>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "MusicPlayer",
  data(){
    return{
      query:"",
      musicList:[],
      musicUrl:"",
      hotComments:[],
      isPlaying: false
    }
  },
  methods:{
    searchMusic(){
      // console.log("搜索了");
      var that = this;
      this.$http.get("https://autumnfish.cn/search?keywords=" + this.query)
          .then(function (response){
            console.log(response);
            that.musicList = response.data.result.songs;
          })
    },
    playMusic(musicId){
      var that = this;
      that.musicUrl = "http://music.163.com/song/media/outer/url?id=" + musicId + ".mp3";
      // axios.get("https://autumnfish.cn/song/url?id=" + musicId)
      // .then(function (response) {
      //     console.log(response);
      //  })
    },
    // 歌曲播放
    play() {
      // console.log("play");
      this.isPlaying = true;
      // console.log("点击了");
    },
    // 歌曲暂停
    pause() {
      // console.log("pause");
      this.isPlaying = false;
    }
  }
}
</script>

<style scoped>
.play_wrap {
  width: 500px;
  height: 55px;
  position: relative;
  margin-left: 2px;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 3px;
  /* box-shadow: 10px 10px 10px grey; */
}

.search_bar {
  /*border-radius: 20px;*/
  height: 60px;
  background-color: lightgray;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*justify-content: flex-end;*/
  position: relative;
  z-index: 11;
  /* box-shadow: 10px 10px 10px grey; */
}

.search_bar input {
  margin-right: 5px;
  width: 296px;
  height: 34px;
  border-radius: 5px;
  border: 0;
  background: url("../assets/zoom.png") 265px center no-repeat white;
  text-indent: 15px;
  outline: none;
}

.song_list {
  margin-left: 20px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  background-color: lightgray;
  border-radius: 20px;
}
.song_list::-webkit-scrollbar {
  display: none;
}

.song_list li {
  font-size: 12px;
  color: #333;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 580px;
  padding-left: 10px;
}

.song_list li a {
  display: block;
  width: 17px;
  height: 17px;
  background-image: url("../assets/play.png");
  background-size: 100%;
  margin-right: 5px;
  box-sizing: border-box;
}

.song_list li b {
  font-weight: normal;
  width: 122px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song_list li em,
.song_list li i {
  font-style: normal;
  width: 100px;
}

.audio_con {
  height: 30px;
  background-color: #f1f3f4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.myaudio {
  width: 500px;
  height: 18px;
  margin-top: 5px;
  outline: none;
  background-color: #f1f3f4;
  /* box-shadow: 10px 10px 10px grey; */
}

@media only screen and (max-width: 1100px) {
  .play_wrap {
    width: 700px;
  }

  .myaudio {
    width: 700px;
  }
}

@media only screen and (max-width: 700px) {
  .play_wrap {
    width: 550px;
  }

  .myaudio {
    width: 550px;
  }
}

</style>