<template>
  <div class="container" id="solution">
    <div class="solution-header">
      <div class="solution-header">
        <div class="solution-header-empty"></div>
        <div class="solution-header-title">实战解决方案</div>
        <div class="solution-header-describe">通过ZMap的智能算法和Stack的地图能力，可以轻松解决地图应用平台在各类复杂场景下的应用问题，自由释放地图潜能</div>
      </div>
    </div>
    <div class="solution-body">
      <div class="solution-body-box">
        <el-tabs :tab-position="tabPosition" :stretch="true">
          <el-tab-pane label="地图搜客极速版">
            <el-image :src="require('@/views/images/tab01.jpg')" />
            <div class="solution-example">
              <div class="solution-example-backgroud">
                <div class="solution-example-text">
                  <div class="solution-example-title">方案示例1</div>
                  <el-divider content-position="center"></el-divider>
                  <div class="solution-example-detail">
                    基于ZMap强大的计算引擎，宁波银行搭建了轻量级的高性能大数据底层架构，有效支撑其大数据分析需求，协助企业及时调整策略做出更好的决策。</div>
                  <el-button class="buttons" round type="danger" @click="toFreeTry" size="small">免费试用</el-button>
                  <el-image class="earth-image" :src="require('@/views/images/solution-earth.png')" />
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :lazy="true" label="网格管理">
            <el-image :src="require('@/views/images/tab02.jpg')" />
            <div class="solution-example">
              <div class="solution-example-backgroud">
                <div class="solution-example-text">
                  <div class="solution-example-title">方案示例1</div>
                  <el-divider content-position="center"></el-divider>
                  <div class="solution-example-detail">
                    基于ZMap强大的计算引擎，宁波银行搭建了轻量级的高性能大数据底层架构，有效支撑其大数据分析需求，协助企业及时调整策略做出更好的决策。</div>
                  <el-button class="buttons" round @click="toFreeTry" type="danger" size="small">免费试用</el-button>
                  <el-image class="earth-image" :src="require('@/views/images/solution-earth.png')" />
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :lazy="true" label="资产运维">
            <el-image :src="require('@/views/images/tab03.jpg')" />
            <div class="solution-example">
              <div class="solution-example-backgroud">
                <div class="solution-example-text">
                  <div class="solution-example-title">方案示例1</div>
                  <el-divider content-position="center"></el-divider>
                  <div class="solution-example-detail">
                    基于ZMap强大的计算引擎，宁波银行搭建了轻量级的高性能大数据底层架构，有效支撑其大数据分析需求，协助企业及时调整策略做出更好的决策。</div>
                  <el-button class="buttons" round @click="toFreeTry" type="danger" size="small">免费试用</el-button>
                  <el-image class="earth-image" :src="require('@/views/images/solution-earth.png')" />
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :lazy="true" label="作战行动">
            <el-image :src="require('@/views/images/tab04.jpg')" />
            <div class="solution-example">
              <div class="solution-example-backgroud">
                <div class="solution-example-text">
                  <div class="solution-example-title">方案示例1</div>
                  <el-divider content-position="center"></el-divider>
                  <div class="solution-example-detail">
                    基于ZMap强大的计算引擎，宁波银行搭建了轻量级的高性能大数据底层架构，有效支撑其大数据分析需求，协助企业及时调整策略做出更好的决策。</div>
                  <el-button class="buttons" round @click="toFreeTry" type="danger" size="small">免费试用</el-button>
                  <el-image class="earth-image" :src="require('@/views/images/solution-earth.png')" />
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="solution-footer"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabPosition: 'left'
    }
  },
  mounted () {
    const that = this
    // eslint-disable-next-line no-unused-expressions
    window.addEventListener(
      'resize',
      function () {
        that.checkScreenWidth()
      },
      false
    )
    that.checkScreenWidth()
  },
  methods: {
    toFreeTry () {
      this.$router.push('/freeTry')
    },
    checkScreenWidth () {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      this.setImgHeight(width)
      if (width <= 1000) {
        // 这里根据像素设置element标签页位置
        this.tabPosition = 'top'
      } else {
        if (this.tabPosition === 'top') {
          this.tabPosition = 'left'
        }
      }
    },
    setImgHeight (width) {
      const arr = document.getElementsByClassName('solution-example')
      if (width <= 1000) {
        // 设置标签页容器高度以不失真显示图片solution-example-text
        const textHeight = document.getElementsByClassName(
          'solution-example-text'
        )[0].offsetHeight
        for (let i = 0; i < arr.length; i++) {
          arr[i].style.height = (width * (456 / 620) + textHeight) * 1.02 + 'px'
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          arr[i].style.height = '490px'
        }
      }
    }
  }
}
</script>
<style scoped>
.buttons {
  position: absolute;
  z-index: 1000;
  margin-top: 8%;
  min-width: 17%;
  margin-left: 3%;
}
.el-button--danger {
  color: #fff;
  background-color: #f63646;
  border-color: #f63646;
}
.el-button--danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}
.container {
  width: 100%;
  height: 100%;
  background: ffffff;
}
.solution-example-detail {
  width: 154px;
  height: 117px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
  margin: 20px auto;
}
.solution-example {
  /* width: 836px; */
  width: 100%;
  height: 490px;
}
.solution-example-title {
  width: 115px;
  font-size: 25px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 90px;
  margin-left: 9%;
}
.solution-example-text {
  height: 100%;
  width: 199px;
}
.solution-example-backgroud {
  width: 836px;
  height: 444px;
  background: #0f77ff;
}
.solution-body-box {
  width: 981.45px;
  margin: 0 auto;
  height: 100%;
}
.solution-body {
  height: 490px;
}
.solution-footer {
  /* height: 113px; */
  height: 190px;
}
.solution-header-empty {
  /* height: 160px; */
  height: 80px;
}
.solution-header-title {
  width: 151px;
  height: 40px;
  font-size: 25px;
  font-family: Alibaba PuHuiTi;
  font-weight: 600;
  color: rgba(60, 60, 60, 1);
  line-height: 30px;
  margin: 0 auto;
}
.solution-header-describe {
  height: 74px;
  margin: 0 auto;
  width: 747px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(154, 154, 154, 1);
  line-height: 30px;
}
.el-image {
  position: absolute;
  right: 2.5%;
  top: 6.5%;
  width: 74.3%;
}
.el-image__inner {
  border-radius: 8px;
}
.el-divider--horizontal {
  width: 60px;
  height: 2px;
  margin-left: 21px;
}
.earth-image {
  position: relative;
  width: 409px;
  right: 168px;
  top: 49px;
}
@media screen and (max-width: 1000px) {
  .buttons {
    position: absolute;
    z-index: 1000;
    margin-top: auto;
    min-width: 17%;
    margin-left: 46%;
    top: 6%;
  }
  .solution-body {
    height: auto;
    padding-bottom: 12%;
  }
  .solution-body-box {
    width: 100%;
    margin-top: 37px;
  }
  .solution-example-backgroud {
    width: 100%;
    height: 100%;
  }
  .solution-example-text {
    height: 170px;
    width: 100%;
  }
  .el-divider--horizontal {
    width: 60px;
    height: 2px;
    margin: 0 0 0 5%;
  }
  .solution-example-detail {
    width: 90%;
    height: auto;
  }
  .solution-example-title {
    margin-left: 5%;
  }
  .solution-footer {
    display: none;
  }
  .earth-image {
    display: none;
  }
  .el-image {
    position: absolute;
    right: 5%;
    top: auto;
    width: 90%;
    bottom: 2%;
  }
  .solution-header-title {
    padding-top: 9%;
    font-size: 25px;
    font-family: AlibabaPuHuiTi;
    font-weight: 600;
    text-align: center;
  }
  .solution-header-describe {
    margin-top: 9%;
    width: 89%;
    text-align: center;
    height: auto;
  }
}
</style>
