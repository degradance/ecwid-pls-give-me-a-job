<script lang="ts">
  import axios from 'axios';
  import { defineComponent } from 'vue';
  import { Category } from "@/types/category";

  export default defineComponent({
    name: 'CategoryList',
    data() {
      return {
        categories: [] as Category[]
      };
    },
    mounted() {
      this.fetchCategories();
    },
    methods: {
      async fetchCategories() {
        try {
          const response = await axios.get<Category[]>('/api/categories');
          console.log(response.data);
          this.categories = response.data.items;
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      }
    }
  });
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-11">
    <h1 class="text-4xl font-bold text-blue-600">Категории</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      <div v-for="category in categories" :key="category.id" class="w-64 flex flex-col items-center p-2 mb-2 shadow-md bg-white">
        <div class="h-64">
          <img :src="category.imageUrl" :alt="category.name" class="max-h-full rounded-lg mb-2" />
        </div>
        {{ category.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
