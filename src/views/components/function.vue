<template>
  <div class="container" id="function">
    <div class="function">
      <div class="function-header">
        <div class="function-header-title">
          细致打磨每一处功能，只为更好的体验
        </div>
        <div class="function-header-describe">
          ZMap洞悉地图智能应用的每个环节，将涉及到的每个功能都打磨得恰到好处，让每个角色都能轻松使用。
        </div>
      </div>
      <div class="function-body">
        <div class="function-body-box">
          <div v-for="(item,i) in 12" :key="item" class="function-body-box-card" @mouseover="hoverIndex=i"
            @mouseout="hoverIndex=-1" :class="{'card-shadow':hoverIndex==i}">
            <div class="card-top">
              <div class="card-logo">
                <el-image :src="require('@/views/images/function-card-logo.png')" />
              </div>
              <div class="card-title">多数据源整合</div>
            </div>
            <div class="card-bottom">
              <div class="card-describe">
                一键链接百种数据源，支持多数据源关联，消除孤岛
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="function-footer"></div>
    </div>
    <!-- <div class="detail"></div> -->
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
.container {
  width: 100%;
  height: 100%;
}
/* .function-footer {
  height: 193px;
} */
.card-describe {
  width: 90%;
  margin: 0 auto;
}
.card-shadow {
  box-shadow: 0px 0px 6px 0px rgba(15, 119, 255, 0.3);
}
.card-title {
  height: 100%;
  width: 120px;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 50px;
  margin-left: 4%;
}

.card-top {
  /* height: 47px; */
  height: 45.2%;
  display: flex;
}
.card-logo {
  /* width: 52px; */
  width: 22%;
  margin-left: 4%;
}
.card-bottom {
  height: 43px;
  height: 43px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 28px;
}
.function-body {
  height: 54.7%;
}
.function-body-box-card {
  /*
  height: 25.4%;
  width: 238px;
   */
  height: 104px;
  width: 23.66%;
  border-radius: 8px;
}
.function-body-box {
  /* height: 410px; */
  height: 100%;
  width: 1006px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.function-header {
  height: 20%;
}
.function-header-title {
  font-size: 25px;
  font-family: Alibaba PuHuiTi;
  font-weight: 600;
  color: rgba(60, 60, 60, 1);
  margin: 0 auto;
  text-align: center;
}
.function-header-describe {
  width: 656px;
  height: 74px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(154, 154, 154, 1);
  line-height: 30px;
  margin: 0 auto;
}
.function {
  width: 100%;
  /* height: 100%; */
  height: 80%;
  margin-top: 5%;
  background: #ffffff;
}
/* .detail {
  width: 100%;
  height: 50%;
  background: rosybrown;
} */
@media screen and (max-width: 1000px) {
  .function-body-box {
    display: grid;
    grid-template-columns: 1fr;
    height: auto;
    width: auto;
  }
  .function-body-box-card {
    width: 99%;
    margin: 0 auto;
  }
  .function-footer {
    height: 0px;
  }
  .function-header-title {
    margin-top: 12%;
    width: 90%;
    text-align: center;
    height: 80px;
  }
  .function-header-describe {
    width: 90%;
    text-align: center;
  }
  .card-logo {
    width: auto;
  }
}
</style>
