<template>
  <div class="my-20">
    <div class="flex flex-row justify-between my-5">
      <h2 class="text-3xl">Women's Collection</h2>
      <a href="#" class="flex flex-row text-lg hover:text-purple-700">
        View All
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 ml-1 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
    <div
      class="grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div class="rounded-lg shadow-lg">
        <a href="#">
          <img
            :src="product1"
            class="rounded-tl-lg rounded-tr-lg"
          />
        </a>
        <div class="p-5">
          <h3><a href="#">V Neck Tassel Cape</a></h3>
          <div class="flex flex-row my-3">
            <div class="w-5 h-5 mr-2 bg-black rounded-full shadow-md"></div>
            <div class="w-5 h-5 mr-2 bg-blue-800 rounded-full shadow-md"></div>
            <div class="w-5 h-5 mr-2 bg-white rounded-full shadow-md"></div>
            <div class="w-5 h-5 mr-2 bg-red-800 rounded-full shadow-md"></div>
            <div class="w-5 h-5 mr-2 bg-green-700 rounded-full shadow-md"></div>
          </div>
          <div class="flex flex-row my-3">
            <a
              class="px-2 py-1 mr-2 text-xs text-gray-400 border-2 border-gray-300 rounded-md "
              href="#"
              >XL</a
            >
            <a
              class="px-2 py-1 mr-2 text-xs text-gray-400 border-2 border-gray-300 rounded-md "
              href="#"
              >XXL</a
            >
            <a
              class="px-2 py-1 mr-2 text-xs text-gray-400 border-2 border-gray-300 rounded-md "
              href="#"
              >L</a
            >
            <a
              class="px-2 py-1 mr-2 text-xs text-gray-400 border-2 border-gray-300 rounded-md "
              href="#"
              >M</a
            >
            <a
              class="px-2 py-1 mr-2 text-xs text-gray-400 border-2 border-gray-300 rounded-md "
              href="#"
              >S</a
            >
          </div>
          <div class="flex flex-col justify-between xl:flex-row">
            <a
              class="flex flex-row justify-center px-4 py-2 my-2 text-sm text-white rounded-full bg-gradient-to-r from-red-600 to-pink-500 hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-1"
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
              Add to cart
            </a>
          
          </div>
        </div>
      </div>

      

   
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product1: "/images/products/women/product1.jpg",
      product2: "/images/products/women/product2.jpg",
      product3: "/images/products/women/product3.jpg",
    };
  },
};
</script>
