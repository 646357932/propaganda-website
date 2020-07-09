<template>
  <div class="container">
    <div class="freeTry-header">
      <div class="freeTry-header-text">
        <div class="freeTry-header-title">ZMap免费试用</div>
        <div class="freeTry-header-describe">
          &emsp;&emsp;基于地图的检索展示、数据洞察和行动指引，不在遥不可及，不再费时费力，智能时代全面智能，少不了ZMap智能地图。于是本产品为客户提供便
          捷免费的试用体验，只需要填写简易表单信息，就可在审核成功时试用本产品。
          <font
            class="info"
          >ZMap在任何场合下都不会泄露您的信息</font> ，如果体验过程遇到任何问题，请 拨打
          <font class="contact-link">(021)6127667-1598</font> 。
        </div>
      </div>
    </div>
    <div class="freeTry-body">
      <div class="freeTry-body-form">
        <div class="freeTry-body-form-title">请输入您的信息</div>
        <div class="freeTry-body-form-body">
          <el-form ref="form" label-width="15px" :rules="rules" :model="form">
            <el-form-item prop="name" label=" ">
              <el-input placeholder="联系人姓名" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item prop="email" label=" ">
              <el-input placeholder="联系人邮箱" v-model="form.email">
                <!-- <template slot="append">.com</template> -->
              </el-input>
            </el-form-item>
            <el-form-item prop="mobilePhone" label=" ">
              <el-input
                type="text"
                maxlength="11"
                show-word-limit
                placeholder="联系人手机号"
                v-model="form.mobilePhone"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-input placeholder="联系人电话" v-model="form.telephone"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="联系人地址" v-model="form.adress"></el-input>
            </el-form-item>
            <el-form-item label=" " prop="domainName">
              <el-input placeholder="机构域名" v-model="form.domainName"></el-input>
            </el-form-item>
            <el-form-item label=" " prop="domainName">
              <el-input placeholder="机构及部门名称" v-model="form.mechanism"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="预计总用户数" v-model="form.userCount"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="申请开通应用,多个以逗号隔开" v-model="form.application"></el-input>
            </el-form-item>
            <el-form-item class="submitButton">
              <el-button
                :disabled="submited"
                size="medium"
                type="primary"
                round
                style="width:100%;"
                @click="onSubmit"
              >提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="freeTry-footer"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      submited: false,
      form: {
        email: '',
        name: '',
        mobilePhone: '',
        telephone: '',
        adress: '',
        domainName: '',
        mechanism: '',
        userCount: '',
        application: ''
      },
      rules: {
        email: [{ required: true, message: '请输入您的邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
        name: [
          { required: true, trigger: 'blur', message: '请输入您的姓名' }
        ],
        mobilePhone: [
          { required: true, trigger: 'blur', message: '请输入您的手机' }
        ],
        domainName: [
          { required: true, trigger: 'blur', message: '请输入机构域名' }
        ],
        mechanism: [
          { required: true, trigger: 'blur', message: '请输入机构及部门名称' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      const that = this
      this.$refs.form.validate(valid => {
        if (valid) {
          that.submited = true
          that.post('/api/zmap/zmap-freetry/add', that.form).then(res => {
            if (res) {
              this.$notify({
                title: '成功',
                message: '已经成功收到您的申请',
                type: 'success',
                offset: 200
              })
              that.$router.back(-1)
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
.info {
  color: #e45656;
}
.submitButton {
  width: 150px;
  margin: 80px auto 0;
}
.contact-link {
  color: #0f77ff;
  word-break: break-all;
}
.freeTry-footer {
  width: 100%;
  /* height: 259px; */
}
.freeTry-body-form-body {
  width: 100%;
  height: 600px;
  margin: 0 auto;
}
.freeTry-body-form-title {
  width: 126px;
  height: 80px;
  font-size: 18px;
  font-family: Hiragino Sans GB;
  font-weight: normal;
  color: rgba(80, 80, 80, 1);
  line-height: 80px;
}
.freeTry-body-form {
  width: 50%;
  height: auto;
  margin: 0 auto;
}
.freeTry-body {
  width: 100%;
  height: auto;
}
.freeTry-header-describe {
  max-width: 950px;
  height: 76px;
  font-size: 14px;
  font-family: Hiragino Sans GB;
  font-weight: normal;
  color: rgba(178, 178, 178, 1);
  line-height: 30px;
  margin: 15px auto;
}
.freeTry-header-title {
  width: 125px;
  height: 19px;
  font-size: 18px;
  font-family: Alibaba PuHuiTi;
  font-weight: 600;
  color: rgba(80, 80, 80, 1);
  line-height: 30px;
  margin: 3px 0 0 3.7%;
}
.freeTry-header-text {
  height: 134px;
  width: 54%;
  margin-top: 35px;
  background: #f8f8f8;
}
.freeTry-header {
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
}
.container {
  width: 100%;
  height: 100%;
}
.el-button--primary {
  background: #0f77ff;
}
.el-button--primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
/* .el-input {
  width: 97.765%;
  float: right;
} */
@media screen and (max-width: 1000px) {
  .freeTry-body {
    width: 98%;
  }
  .freeTry-body-form-title {
    position: relative;
    left: 5%;
  }
  .freeTry-header-describe {
    height: auto;
  }
  .freeTry-header-text {
    height: auto;
    width: 90%;
  }
  .freeTry-header {
    height: auto;
  }
  .freeTry-body-form {
    width: 100%;
  }
  .freeTry-footer {
    width: 100%;
    height: 30px;
  }
  .submitButton {
    width: 150px;
    margin: 30px auto 0;
  }
}
</style>
