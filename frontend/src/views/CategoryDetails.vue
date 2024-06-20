<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import CategoryList from "@/components/CategoryList.vue";
import {fetchCategory} from "@/actions/categoryActions";

const route = useRoute();
const router = useRouter();
const categoryDetails = ref<any>(null);

const back = () => {
  router.back()
}

onMounted(async () => {
  categoryDetails.value = await fetchCategory(Number(route.params.id));
});
</script>

<template>
  <div v-if="categoryDetails" class="m-[64px] w-full flex flex-col gap-[32px]">
      <button
          @click="back"
          type="button"
          class="bg-black text-white px-4 py-2 flex items-center h-[42px] w-fit"
      >
        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="text-lg">Назад</span>
      </button>
      <div class="flex flex-row gap-[24px] items-center">
        <img :src="categoryDetails.imageUrl" :alt="categoryDetails.name" class="max-h-[64px] mb-2 border-[2px] border-black" />
        <h1 class="text-4xl font-bold text-black">{{ categoryDetails.name }}</h1>
      </div>
    <CategoryList :parentId="categoryDetails.id" :subcategory="true"/>
  </div>
</template>

<style scoped>
</style>

