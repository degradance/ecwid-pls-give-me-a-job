<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import Wrapper from "@/components/Wrapper.vue";
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
  <Wrapper>
    <div class="flex flex-col items-center justify-center gap-4">
      <div v-if="categoryDetails">
        <button
            @click="back"
            type="button"
            class="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="text-lg">Назад</span>
        </button>
        <h1 class="text-4xl font-bold text-blue-600">{{ categoryDetails.name }}</h1>
        <img :src="categoryDetails.imageUrl" :alt="categoryDetails.name" class="max-h-64 rounded-lg mb-2" />
        <CategoryList :parentId="categoryDetails.id" />
      </div>
    </div>
  </Wrapper>
</template>

<style scoped>
</style>

