<template>
  <div>
    <div id="material">
        <div class="column content">

          <div class="header">
            <h1>学习资料</h1>
          </div>

          <div class="passage">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为一名计算机专业的学生，在学习计算机知识的过程中，对我帮助最大的有下面几个网站(我个人相较看视频，更喜欢看文档看文章)</p>
            <ul>
              <li><a target="_blank" href="https://www.runoob.com/"
                     style="text-decoration: none;font-size: x-large"><b>菜鸟教程</b></a></li>
              <p>
                这是一个非常适合编程初学者去学习相关知识的网站，我在初学python、Html、css以及Javascript时都是通过这个网站学习的，网站内涵盖的知识非常全面，同时利用docker技术提供在线编程环境供初学练习，无需安装本地IDE配置环境，非常方便</p>
              <li><a target="_blank" href="https://www.csdn.net/"
                     style="text-decoration: none;font-size: x-large"><b>CSDN</b></a></li>
              <p>
                emmm，许多互联网从业者对CSDN嗤之以鼻，不过CSDN作为我第一个接触到的编程学习论坛，我觉得还是比较好用的，最主要的是可以找到各种软件的安装配置教程，同时我也会在上面发布一些博客记录自己的学习过程，这是我的<a
                  target="_blank" href="https://blog.csdn.net/weixin_51302779?spm=1000.2115.3001.5343"
                  style="text-decoration: none"><b>[个人主页]</b></a></p>
              <li><a target="_blank" href="https://juejin.cn/"
                     style="text-decoration: none;font-size: x-large"><b>稀土掘金</b></a></li>
              <p>掘金yyds，不过不知道为什么掘金首页老是给我推各种前端内容......</p>
              <li><a target="_blank" href="https://stackoverflow.com/"
                     style="text-decoration: none;font-size: x-large"><b>StackOverflow</b></a></li>
              <p>一个非常知名的网站，在这上面几乎可以找到所有Bug的解决方案，唯一缺点就是全英文，在最开始接触时会很难受<a
                  href="https://www.zhihu.com/question/20824615" style="text-decoration: none;"
                  target="_blank">[如何优雅地使用StackOverflow]</a></p>
              <li><a target="_blank" href="https://codepen.io/"
                     style="text-decoration: none;font-size: x-large"><b>codepen</b></a></li>
              <p>最近发现的一个宝藏网站，是一个在线的前端编辑平台，同时可以在这上面查看别人制作的页面以及源代码来学习，对前端学习非常有帮助</p>
              <li><a target="_blank" href="https://github.com/QSCTech/zju-icicles"
                     style="text-decoration: none;font-size: x-large"><b>浙江大学课程攻略共享计划</b></a></li>
              <p>GitHub上一个24.1k个star的项目，是由浙江大学的学生自发贡献的一个项目，里面几乎涵盖了所有计算机专业课程的学习资料，非常全面</p>
              <li><a target="_blank"
                     href="https://www.imooc.com/?utm_term=%E6%85%95%E8%AF%BE%E7%BD%91&utm_campaign=SEM&utm_source=bdpinpai&bd_vid=11468315091654791157"
                     style="text-decoration: none;font-size: x-large"><b>慕课网</b></a></li>
              <p>自称程序员的梦工厂，程序员都爱的课程网站，上面的有些几百块的课程还是很划算的，老师讲的相对都比较好</p>
              <li><a href="#" style="text-decoration: none;font-size: x-large"><b>各种IDE或编辑器(vscode)</b></a>
              </li>
              <p>自己手敲代码永远是最好的学习练习方式</p>
            </ul>
          </div>

        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "StudyMaterial"
}
</script>

<style scoped>
  .header {
    background: whitesmoke;
    text-align: center;
    padding: 15px;
    width: 90%;
    margin-top: 10px;
    margin-left: 30px;
    /*font-size: large;*/
    text-shadow: 5px 5px 5px grey;
    border-style: solid;
    border-radius: 5px;
    box-shadow: 10px 10px 5px grey;
    animation: myfirst 2s;
  }

   @keyframes myfirst {
    /* 0% {
       background: lightgray;
     } */
    /*25% {*/
    /*    background: silver;*/
    /*}*/
    50% {
      background: ghostwhite;
    }
    /*75% {*/
    /*    background: silver;*/
    /*}*/
    100% {
      background: whitesmoke;
    }
  }

  .passage {
    margin-top: 10px;
    font-weight: bold;
    /*text-indent: 6px;*/
    text-align: justify;
    padding: 8px;
    /*font-size: large;*/
  }

  .passage ul {
    list-style: square;
  }

  .passage ul li a{
    color: lightseagreen;
    text-shadow: 3px 3px 3px grey;
    text-decoration: underline;
    font-weight: bold;
  }


  .passage ul li a:link {
    color: skyblue;
    text-shadow: 0 0 1px grey;
    text-decoration: underline;
  }

  .passage ul li a:visited {
    color: skyblue;
    text-shadow: 0 0 1px grey;
    text-decoration: underline;
  }
</style>