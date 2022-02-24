<template>
  <div class="register-container">

  <el-form :model="registerForm" :rules="registerRules" ref="registerForm" label-width="100px" class="register-form">
    <div class="title-container">
      <h3 class="title">University Bazzar System Registration</h3>
    </div>

    <el-form-item label="UniversityID" prop="id">
      <el-input v-model="registerForm.id"></el-input>
    </el-form-item>
    <el-form-item label="Username" prop="username">
      <el-input v-model="registerForm.username"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="registerForm.password"></el-input>
    </el-form-item>
    <el-form-item label="Telephone" prop="tel">
      <el-input v-model="registerForm.tel"></el-input>
    </el-form-item>
    <el-form-item label="E-mail" prop="email">
      <el-input v-model="registerForm.email"></el-input>
    </el-form-item>

    <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="registerDone">Submit</el-button>
    <el-button type="info" style="width:100%;margin-bottom:30px;" @click="clearForm">Cancel</el-button>

  </el-form>
  </div>

</template>

<script>
export default {
  data () {
    const validateID = (rule, value, callback) => {
      if (value <= 0 || value > 9999999999) {
        callback(new Error('Please enter valid University ID!'))
      } else {
        callback()
      }
    }
    const validateUsername = (rule, value, callback) => {
      if (value.length < 5 || value.length > 12) {
        callback(new Error('Username is expected 5 to 12 characters!'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        id: '',
        username: '',
        password: '',
        tel: '',
        email: ''
      },
      registerRules: {
        id: [{ required: true, trigger: 'blur', validator: validateID }],
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  methods: {
    registerDone () {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.$router.push({ path: '/login' })
        }
      })
    },
    clearForm () {
      this.$router.push({ path: 'login' })
      this.$refs.registerForm.resetFields()
      console.log('clear form!')
    }
  }
}
</script>
