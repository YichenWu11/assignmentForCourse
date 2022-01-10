<template>
  <div>
    <div class="header">
      <h1>我对计算机学科的认识</h1>
    </div>


    <div class="passagetext">
      <div class="str1">
        <p>
          在我上大学之前，我对计算机这门学科完全是一点了解没有。同时因为我高中上的是住宿制学校，平日里也不怎么用电脑，更别说去学一些电脑相关的知识了。
          当时只知道计算机这个行业很热门，薪资很高，作为一名普通家庭出身的普通人，为了高薪，我决定上大学时选择计算机专业，最后也是在大二时通过分流成为了一名计算机专业的学生。
          我第一次接触编程是在大一的计算机基础这门课上，当时学习的语言是python，当时用python写出那些课本上简单的作业题时甚至还有点小小成就感。其实现在仔细回想大一上的python学的东西甚至连基础都没有学完，
          然后时在大一下程设课上学了C语言，也不过是学了皮毛而已。我真正对计算机这门学科，这个领域有初步的了解是在我大二的时候，当时我在B站看到了一位up主--“程序员鱼皮”的视频，我才了解到原来计算机相关的知识这么多这么广，
          原来别人在大二甚至在大一的时候就已经学习了很多知识，甚至已经做过一些简单的项目了。我这时候才意识到自己应该主动去自学一些知识了，因此我开始把python全面巩固了一下，写了几个小的脚本，然后去学习前端基础知识。
          虽然我大部分的时间花费在了Robocon机队里，但我还是尽可能地利用闲暇时间进行学习。
          <br>&nbsp;&nbsp;&nbsp;&nbsp;这学期我们学了一门课--《数据结构与算法》，老师在课上告诉我们，程序等于数据结构加算法。的确，这门课对于我们专业的学生来说非常重要。我甚至觉得计算机专业的学生就应该去学习编程知识，而不是学什么电路、大物这些看似对我们专业毫无用处的科目。
          不过当我在各种论坛上看了许多大佬的文章后，我才意识到，编程语言以及那些框架只不过是工具罢了，只不过是帮助我们进行开发的工具。我所学的专业全名叫做“计算机科学与技术”，编程只不过是这其中的技术，而科学要比技术重要的多得多得多。
          同时，计算机科学的发展正是深刻的依赖于这些基础学科，诸如离散数学、计算机组成原理、高等数学、线性代数等。只有学好的这些科目，培养好我们的基础素质，我们才能去做“造轮子”的工作，而不是简简单单地把别人造好的轮子直接拿来用。
          或许有人说，我们在以后的工作中用到这些基础计算机学科的时候并不多。不过我们身为西安交通大学的一名计算机专业的学生，不能只满足于去做一名底层的，到了35岁就被淘汰的程序员。在这个现代化的、互联网的时代，在这个计算机行业越来越内卷的时代，
          我们更要学好各种基础学科，加强对计算机这门学科的深入理解，对底层的一些东西要了解的透彻，这样才能保持我们的竞争力。
          <br>&nbsp;&nbsp;&nbsp;&nbsp;除此之外，我们还应该保持终身学习。互联网这个行业的新事物新技术可以说是日新月异，只有我们保持终身学习，才能一直保持自己的价值，保持自己的竞争力。同时也让自己的生活更加充实，享受技术人生。
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "MyThinking"
}
</script>

<style scoped>
  .header {
    background: whitesmoke;
    text-align: center;
    padding: 15px;
    width: 900px;
    margin-top: 10px;
    margin-left: 30px;
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

  .passagetext {
    margin: 30px 10px 10px 10px;
    position: relative;
    display: block;
  }

  .passagetext p {
    font-weight: normal;
    text-indent: 44px;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    /*font-family:"Times New Roman",Times,serif;*/
    font-size: large;
    line-height: 30px;
    letter-spacing: 3px;
    text-align: justify;
    /*text-decoration: underline;*/
    /*color: white;*/
  }
</style>