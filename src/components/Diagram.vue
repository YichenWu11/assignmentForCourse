<template>
  <div>
    <div>
      <div class="header">
        <h1>关系图</h1>
      </div>
      <div>
        <img src="../assets/关系图.png" alt="关系图" id="graph">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Diagram"
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

  #graph {
    width: 100%;
    height: 1100px;
    margin-right: 100px;
    margin-top: 40px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }


</style>