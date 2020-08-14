<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'
  export default {
    name: 'Home',
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    components: {
      NavBar
    },
    created() {
      getHomeMultidata().then(res=>{
        console.log(res)
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color:white;
  }
</style>
