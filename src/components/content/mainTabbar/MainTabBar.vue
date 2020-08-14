<template>
  <div>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="deepPink">
            <img slot="item-icon" src="~assets/img/home.png" alt="">
            <img slot="item-icon-active" src="~assets/img/home-o.png" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="deepPink">
            <img slot="item-icon" src="~assets/img/category.png" alt="">
            <img slot="item-icon-active" src="~assets/img/category-o.png" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="deepPink">
            <img slot="item-icon" src="~assets/img/cart.png" alt="">
            <img slot="item-icon-active" src="~assets/img/cart-o.png" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="deepPink">
            <img slot="item-icon" src="~assets/img/my.png" alt="">
            <img slot="item-icon-active" src="~assets/img/my-o.png" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
</style>
