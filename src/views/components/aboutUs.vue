<template>
  <div class="container" id="aboutUs">
    <div class="aboutUs-header">
      <div class="aboutUs-header-empty"></div>
      <div class="aboutUs-header-title">联系我们</div>
    </div>
    <div class="aboutUs-body">
      <div class="aboutUs-body-header"></div>
      <div class="aboutUs-body-body">
        <div class="aboutUs-body-left">
          <div class="aboutUs-qrCode">
            <el-image :src="require('@/views/images/qrCode.png')" />
          </div>
          <div class="aboutUs-contact">对产品方案感兴趣或需要 报价，请致电：</div>
          <div class="contact-link aboutUs-contact">(021)6127667-1598</div>
          <div class="aboutUs-contact">或邮件至:</div>
          <div class="contact-link aboutUs-contact">zhang.hong@topcheer.com</div>
          <!-- <el-button class="try-button" type="primary" round @click="toFreeTry">免费试用</el-button> -->
        </div>
        <div class="aboutUs-body-left1000">
          <div class="aboutUs-qrCode1000">
            <el-image :src="require('@/views/images/qrCode.png')" />
          </div>
          <div class="aboutUs-contact1000">
            对产品方案感兴趣或需要 报价，请致电：
            <font class="contact-link">(021)6127667-1598</font> 或邮件至：
            <font class="contact-link">zhang.hong@topcheer.com</font>
          </div>
        </div>
        <div class="aboutUs-body-right">
          <el-form label-width="15px" ref="form" :rules="rules" :model="form">
            <el-row>
              <el-col :span=" 12">
                <el-form-item prop="name" label=" ">
                  <el-input v-model="form.name" placeholder="如何称呼您"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item prop="company" label=" ">
                  <el-input v-model="form.company" placeholder="贵公司名称"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item prop="email" label=" ">
                  <el-input type="email" v-model="form.email" placeholder="您的邮箱"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item prop="phone" label=" ">
                  <el-input v-model="form.phone" placeholder="联系电话"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item prop="content" class="form-content">
                  <el-input type="textarea" :rows="7" placeholder="咨询内容" v-model="form.content"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-button :disabled="submited" class="submit-button" type="primary" round @click="onSubmit">提交</el-button>
          </el-form>
        </div>
      </div>
    </div>
    <div class="aboutUs-footer">
      <div class="aboutUs-footer-title">©2019 上海天正软件有限公司</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      submited: false,
      form: {
        name: '',
        company: '',
        email: '',
        phone: '',
        content: ''
      },
      rules: {
        name: [{ required: true, message: '请输入您的称呼', trigger: 'blur' }],
        company: [
          { required: true, message: '请选择您的公司', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请填写您的邮箱', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change']
          }
        ],
        phone: [{ required: true, message: '请填写您的电话', trigger: 'blur' }]
      }
    }
  },
  methods: {
    toFreeTry () {
      this.$router.push('/freeTry')
    },
    onSubmit () {
      const that = this
      //   that.submited = true
      this.$refs.form.validate(valid => {
        if (valid) {
          that.post('/api/zmap/zmap-customer/add', that.form).then(res => {
            if (res) {
              that.submited = false
              that.$refs.form.resetFields()
              this.$notify({
                title: '成功',
                message: '已经成功收到您的信息',
                type: 'success',
                offset: 200
              })
            }
          })
        } else {
          that.submited = false
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.try-button {
  width: 78%;
  margin-left: 11%;
}
.submit-button {
  min-width: 26%;
  position: relative;
  width: 2% 0 0 26%;
  margin-left: 36%;
  margin-top: 4.8%;
}
.contact-link {
  color: #0f77ff;
  word-break: break-all;
}
.aboutUs-contact {
  line-height: 30px;
  font-size: 14px;
  font-family: HiraginoSansGB-W3;
  max-width: 100%;
}
.aboutUs-body-body {
  height: 386px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.aboutUs-body-header {
  height: 16px;
  width: 100%;
}
.aboutUs-body-left {
  height: 100%;
  width: 10.1%;
}
.aboutUs-body-right {
  height: 100%;
  width: 30%;
}
.aboutUs-header-title {
  width: 120px;
  font-size: 25px;
  font-family: Alibaba PuHuiTi;
  font-weight: 600;
  color: rgba(60, 60, 60, 1);
  line-height: 30px;
  margin: 0 auto;
}
.aboutUs-header-empty {
  height: 150px;
}
.aboutUs-header {
  height: 270px;
}
.aboutUs-body {
  /* height: 507px; */
  display: flex;
  flex-wrap: wrap;
}
.aboutUs-footer {
  height: 203px;
}
.aboutUs-footer-title {
  width: 100%;
  text-align: center;
  bottom: 6%;
  height: 6%;
  line-height: -3%;
  position: absolute;
  /* background-color: #0f77ff; */
  line-height: 50px;
  color: (197, 200, 208);
}
.aboutUs-contact1000 {
  width: 90%;
  line-height: 30px;
  font-size: 14px;
  font-family: HiraginoSansGB-W3;
  margin: 0 auto;
  /* display: flex;
  justify-content: center;*/
}
.aboutUs-body-left1000 {
  display: none;
  width: 100%;
  top: 40px;
  position: relative;
}
.aboutUs-qrCode1000 {
  width: 30%;
  margin: 0 auto;
}
.el-form-item {
  margin: 0 auto;
  width: 81%;
}
.form-content {
  width: 90%;
}
.el-row {
  margin-bottom: 30px;
}
.el-row:last-of-type {
  margin-bottom: 0;
}
.el-button--primary {
  background: #0f77ff;
}
.el-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
@media screen and (max-width: 1000px) {
  .aboutUs-footer {
    height: 80px;
  }
  .aboutUs-footer-title {
    position: absolute;
    bottom: 0%;
    width: 100%;
    text-align: center;
    height: 0.5%;
    color: (197, 200, 208);
    /* background-color: #0f77ff; */
  }
  .aboutUs-header {
    height: auto;
  }
  .aboutUs-header-empty {
    display: none;
  }
  .aboutUs-body-left1000 {
    display: inline;
  }
  .aboutUs-body-right {
    width: 100%;
  }
  .aboutUs-body-body {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }
  .aboutUs-body-left {
    display: none;
    width: 100%;
  }
}
</style>
