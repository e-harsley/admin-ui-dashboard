<template>
  <div id="app" class="bg-purple-900 pb-6 min-h-screen">
      <div class="sidebar w-2/12 fixed pt-6 pl-1 ">
        <sidebar></sidebar>
      </div>
      <div class="main pt-6 pr-6">
          <div class="bg-gray-50 min-h-screen rounded-3xl shadow-md px-2 pb-10">
              <Header />
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
import Sidebar from '../components/DashComponent/Sidebar'
import Header from '../components/DashComponent/Header';

export default {
    components: {
        Sidebar,
        Header
    }
}
</script>

<style scoped>
.main {
  margin-left: 16.666667%;
}
</style>