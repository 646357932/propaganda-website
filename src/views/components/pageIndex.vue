<template>
  <div class="container" id="pageIndex">
    <el-carousel @change="carouselChange" ref="carousel" :autoplay="true" height="bannerHeight"
      indicator-position="none">
      <el-carousel-item v-for="(item,i) in 5" :key="item">
        <div>
          <el-button v-if="i==0" class="buttons" round type="danger" size="small" @click="toFreeTry">免费试用</el-button>
          <el-button v-if="i==0" class="buttons button2" round type="primary" size="small" @click="dialogShow">观看视频
          </el-button>
          <el-button v-if="i==0" class="buttons button3" @click="toAboutUs" size="small">了解详情</el-button>
          <el-image :src="getImage(i)" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- </div>  @click="cardClick(1)" -->
    <div class="main1-card-container">
      <div @click="cardClick(1)" :class="{'cardShadow':hoverIndex==1}" @mouseover="hoverIndex=1"
        @mouseout="hoverIndex=-1" class="card">
        <div class="card-left">
          <div class="card-logo-container">
            <el-image v-show="cardImgShow[0]" :src="require('@/views/images/hexin.png')" />
            <el-image v-show="!cardImgShow[0]" :src="require('@/views/images/hexin_hover.png')" />
          </div>
        </div>
        <!-- <el-divider direction="vertical"></el-divider> -->
        <div class="card-right">
          <div class="card-right-top">
            <font class="card-font-top">图智核心</font>
          </div>
          <div class="card-right-bottom">
            <font class="card-font-bottom">从未从地图角度深度挖掘?ok, 运营提效、业态求变、模式创新， 都找ZMap</font>
          </div>
        </div>
      </div>

      <div @click="cardClick(2)" :class="{'cardShadow':hoverIndex==2}" @mouseover="hoverIndex=2"
        @mouseout="hoverIndex=-1" class="card">
        <div class="card-left">
          <div class="card-logo-container">
            <el-image v-show="cardImgShow[1]" :src="require('@/views/images/jisu.png')" />
            <el-image v-show="!cardImgShow[1]" :src="require('@/views/images/jisu_hover.png')" />
          </div>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="card-right">
          <div class="card-right-top">
            <font class="card-font-top">网赢商服</font>
          </div>
          <div class="card-right-bottom">
            <font class="card-font-bottom">无论到店、上门、到家还是外送，这里有低门槛、高弹性、全托管的标准化数字服务</font>
          </div>
        </div>
      </div>
      <div @click="cardClick(3)" :class="{'cardShadow':hoverIndex==3}" @mouseover="hoverIndex=3"
        @mouseout="hoverIndex=-1" class="card">
        <div class="card-left">
          <div class="card-logo-container">
            <el-image v-show="cardImgShow[2]" :src="require('@/views/images/wangge.png')" />
            <el-image v-show="!cardImgShow[2]" :src="require('@/views/images/wangge_hover.png')" />
          </div>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="card-right">
          <div class="card-right-top">
            <font class="card-font-top">开放生态</font>
          </div>
          <div class="card-right-bottom">
            <font class="card-font-bottom">践行好服务在身边的开放理念，打通开放银行服务入口与消费服务提供方</font>
          </div>
        </div>
      </div>
      <div @click="cardClick(4)" :class="{'cardShadow':hoverIndex==4}" @mouseover="hoverIndex=4"
        @mouseout="hoverIndex=-1" class="card">
        <div class="card-left">
          <div class="card-logo-container">
            <el-image v-show="cardImgShow[3]" :src="require('@/views/images/luxian.png')" />
            <el-image v-show="!cardImgShow[3]" :src="require('@/views/images/luxian_hover.png')" />
          </div>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="card-right">
          <div class="card-right-top">
            <font class="card-font-top">联合创新</font>
          </div>
          <div class="card-right-bottom">
            <font class="card-font-bottom">网以共赢、智图联创，以新一代智能网格围栏为基础的挖掘商业服务创新</font>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" :modal="false" @close="videoStop" @open="videoPlay">
      <video-player class="video-player vjs-custom-skin" id="videoPlayer" :playsinline="true" :options="playerOptions">
      </video-player>
    </el-dialog>
  </div>
