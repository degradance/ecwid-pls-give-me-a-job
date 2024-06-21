<script setup lang="ts">
import {Product} from "@/types/product";
import {useRouter} from "vue-router";
import {deleteItem} from "@/actions/localStorageActions";
import BaseButton from "@/components/base/BaseButton.vue";

const { product, parentCategoryId, showAsRow = false } = defineProps<{
  product: Product,
  parentCategoryId: number,
  showAsRow?: boolean,
}>();

const router = useRouter();

const navigateToProductDetails = () => {
  router.push({
    name: 'ProductDetails',
    params: { categoryId: parentCategoryId, productId: product.id },
    state: { product }
  });
};
const deleteFromCart = () => {
  deleteItem(product.id);
};
</script>

<template>
  <div v-if="!showAsRow">
    <div @click="navigateToProductDetails" class="w-[160px] h-full flex flex-col items-center mb-2 shadow-md bg-black text-amber-200 cursor-pointer relative">
      <div class="relative w-full h-[160px]">
        <img :src="product.thumbnailUrl" :alt="product.name" class="w-full h-full object-cover object-center" />
      </div>
      <div class="p-2 text-center text-white bg-black text-2xl">
        {{ product.name }}
      </div>
    </div>
  </div>
  <div v-else>
    <div class="w-[600px] flex flex-row items-center mb-2 border-b border-t justify-between">
      <div @click="navigateToProductDetails" class="flex flex-row gap-[24px] items-center">
        <div class="relative h-[100px] cursor-pointer">
          <img :src="product.thumbnailUrl" :alt="product.name" class="w-full h-full object-cover object-center" />
        </div>
        <div class="p-2 text-center text-black bg-transparent text-xl">
          {{ product.name }}
        </div>
      </div>
      <BaseButton :on-click="deleteFromCart" text="Delete" dark/>
    </div>
  </div>
</template>

<style scoped>

</style>
