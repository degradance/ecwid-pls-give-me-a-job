<script lang="ts">
  import { defineComponent } from 'vue';
  import { Category } from "@/types/category";
  import CategoryItem from "@/components/CategoryItem.vue";
  import {fetchChildrenCategories} from "@/actions/categoryActions";
  import IconLeftArrow from "@/components/icons/IconLeftArrow.vue";
  import IconRightArrow from "@/components/icons/IconRightArrow.vue";

  export default defineComponent({
    name: 'CategoryList',
    components: {IconRightArrow, IconLeftArrow, CategoryItem },
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
      scrollLeft() {
        const container = document.querySelector('.overflow-x-auto');
        if (container) {
          container.scrollLeft -= 200; // Adjust scroll distance as needed
        }
      },
      scrollRight() {
        const container = document.querySelector('.overflow-x-auto');
        if (container) {
          container.scrollLeft += 200; // Adjust scroll distance as needed
        }
      }
    }
  });
</script>

<template>
  <div v-if="categories && categories.length > 0" class="flex flex-col items-center justify-center">
    <h2 v-if="subcategory">Подкатегории</h2>
    <div class="flex items-center">
      <button v-if="categories.length > 2" @click="scrollLeft" class="chevron m-[24px]">
        <IconLeftArrow />
      </button>
      <div class="overflow-x-auto flex flex-row gap-8">
        <CategoryItem
            v-for="category in categories"
            :key="category.id"
            :category="category"
        />
      </div>
      <button v-if="categories.length > 2" @click="scrollRight" class="chevron m-[24px]">
        <IconRightArrow />
      </button>
    </div>
  </div>
</template>

<style scoped>
 .chevron {
   position: sticky;
 }
</style>
