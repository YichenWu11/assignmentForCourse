<template>
  <div>
    <div class="header">
      <h1>我的学业/职业规划</h1>
    </div>

    <div class="passagetext2">
      <div class="str2" id="career1">
        <p>
          我大一是电类的，也就是通过大类招生进入的西安交通大学。众所周知，我们学校的大类是在大二时才分流分专业的，所以在大一的时候，
          虽然我打算在大二时选择计算机专业，但是整天学一些基础课程的我对于计算机这个专业的了解可以说是少之又少。然后到了大二我选择了计算机这个专业，同时通过上CSDN、掘金等网站看一些大佬写的文章，我才知道计算机这个行业需要学习的东西太多太多，仅靠学好学校安排的课程是远远不够的，对于计算机专业的学生来说，自学实在是太重要太重要了。
          因此我开始利用课余时间了解计算机相关知识，并且开始着手学习前端三件套html、css和Javascript，不过由于我是学校机队Robocon的一员，几乎所有的没课的时间我都要去队里，因此我没有太多的可供自己自由支配的时间。但我还是尽量抽出闲暇时间来学习前端。
          <br>&nbsp;&nbsp;&nbsp;&nbsp;谈到职业规划的话，我未来想要做的方向是Java后端吧，目标是进大厂（腾讯）。目前的话，我打算利用寒假的时间学习一下Vue框架，然后做一个小项目来练习，不过按现在的情况来看要直接开始下学期了。毕竟我将来要做的方向是后端，而且下学期的课业和机队的事比较忙，前端学习的事可以暂时搁置吧。下学期学校课程会学C++，我不打算深入学C++，而是在学过C++之后去主攻Java。不过下学期我的课余时间就更少了，总之还是尽量从海绵里挤出时间来学习吧。等到大三就充分利用课余时间全面的跟着学习路线学习Java，
          后端要学习的东西可谓是博大精深。但是，在学习技术的同时，也要把基础打好。从下学期开始计算机专业课占总课程数的比例更大了，有很多重要的科目，比如计算机网络，编译原理等非常重要的计算机基础知识，同样需要我们计算机专业的学生高度重视。只有夯实基础，才能更好地利用现有的技术来进行开发。现在还是任重而道远啊。不过按我的成绩，大四注定是要去花时间准备考研的，如果能保研的话，大四的时间就可以用来学习或实习，或提前进实验室了。不过之后的事之后再说吧，我觉得目前我只要按着自己的学习计划去按部就班的学习就好，相信付出总会有成果的。
          <br>&nbsp;&nbsp;&nbsp;&nbsp;在这个时间段的大部分大学生都是非常迷茫的，我也一样，感觉自己会的东西太少太少，要学的东西太多太多，加上互联网行业越来越内卷，各种培训班又不断疯狂地在向社会批发式的输出程序员，找工作变得越来越难，尤其是想进大厂，那难度更是可想而知。因此计算机专业的学生应该都是非常焦虑吧。不过不管再怎么焦虑，也只能按部就班慢慢来吧。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyCareer"
  }
</script>

<style scoped>
  .header {
    background: whitesmoke;
    text-align: center;
    padding: 15px;
    width: 700px;
    margin-top: 10px;
    margin-left: 15px;
    text-shadow: 5px 5px 5px grey;
    border-style: solid;
    border-radius: 5px;
    box-shadow: 10px 10px 5px grey;
  }

  .passagetext2 {
    margin: 30px 20px 10px 20px;
    position: relative;
    display: block;
  }

  .passagetext2 p {
    text-indent: 44px;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    /*font-family:"Times New Roman",Times,serif;*/
    font-size: large;
    line-height: 30px;
    letter-spacing: 3px;
    font-weight: normal;
    text-align: justify;
    /*text-decoration: underline;*/
    /*color: white;*/
  }
</style>