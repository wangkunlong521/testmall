<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NavBar',
  components: {

  }
}
</script>

<style scoped>
  .nav-bar{
    text-align: center;
    display:flex;
    height:44px;
    line-height: 44px;
    border-bottom: 1px solid #ccc;
  }
  .left,.right{
    width:60px;
  }
  .center{
    flex:1;
  }
</style>
