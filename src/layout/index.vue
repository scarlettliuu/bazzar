<template>
  <!-- <div class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <app-main />
    </div>
  </div> -->
  <div>
    <div class="app-wrapper">
      <sidebar class="sidebar-container">
      </sidebar>
        <div class="main-container">
          <app-header />
        </div>
        <app-main />
    </div>
  </div>
</template>

<script>
// import { Navbar, Sidebar, AppMain } from './components'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import Sidebar from './components/Sidebar.vue'
// import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppMain,
    Sidebar
    // Sidebar,
    // AppMain
  }

}
</script>

<style lang="scss" scoped>

  .app-wrapper {
    /*@include clearfix;*/
    position: relative;
    height: 100%;
    width: 100%;
  }

    .main-container {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 210px;
    position: relative;
  }

  .sidebar-container {
    transition: width 0.28s;
    width: 210px !important;
    background-color: #304156;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  app-header {
    position: absolute;
    line-height: 50px;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: #2d3a4b;
  }

  sidebar {
    position: absolute;
    width: 200px;
    top: 50px;
    left: 0px;
    bottom: 0px;
    overflow-y: auto;
    background-color: #545c64;
  }

  app-main {
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 50px;
  }

</style>
