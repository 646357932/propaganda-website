<template>
  <div class="container">
    <el-collapse-transition>
      <div class="list-tree" v-if="menuShow">
        <ul>
          <li @click="counter('0')">首页</li>
          <li @click="counter('1')">产品</li>
          <li @click="counter('2')">功能</li>
          <li @click="counter('3')">解决方案</li>
          <li @click="counter('4')">客户案例</li>
          <li @click="counter('5')">关于我们</li>
        </ul>
      </div>
    </el-collapse-transition>
    <div class="web-container">
      <div :class="!menuShow ? menuClass : menuClosedClass" @click="menuClick"></div>
      <div class="logo-container">
        <el-image :src="require('@/views/images/header-logo.jpg')" />
      </div>
      <div class="app-container">
        <el-image :src="require('@/views/images/header-logo-app.jpg')" />
      </div>
      <el-menu ref="elMenu" :activeIndex="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">产品</el-menu-item>
        <el-menu-item index="3">功能</el-menu-item>
        <el-menu-item index="4">解决方案</el-menu-item>
        <el-menu-item index="5">客户案例</el-menu-item>
        <el-menu-item index="6">关于我们</el-menu-item>
      </el-menu>
      <div class="freeTry-button">
        <el-button size="medium" @click="toFreeTry">免费试用</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: '1',
      activeIndex: '1',
      selectorMap: {
        '1': 'index',
        '2': 'product',
        '3': 'myFunction',
        '4': 'solution',
        '5': 'customer',
        '6': 'aboutUs'
      },
      menuShow: false,
      menuClass: 'app-menu',
      menuClosedClass: 'app-menu-closed'
    }
  },
  methods: {
    handleSelect (key) {
      this.$emit('headerClick', key)
    },
    setActiveItem (index) {
      this.$refs.elMenu.activeIndex = null
      this.$refs.elMenu.activeIndex = ++index + ''
    },
    toFreeTry () {
      this.$router.push('/freeTry')
    },
    menuClick () {
      this.menuShow = !this.menuShow
    },
    counter (index) {
      this.menuShow = false
      this.$emit('appScrollto', index)
      // let returnEle = ''
      // let anchor = this.$el.querySelector('solution')
      // if (index === '0') {
      //   returnEle = document.querySelector('#pageIndex') // productId是将要跳转区域的id
      // } else if (index === '1') {
      //   returnEle = document.querySelector('#productId')
      // } else if (index === '2') {
      //   returnEle = document.querySelector('#function')
      // } else if (index === '3') {
      //   returnEle = document.querySelector('#solution')
      // } else if (index === 4) {
      //   returnEle = document.querySelector('#customer')
      // } else if (index === '5') {
      //   returnEle = document.querySelector('#aboutUs')
      // }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1000px) {
  /* 当屏幕宽大于1000px时 */
  .list-tree {
    display: none;
  }
  .app-container {
    display: none;
  }
}

.app-container {
  display: none;
}

.web-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
}
.el-image {
  top: 25%;
}
.logo-container {
  /* width: 150px; */
  width: 230px;
  /* margin-bottom: 10px; */
  margin-left: -21%;
}
.container {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
}
.el-menu-demo {
  max-width: 500px;
  min-width: 360px;
  /* margin: 0 auto; */
}
.freeTry-button /deep/ .el-button {
  background: #f8f8f8;
  top: 20%;
  position: relative;
  color: #0f77ff;
  border: 1px solid rgba(15, 119, 255, 1);
  border-radius: 5px;
  height: 32px;
  line-height: 0;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
  outline: 0;
  background-color: #f8f8f8;
  /* color: #909399; */
}
.el-menu-item:hover {
  outline: 0;
  background-color: #f8f8f8;
}
.el-button:hover {
  /* color: #409eff;*/
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.el-menu {
  background: #f8f8f8;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0px solid #eee;
  background: #f8f8f8;
}

.app-logo {
  width: 100px;
  position: absolute;
  margin: 0 0 0 1%;
}
.app-list {
  width: 5%;
  margin: 1.5% 1% 0 0;
  border-radius: 5px;
}
.app-list:hover {
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 1000px) {
  /* 移动端样式 */
  .app-container {
    display: inline;
    width: 80px;
    margin-bottom: 1px;
    /* margin-left: 10px; */
  }
  .logo-container {
    display: none;
  }
  .app-menu {
    width: 32px;
    background: url('../images/list.png') no-repeat;
    background-size: 32px 32px;
    background-position: center;
    margin-left: 20px;
  }
  .app-menu-closed {
    width: 32px;
    background: url('../images/closed.png') no-repeat;
    background-size: 32px 32px;
    background-position: center;
    margin-left: 20px;
  }
  .list-tree {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    position: fixed;
    left: 0;
    top: 60px;
    width: 100%;
    background-color: #fff;
  }
  .list-tree ul {
    padding: 0;
    list-style: none;
  }
  .list-tree li {
    height: 25px;
    list-style: none;
  }
  .buttons {
    margin-left: 5%;
  }
  .buttons.button2 {
    margin-left: 30%;
  }
  .buttons.button3 {
    font-size: xx-small;
  }
  .el-menu-demo {
    display: none;
  }
  .logo-container {
    position: relative;
  }
  .logo-container /deep/ .el-image {
    width: 76%;
    position: absolute;
    left: 18%;
  }
  .freeTry-button {
    margin-right: 2%;
  }
  .web-container {
    justify-content: space-between;
  }
  /* .app-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  } */
}
</style>
