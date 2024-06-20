<script setup>

</script>

<template>
  <header class="bg-black text-amber-200 flex items-center justify-between p-4">
    <h1 class="text-3xl font-sans">Магазинус</h1>
    <button
        @click="goToCart"
        class="flex items-center bg-amber-200 text-black px-4 py-2 rounded-md"
    >
      <svg
          class="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19m-4-8v4m-8-4v4"
        ></path>
      </svg>
      Корзина
    </button>
  </header>

  <main>
    <div id="app">
      <router-view />
    </div>
  </main>
</template>

<style scoped>

</style>
