<script setup lang="ts">
import { onMounted, ref } from 'vue';
  import { Category, CategoryListType } from "@/types/category";
  import CategoryCard from "@/components/category/CategoryCard.vue";
  import { fetchChildrenCategories } from "@/actions/categoryActions";
  import BaseCarousel from "@/components/base/BaseCarousel.vue";

  const props = withDefaults(defineProps<CategoryListType>(), {
    parentId: 0
  });
  const { parentId } = props;
  const categories = ref([] as Category[]);

  const fetchData = async() => {
    categories.value = await fetchChildrenCategories(parentId);
  }

  onMounted(() => {
    fetchData();
  });
</script>

<template>
  <div
    v-if="categories && categories.length > 0"
    class="flex flex-col w-full"
  >
    <h2
      v-if="subcategory"
      class="text-2xl font-semibold mb-[24px]"
    >
      Subcategory
    </h2>
    <BaseCarousel :show-buttons="categories.length > 1">
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
