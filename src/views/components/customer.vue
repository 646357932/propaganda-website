<template>
  <div class="container" id="customer">
    <div class="customer-header">
      <div class="customer-header-title">您信赖的，也信赖我们</div>
    </div>
    <div class="customer-body">
      <div class="customer-logo">
        <el-image :src="require('@/views/images/customer.png')" />
      </div>
    </div>
    <div class="customer-footer">

    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
  width: 100%;
  height: auto;
}
.customer-logo {
  /* margin: 0 auto; */
  height: 100%;
}
.customer-header-title {
  padding-top: 10%;
  width: 250px;
  height: 25px;
  font-size: 24px;
  font-family: Alibaba PuHuiTi;
  font-weight: 600;
  color: rgba(60, 60, 60, 1);
  line-height: 30px;
  margin: 0 auto;
}
.customer-header-empty {
  /* height: 264px; */
  height: 140px;
}
/* .customer-header {
  height: 293px;
} */
.customer-body {
  height: 415px;
  display: flex;
  justify-content: center;
}
.customer-footer {
  height: 293px;
}
.customer-logo /deep/ .el-image {
  top: 141px;
}
@media screen and (max-width: 1000px) {
  .customer-header-title {
    padding-top: 20%;
    width: 250px;
    height: 25px;
    font-size: 24px;
    font-family: Alibaba PuHuiTi;
    font-weight: 600;
    color: rgba(60, 60, 60, 1);
    line-height: 30px;
    margin: 0 auto;
  }
  .customer-footer {
    display: none;
  }
  .customer-header {
    height: auto;
  }
  .customer-header-empty {
    height: 176px;
  }
  .customer-body {
    width: 95%;
    margin: 0 auto;
    margin-bottom: 40%;
  }
}
</style>
