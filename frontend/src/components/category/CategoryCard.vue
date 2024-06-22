<script setup lang="ts">
import { CategoryCardType } from "@/types/category";
import { useRouter } from "vue-router";

const props = defineProps<CategoryCardType>();
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
  <div
    class="category-card-container shadow-md"
    @click="navigateToCategoryDetails"
  >
    <div class="relative w-[228px] h-[228px]">
      <img
        class="w-full h-full object-cover object-center"
        :src="category.imageUrl"
        :alt="category.name"
        loading="lazy"
      />
      <div class="absolute inset-0 gradient-overlay" />
    </div>
    <div class="p-2 text-center text-white bg-black text-2xl">
      {{ category.name }}
    </div>
  </div>
</template>

<style scoped>
.gradient-overlay {
  background: var(--black-20);
}
.category-card-container {
  color: var(--amber-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 228px;
  height: 100%;
  cursor: pointer;
  background-color: var(--black);
  position: relative;
}
</style>

