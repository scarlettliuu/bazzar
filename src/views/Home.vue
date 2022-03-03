<template>
    <div>
        <el-form ref="userInfoForm" :model="userInfoForm" label-width="80px">
          <el-form-item label="Username">
              <span>{{ userInfoForm.username }}</span>
          </el-form-item>
          <el-form-item label="Tel">
              <span>{{ userInfoForm.tel}}</span>
          </el-form-item>
          <el-form-item label="E-mail">
              <span>{{ userInfoForm.email}}</span>
          </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      userInfoForm: {
        username: 'Lisa',
        tel: '123456789',
        email: 'lisa@uta.edu.cn'
      }
    }
  }
}
</script>
