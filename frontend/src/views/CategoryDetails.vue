<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import CategoryList from "@/components/category/CategoryList.vue";
import {fetchCategory} from "@/actions/categoryActions";
import IconBackArrow from "@/components/icons/IconBackArrow.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import ProductList from "@/components/product/ProductList.vue";
import {Category} from "@/types/category";

const route = useRoute();
const router = useRouter();
const category = ref<Category>();

const back = () => {
  router.back()
}

onMounted(async () => {
  category.value = await fetchCategory(Number(route.params.id));
});
</script>

<template>
  <div v-if="category" class="m-[64px] w-full flex flex-col gap-[32px]">
    <BaseButton :on-click="back" text="Back" dark>
      <IconBackArrow />
    </BaseButton>
      <div class="flex flex-row gap-[24px] items-center">
        <img :src="category.imageUrl" :alt="category.name" class="h-[64px] w-[64px] mb-2 border-[2px] border-black object-contain object-center" />
        <h1 class="text-4xl font-bold text-black">{{ category.name }}</h1>
      </div>
    <CategoryList :parent-id="category.id" :subcategory="true"/>
    <ProductList
        v-if="category.productCount > 0"
        :product-ids="category.productIds"
        :parentCategoryId="category.id"
    />
  </div>
</template>

<style scoped>
</style>

