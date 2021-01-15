<template>
    <h1 class="text-4xl font-semibold text-gray-500 mb-4">Sign In</h1>
  <form class="flex flex-col justify-center">
        <label class="text-gray-500 text-sm font-semibold py-3">Email</label>
        <input type="email" placeholder="Email" class="py-3 focus:outline-none focus:ring focus:border-blue-300 w-96 shadow-sm p-2 border border-gray-200 rounded-lg" v-model="email" required />

      <label class="text-gray-500 text-sm font-semibold py-3">Password</label>
      <input type="password" placeholder="Password" class="py-3 w-96 focus:outline-none focus:ring focus:border-blue-300 focus:ring-2 focus:ring-gray-300 p-2 shadow-sm border border-gray-200 rounded-lg" v-model="password" required />
      <div class="terms py-3">
        <input type="checkbox" class="mr-3" v-model="terms" required>
        <label class="text-gray-700 text-sm font-normal py-3">Remember me</label>
      </div>
      <button class="bg-purple-800 w-36 text-white border shadow rounded-lg p-2 uppercase">Login</button>
      </form>
</template>

<script>
export default {

}
</script>

<style>

</style>