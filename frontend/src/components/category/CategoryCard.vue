<script setup lang="ts">
import { Category } from "@/types/category";
import {useRouter} from "vue-router";

const props = defineProps<{ category: Category }>();
const { category } = props;

const router = useRouter();

const navigateToCategoryDetails = () => {
  router.push({
    name: 'CategoryDetails',
    params: { id: category.id },
    state: { category }
  });
};
</script>

<template>
  <div @click="navigateToCategoryDetails" class="w-[228px] h-full flex flex-col items-center mb-2 shadow-md bg-black text-amber-200 cursor-pointer relative">
    <div class="relative w-full h-[228px]">
      <img
          :src="category.imageUrl"
          :alt="category.name"
          class="w-full h-full object-cover object-center"
          loading="lazy"
      />
      <div class="absolute inset-0 gradient-overlay"></div>
    </div>
    <div class="p-2 text-center text-white bg-black text-2xl">
      {{ category.name }}
    </div>
  </div>
</template>

<style scoped>
.gradient-overlay {
  background: rgba(0, 0, 0, 0.20);
}
</style>

