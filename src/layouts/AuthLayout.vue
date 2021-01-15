<template>
  <div class="h-auth-container flex min-h-screen">
      <div class="h-left-side w-2/4 z-10 flex-col flex">
          <auth-side></auth-side>
      </div>
      <div class="h-right-side w-2/4 z-10 min-h-screen flex flex-col pl-40 justify-center">
       <slot />
      </div>
  </div>
</template>

<script>
import AuthSide from '../components/authForms/AuthSide.vue'
export default {
    components: {
      AuthSide
    }
}
</script>

<style scoped>
.h-auth-container:before{
    content: "";
    margin-left: -48%;
    background-image: url(../assets/img/bg-login-page.svg);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.h-right-side{
  margin-top: -40px;
}
</style>