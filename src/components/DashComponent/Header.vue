<template>
  <div
          class="main_header mx-3 px-3 pt-3 pb-3 flex items-center justify-between border-b border-purple-200"
        >
          <div class="text-gray-600">
            Application > <span class="text-indigo-500">{{ $route.name }}</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-gray-600">
            Welcome, Harsley
          </div>
            <img
              class="w-10 h-10 rounded-full ml-4 object-cover"
              src="../../assets/img/profile.jpg"
            />
          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>