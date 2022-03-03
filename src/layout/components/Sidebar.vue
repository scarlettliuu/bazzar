<template>
    <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Home</span>
        </template>
        <el-menu-item-group>
          <template slot="title">TBC</template>
          <el-menu-item index="1-1">TBC1</el-menu-item>
          <el-menu-item index="1-2">TBC2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Club">
          <el-menu-item index="1-3">TBC</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">TBC</template>
          <el-menu-item index="1-4-1"></el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">TBC</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">TBC</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">TBC</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
