<template>
  <div class="relative w-full overflow-hidden">
    <div :style="{ height: `${imgHeight}px` }" class="relative w-full">
      <slot/>
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-white text-5xl font-sans">{{ label }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  imgHeight: number;
}>();
</script>

<style scoped>
</style>
