<script lang="ts">
  import { defineComponent } from 'vue';
  import { Category } from "@/types/category";
  import CategoryItem from "@/components/CategoryItem.vue";
  import {fetchChildrenCategories} from "@/actions/categoryActions";

  export default defineComponent({
    name: 'CategoryList',
    components: { CategoryItem },
    props: {
      parentId: { type: Number, default: 0 },
    },
    data() {
      return {
        categories: [] as Category[]
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        this.categories = await fetchChildrenCategories(this.parentId);
      }
    }
  });
</script>

<template>
  <div v-if="categories && categories.length > 0">
    <div class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        <CategoryItem
            v-for="category in categories"
            :key="category.id"
            :category="category"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