</template>
<script>
import url1 from '../images/01.jpg'
import url2 from '../images/02.jpg'
import url3 from '../images/03.jpg'
import url4 from '../images/04.jpg'
import url5 from '../images/05.jpg'
// 2.组件内引用
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      dialogWidth: '30%',
      urls: [url1, url2, url3, url4, url5],
      hoverIndex: -1,
      screenWidth: 1080, // 默认浏览器高度
      bannerHeight: 1080, // 默认轮播图容器高度
      cardImgShow: [true, true, true, true],
      dialogVisible: false,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src: 'http://zmap.topcheer.com/staticresources/zmapstaticresources/videos/video.mp4',
            // 'http://39.100.135.90:8080/staticresources/zmapstaticresources/videos/video.mp4', // 路径https://market-web.obs.cn-east-2.myhuaweicloud.com/fanruan/video/fbivideo.mp4
            type: 'video/mp4' // 类型
          },
          {
            src: '//path/to/video.webm',
            type: 'video/webm'
          }
        ],
        poster: '../images/01.jpg', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  mounted () {
    const that = this
    const dialog = document.getElementsByClassName('el-dialog')[0]
    dialog.style.background = 'none'
    dialog.style['box-shadow'] = 'none'
    dialog.style['-webkit-box-shadow'] = 'none'
    // 监听浏览器窗口大小改变
    // eslint-disable-next-line no-unused-expressions
    window.addEventListener(
      'resize',
      function () {
        that.initbannerHeight()
      },
      false
      // eslint-disable-next-line no-sequences
    ),
      that.initbannerHeight()
  },
  methods: {
    videoPlay () {
      const video = document.getElementsByTagName('video')[0]
      if (video && video.paused) {
        video.play()
      }
    },
    videoStop () {
      const video = document.getElementsByTagName('video')[0]
      if (video && !video.paused) {
        video.pause()
      }
    },
    dialogShow () {
      this.dialogVisible = true
    },
    toFreeTry () {
      this.$router.push('/freeTry')
    },
    toAboutUs () {
      this.$emit('learnMore', '6')
    },
    carouselChange (index) {
      this.cardStyleChange(index)
    },
    cardClick (index) {
      this.$refs.carousel.setActiveItem(index)
      this.cardStyleChange()
    },
    cardStyleChange (index) {
      const that = this
      const arr = document.getElementsByClassName('card-left')
      for (var i = 0; i < arr.length; i++) {
        arr[i].classList.remove('active')
      }
      for (let j = 0; j < arr.length; j++) {
        if (that.cardImgShow[j] === false) {
          that.$set(that.cardImgShow, j, true) // 监听不到数组变化 所以用这种写法
        }
      }
      if (index) {
        arr[index - 1].classList.add('active')
        that.$set(that.cardImgShow, index - 1, false)
      }
    },
    dialogwidthChange () {
      // 改变弹出层的宽度
      const dialog = document.getElementsByClassName('el-dialog')[0]
      dialog.style.background = 'none'
      dialog.style['box-shadow'] = 'none'
      dialog.style['-webkit-box-shadow'] = 'none'
      if (this.screenWidth <= 1024) {
        if (dialog.style.width !== '100%') {
          dialog.style.width = '100%'
        }
      } else {
        if (dialog.style.width === '100%') {
          dialog.style.width = '50%'
        }
      }
      //
    },
    initbannerHeight () {
      this.setScreenWidth()
      this.setSize()
      this.dialogwidthChange()
    },
    setScreenWidth () {
      //  element的轮播图是固定高度的，所以只有用监听事件动态更改容器高度
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      this.screenWidth = width
    },
    setSize () {
      this.bannerHeight = (680 / 1920) * this.screenWidth
      document.getElementsByClassName(
        'el-carousel__container'
      )[0].style.height = this.bannerHeight + 'px'
    },
    getImage (index) {
      return this.urls[index]
    }
  }
}
</script>
<style scoped>
.card-right .card-font-top {
  top: 22%;
  position: relative;
  font-size: 24px;
  font-family: Alibaba PuHuiTi;
  font-weight: 600;
  margin-left: 10%;
  color: rgba(42, 51, 69, 1);
}
.card-right .card-right-bottom {
  font-size: 15px;
  font-family: Hiragino Sans GB;
  font-weight: normal;
  color: rgba(127, 127, 127, 1);
}
.card-left {
  height: 100%;
  width: 28%;
  border-radius: 8px 0 0 8px;
}
.active {
  background: #0f77ff;
}
.card-left .card-logo-container {
  max-width: 41px;
  margin: 0 auto;
  top: 40%;
  position: relative;
}
.card-right .card-right-top {
  height: 30%;
  width: 100%;
  /* width:92px;
height:23px; */
}
.card-right .card-right-bottom {
  height: 69%;
  width: 79%;
  margin: 0 auto;
}
.card-right {
  height: 100%;
  width: 72%;
  border-radius: 8px;
}
.card {
  /* border: 1px solid red; */
  height: 209px;
  width: 320px;
  margin-left: 1%;
  display: flex;
  border-radius: 8px;
  background: #ffffff;
  /* -moz-box-shadow: 8px 2px 5px #ebeef5;
  -webkit-box-shadow: 8px 2px 5px #ebeef5;
  box-shadow: 8px 2px 5px #ebeef5;
   */
}
.cardShadow {
  box-shadow: 0px 0px 6px 0px rgba(15, 119, 255, 0.3);
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04); */
}
.buttons {
  position: fixed;
  z-index: 9999999;
  /* margin-top: 22%; */
  margin-top: 16%;
  min-width: 10%;
  margin-left: 31%;
}
.buttons.button2 {
  background: #0f77ff;
  /* margin-left: 36.5%; */
  margin-left: 42.5%;
}
.buttons.button3 {
  margin-top: 30.5%;
  min-width: 2%;
  height: 4%;
  border-radius: 7px;
  line-height: 0%;
  color: #0f77ff;
  margin-left: 32%;
  letter-spacing: 1px;
  font-size: inherit;
}
.container {
  width: 100%;
  height: 100%;
  background: #f8f8f9;
}
.carousel {
  background: turquoise;
  width: 100%;
  height: auto;
}
.el-img {
  width: 100%;
  height: auto;
}
.main1-card-container {
  width: 100%;
  /* height: 340px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f9;
}

.vjs-big-play-button {
  top: 45%;
  left: 43%;
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
.el-divider {
  height: 10em;
  top: 10%;
  margin: 0;
}
.el-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.my-dialog {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: none;
}
.el-image {
  display: inherit;
}
@media screen and (max-width: 1000px) {
  .buttons {
    margin-left: 5%;
    height: auto;
    line-height: 20%;
    margin-top: 12%;
  }
  .buttons.button2 {
    background: #0f77ff;
    margin-left: 30%;
  }
  .buttons.button3 {
    font-size: xx-small;
  }
  .card-right .card-right-bottom {
    font-size: 12px;
  }
  .card-right .card-font-top {
    font-size: 15px;
  }
  .main1-card-container {
    display: grid;
    grid-template-columns: 1fr;
    height: auto;
  }
  .card {
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;
    margin: 1% 0 0 0;
    padding: 3.6% 0;
  }
  .card-left {
    height: 30%;
    width: 100%;
    border-radius: 8px 0 0 8px;
  }
  .card-left .card-logo-container {
    width: 6%;
    margin: 0 auto;
    top: 20%;
    position: relative;
  }
  .card-right {
    height: 70%;
    width: 100%;
    border-radius: 8px;
  }
  .el-divider {
    display: none;
  }
}
</style>
