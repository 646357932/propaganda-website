<template>
  <el-container>
    <el-header>
      <myHeader @headerClick="headerClick" ref="myheader" @appScrollto="appScrollto"></myHeader>
    </el-header>
    <div class="empty"></div>
    <full-page :options="options" ref="fullpage">
      <div class="section">
        <el-main class="index">
          <index @learnMore="headerClick"></index>
        </el-main>
      </div>
      <div class="section">
        <el-main class="product">
          <product></product>
        </el-main>
      </div>
      <div class="section">
        <el-main class="myFunction">
          <myFunction></myFunction>
        </el-main>
      </div>
      <div class="section">
        <el-main class="solution" ref="solution">
          <solution></solution>
        </el-main>
      </div>
      <div class="section">
        <el-main class="customer">
          <customer></customer>
        </el-main>
      </div>
      <div class="section">
        <el-main class="aboutUs">
          <aboutUs></aboutUs>
        </el-main>
      </div>
    </full-page>
  </el-container>
</template>
<script>
import index from './components/pageIndex'
import myHeader from './components/header'
import product from './components/product'
import myFunction from './components/function'
import solution from './components/solution'
import customer from './components/customer'
import aboutUs from './components/aboutUs'
import '../../static/fullpage.min.css'
export default {
  components: {
    index,
    myHeader,
    product,
    myFunction,
    solution,
    customer,
    aboutUs
  },
  data () {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        continuousVertical: false,
        scrollBar: false,
        navigation: true,
        afterLoad: this.afterLoad,
        navigationPosition: 'right',
        verticalCentered: true,
        scrollOverflow: true,
        navigationTooltips: [
          '首页',
          '产品',
          '功能',
          '解决方案',
          '客户案例',
          '关于我们'
        ]
      },
      classIndexMap: {
        '0': 'index',
        '1': 'product',
        '2': 'myFunction',
        '3': 'solution',
        '4': 'customer',
        '5': 'aboutUs'
      },
      selectorMap: {
        index: '1',
        product: '2',
        myFunction: '3',
        solution: '4',
        customer: '5',
        aboutUs: '6'
      },
      tabsShow: false,
      i: 0,
      scroll: true,
      flag: true,
      timerId: null
    }
  },
  mounted () {
    // this.$refs.fullpage.api.silentMoveTo (2, 0)
    this.$refs.fullpage.api.moveSectionDown()
    this.$refs.fullpage.api.moveSectionUp()
    const that = this
    that.$refs.fullpage.api.setAllowScrolling(true, 'all')
    // this.$refs.fullpage.api.moveSectionDown ()
    this.destroyFullpage()//加载的时候判断页面大小来决定是否使用fullpage
    // window.addEventListener(
    //   'resize',
    //   function () {
    //     that.$refs.fullpage.api.reBuild()
    //   },
    //   false
    // )
  },

  methods: {
    appScrollto (indexi) {
      const anchor = this.$el.querySelector('.' + this.classIndexMap[indexi])
      if (anchor) {
        const high = anchor.offsetTop
        window.scrollTo({
          top: high,
          behavior: 'smooth'
        })
      }
    },
    destroyFullpage () {
      const width = this.getWindowWidth()
      if (width <= 1000) {
        this.$refs.fullpage.api.destroy('all')
      }
    },
    getWindowWidth () {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    },
    tabClick (tab) {
      this.headerClick('.' + tab.name)
    },
    afterLoad (origin, destination) {
      const anchor = document.body.querySelector('.fp-right')
      if (destination.index === 0) {
        anchor.style.display = 'none'
      } else {
        anchor.style.display = 'inline'
      }
      this.$refs.myheader.setActiveItem(destination.index)
    },
    headerClick (indexval) {
      const width = this.getWindowWidth()
      if (width < 1000) {
        this.appScrollto('5')
      } else {
        this.$refs.fullpage.api.moveTo(indexval)
      }
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 1000px;
}
.wrapper2 {
  width: 100%;
  height: 100%;
}
.freeTry {
  width: 100%;
  height: auto;
}
.aboutUs {
  width: 100%;
  /* height: 1022px; */
}
.customer {
  width: 100%;
  height: auto;
  /* height: 1022px; */
}
.solution {
  width: 100%;
  /* height: 1022px; */
}
.myFunction {
  width: 100%;
  height: 100%;
}
.product {
  width: 100%;
  /* height: 1022px; */
}
/* .index {
  margin-top: 60px;
} */
.empty {
  width: 100%;
  height: 60px;
}
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 58px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  padding: 0;
}

.el-main {
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
}
.tabs {
  position: fixed;
  top: 50%;
  z-index: 9999999999;
  right: 0%;
}
/* .fullpage-wrapper {
  margin-top: 60px;
} */

@media screen and (max-width: 1000px) {
  /* .index {
    margin-top: 0px;
  } */
  .tabs {
    display: none;
  }
}
</style>
