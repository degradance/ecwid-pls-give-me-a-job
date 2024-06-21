<script lang="ts">
  import { defineComponent } from 'vue';
  import { Category } from "@/types/category";
  import CategoryCard from "@/components/category/CategoryCard.vue";
  import {fetchChildrenCategories} from "@/actions/categoryActions";
  import IconLeftArrow from "@/components/icons/IconLeftArrow.vue";
  import IconRightArrow from "@/components/icons/IconRightArrow.vue";
  import BaseCarousel from "@/components/base/BaseCarousel.vue";

  export default defineComponent({
    name: 'CategoryList',
    components: { BaseCarousel, IconRightArrow, IconLeftArrow, CategoryCard },
    props: {
      parentId: { type: Number, default: 0 },
      subcategory: { type: Boolean, default: false },
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
      },
    }
  });
</script>

<template>
  <div v-if="categories && categories.length > 0" class="flex flex-col">
    <h2 v-if="subcategory" class="text-2xl font-semibold mb-[24px]">Subcategory</h2>
    <BaseCarousel :show-buttons="categories.length > 2">
      <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :category="category"
      />
    </BaseCarousel>
  </div>
</template>

<style scoped>

</style>
