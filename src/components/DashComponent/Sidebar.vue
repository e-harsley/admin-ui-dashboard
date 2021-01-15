<template>
      <img src="../../assets/img/logo-dark.svg" class="pl-5 pt-3.5 pb-3.5" style="width: 131px;" alt="">
      <ul class="py-2">
        <li
          class="py-4 pl-4 bg-gray-50 text-gray-800 rounded-l-full li-active"
          style="position: relative"
        >
          <span class="c-top-span">
            <span class="c-top-span-curve"></span>
          </span><router-link :to="{name: 'Dashboard' }" class="text-black text-base"><i class="mr-3 icofont-home text-purple-900 text-2xl"></i>  Dashboard</router-link>
          <span></span>
          <span class="c-bottom-span">
            <span class="c-bottom-span-curve"></span>
          </span>
        </li>
        <li class="py-4 pl-4 hover:bg-purple-800 rounded-l-full">
         <router-link :to="{name: 'Investors'}" class="text-gray-100 text-sm"><i class="mr-3 icofont-ui-user-group text-2xl"></i>  Investors</router-link>
        </li>
        <li class="py-4 pl-4 hover:bg-purple-800 rounded-l-full">
          <a href="" class="text-gray-100 text-sm"><i class="mr-3 icofont-bag-alt text-2xl"></i>  Co Earn</a>
        </li>
        <li class="py-4 pl-4 hover:bg-purple-800 rounded-l-full">
          <a href="" class="text-gray-100 text-sm"><i class="mr-3 icofont-ui-home text-2xl"></i>  HomeVest</a>
        </li>
        <li class="py-4 pl-4 hover:bg-purple-800 rounded-l-full">
          <a href="" class="text-gray-100 text-sm"><i class="mr-3 icofont-card text-2xl"></i> Payments</a>
        </li>
        <li class="py-4 pl-4 hover:bg-purple-800 rounded-l-full">
          <a href="" class="text-gray-100 text-sm"><i class="mr-3 icofont-pay text-2xl"></i>  HomeVest Requests</a>
        </li>
        <li class="py-4 pl-4 hover:bg-purple-800 rounded-l-full">
          <a href="" class="text-gray-100 text-sm"><i class="mr-3 icofont-card text-2xl"></i>  HomeVest Special Requests</a>
        </li>
        <li class="py-4 pl-4 hover:bg-purple-800 rounded-l-full">
          <a href="" class="text-gray-100 text-sm"><i class="mr-3 icofont-money text-2xl"></i>  Commissions</a>
        </li>
        <li class="py-4 pl-4 hover:bg-purple-800 rounded-l-full">
          <a href="" class="text-gray-100 text-sm"><i class="mr-3 icofont-checked text-2xl"></i>  Payouts</a>
        </li>
        <li class="py-4 pl-4 hover:bg-purple-800 rounded-l-full">
          <a href="" class="text-gray-100 text-sm"><i class="mr-3 icofont-coins text-2xl"></i>  Withholding Taxes</a>
        </li>
      </ul>
</template>

<script>
export default {

}
</script>

<style>
.c-top-span-curve {
  clip-path: polygon(
    80% 49%,
    63% 70%,
    46% 84%,
    30% 92%,
    15% 96%,
    0 100%,
    0 0,
    100% 0,
    92% 24%
  );
  background: #4C1D95;
  width: 101%;
  position: absolute;
  height: 100%;
  margin-left: -1%;
}




.c-top-span {
  display: block;
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: #f9fafb;
  top: -1rem;
  right: 0;
}
.c-bottom-span-curve {
  clip-path: polygon(
    43% 16%,
    67% 35%,
    81% 56%,
    89% 73%,
    95% 88%,
    100% 100%,
    0 100%,
    0 0,
    21% 6%
  );
  background: #4C1D95;
  width: 101%;
  position: absolute;
  margin-left: -1%;
  height: 100%;
}
.c-bottom-span {
  display: block;
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: #f9fafb;
  bottom: -1rem;
  right: 0;
}
</style>