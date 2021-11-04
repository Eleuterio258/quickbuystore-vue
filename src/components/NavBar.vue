<template>
  <div
    class="text-sm text-center md:flex md:flex-row md:justify-between sm:text-base"
  >
    <div class="flex flex-row justify-center">
     <img  alt="" width="80" height="80">
      <h1 class="ml-2 text-3xl text-gray-600">QUICKBUYSTORE</h1>
    </div>
    <div class="mt-2">
      <a href="#" class="p-4 px-3 text-gray-600 hover:text-purple-600 sm:px-4"
        >Home</a
      >
      <a href="#" class="p-4 px-3 text-gray-600 hover:text-purple-600 sm:px-4"
        >Shop</a
      >
      <a href="#" class="p-4 px-3 text-gray-600 hover:text-purple-600 sm:px-4"
        >Blog</a
      >
      <a href="#" class="p-4 px-3 text-gray-600 hover:text-purple-600 sm:px-4"
        >Contact</a
      >
      <a
        href="#"
        class="p-3 px-3 bg-purple-600 rounded-full text-gray-50 hover:bg-purple-700 sm:px-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block w-5 h-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Cart (15)
      </a>
    </div>
  </div>
</template>
<script>

export default {
 name:"NaviBar", data() {
    return {
      logo: "logo.png",
     
    };
  },
}
</script>
