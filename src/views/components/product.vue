<template>
  <div class="container" id="productId">
    <div class="top">
      <!-- <div class="top-empty"></div> -->
      <div class="top-title">
        <div class="title-font">基于智能网格围栏的新商业服务平台</div>
      </div>
      <div class="top-describe">
        基于地图网格围栏的业务检索展示、数据洞察和行动指引，让商业创新不再遥不可及，不再费时费力，智能时代更要全面智能。
      </div>
    </div>
    <div class="middle">
      <div class="middle-card" :class="{'middle-card-shadow':hoverIndex==1}" @mouseover="hoverIndex=1"
        @mouseout="hoverIndex=-1">
        <div class="middle-card-top">
          <div class="middle-card-top-logo">
            <div class="middle-card-top-logo-container">
              <el-image :src="require('@/views/images/01_changping.png')" />
            </div>
          </div>
          <div class="middle-card-top-title">
            <div class="middle-card-top-title-container">开放合作创新</div>
            <el-divider content-position="center"></el-divider>
          </div>
        </div>
        <div class="middle-card-bottom">
          <div class="middle-card-bottom-describe">
            打通金融机构渠道、消费产品服务提供方和消费者，居间提供基于地图网格围栏的新商业服务，变渠道为入口、引场景服务用户。

          </div>
        </div>
      </div>
      <div class="middle-card" :class="{'middle-card-shadow':hoverIndex==2}" @mouseover="hoverIndex=2"
        @mouseout="hoverIndex=-1">
        <div class="middle-card-top">
          <div class="middle-card-top-logo">
            <div class="middle-card-top-logo-container">
              <el-image :src="require('@/views/images/02_changping.png')" />
            </div>
          </div>
          <div class="middle-card-top-title">
            <div class="middle-card-top-title-container">技术应用创新</div>
            <el-divider content-position="center"></el-divider>
          </div>
        </div>
        <div class="middle-card-bottom">
          <div class="middle-card-bottom-describe">
            平台包含到店、上门、到家和外送等业态新模式数字化服务，服务以API、应用/小程序模版、应用/小程序SDK组件方式提供，无服务器FaaS平台全托管设计。
          </div>
        </div>
      </div>
      <div class="middle-card" :class="{'middle-card-shadow':hoverIndex==3}" @mouseover="hoverIndex=3"
        @mouseout="hoverIndex=-1">
        <div class="middle-card-top">
          <div class="middle-card-top-logo">
            <div class="middle-card-top-logo-container">
              <el-image :src="require('@/views/images/02_changping.png')" />
            </div>
          </div>
          <div class="middle-card-top-title">
            <div class="middle-card-top-title-container">商业服务创新</div>
            <el-divider content-position="center"></el-divider>
          </div>
        </div>
        <div class="middle-card-bottom">
          <div class="middle-card-bottom-describe">
            赋能广大中小和传统商家，提供开箱即用的新导航、新团购、新外卖、新常态无接触服务，更聚合众多开放银行流量入口。
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <!-- <el-image :src="require('@/views/images/product-bottom.jpg')" /> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hoverIndex: -1
    }
  }
}
</script>
<style scoped>
.middle-card-top-title-container {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(15, 119, 255, 1);
  width: 120px;
  margin: 0 auto;
  position: relative;
  top: 10%;
}
.middle-card-top-logo-container {
  margin: 0 auto;
  width: 64px;
  position: relative;
  top: 35%;
}
.middle-card-top-logo {
  height: 50%;
}
.middle-card-top-title {
  height: 50%;
}
.middle-card-top {
  height: 60%;
}
.middle-card-bottom-describe {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  width: 85%;
  margin: 0 auto;
  padding-bottom: 6px;
}
.middle-card-bottom {
  height: 40%;
}
.middle-card-shadow {
  box-shadow: 0px 0px 6px 0px rgba(15, 119, 255, 0.3);
}
.middle-card {
  width: 15%;
  min-height: 100%;
  margin-left: 1%;
  border-radius: 8px;
}

.title-font {
  font-size: 25px;
  font-family: Alibaba PuHuiTi;
  font-weight: 600;
  color: rgba(60, 60, 60, 1);
  margin: 0 auto;
  text-align: center;
}
.top-describe {
  max-width: 779px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(154, 154, 154, 1);
  margin: 0 auto;
}
.top {
  margin-bottom: 25px;
}
.top-empty {
  height: 70%;
}
.top-title {
  border-top: 1px solid #f5f5f5;
  padding-top: 12%;
  height: 20%;
}
.middle {
  min-height: 391px;
  display: flex;
  justify-content: center;
  margin-top: 3%;
}
.bottom {
  height: 128px;
  /* margin: 1.65% 0 0 0; */
}
.container {
  width: 100%;
  height: 100%;
  /* background: #ffffff; */
  background: url('../images/product-bottom.jpg') no-repeat;
  background-position: bottom;
}
.el-divider--horizontal {
  width: 15%;
  height: 2px;
  margin-left: 42%;
}
@media screen and (max-width: 900px) {
  .middle {
    display: grid;
    grid-template-columns: 1fr;
  }
  .middle-card {
    width: 100%;
  }
  .middle-card-top-logo-container {
    width: 32px;
  }
  .top-empty {
    height: 50%;
  }
  .title-font {
    width: 90%;
    text-align: center;
    padding-bottom: 4%;
  }

  .top-describe {
    width: 90%;
    text-align: center;
  }
  .el-divider--horizontal {
    height: 2px;
    margin: 1.35% 0 0 46.5%;
    width: 7%;
  }
}
</style>
