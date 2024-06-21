<script setup lang="ts">
import {defineProps} from "vue";
import {Product} from "@/types/product";
import {useRouter} from "vue-router";

const props = defineProps<{ product: Product, parentCategoryId: number }>();
const { product, parentCategoryId } = props;

const router = useRouter();

const navigateToProductDetails = () => {
  router.push({
    name: 'ProductDetails',
    params: { categoryId: parentCategoryId, productId: product.id, },
    state: { product }
  });
};
</script>

<template>
  <div @click="navigateToProductDetails" class="w-[160px] h-full flex flex-col items-center mb-2 shadow-md bg-black text-amber-200 cursor-pointer relative">
    <div class="relative w-full h-[160px]">
      <img :src="product.thumbnailUrl" :alt="product.name" class="w-full h-full object-cover object-center" />
    </div>
    <div class="p-2 text-center text-white bg-black text-2xl">
      {{ product.name }}
    </div>
  </div>
</template>

<style scoped>

</style>
