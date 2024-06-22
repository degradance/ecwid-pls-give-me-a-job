<script setup lang="ts">
import { ProductCardType } from "@/types/product";
import { useRouter } from "vue-router";
import { deleteItem } from "@/actions/localStorageActions";
import BaseButton from "@/components/base/BaseButton.vue";

const props = withDefaults(defineProps<ProductCardType>(), {
  showAsRow: false
});
const { parentCategoryId, product } = props;

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
    <div
      class="card-container shadow-md"
      @click="navigateToProductDetails"
    >
      <div class="relative w-full h-[160px]">
        <img
          class="w-full h-full object-cover object-center"
          :src="product.thumbnailUrl"
          :alt="product.name"
        />
      </div>
      <div class="p-2 text-center text-white bg-black text-2xl">
        {{ product.name }}
      </div>
    </div>
  </div>
  <div v-else>
    <div class="w-[600px] flex flex-row items-center mb-2 border-b border-t justify-between">
      <div
        class="flex flex-row gap-[24px] items-center"
        @click="navigateToProductDetails"
      >
        <div class="relative h-[100px] cursor-pointer">
          <img
            class="w-full h-full object-cover object-center"
            :src="product.thumbnailUrl"
            :alt="product.name"
          />
        </div>
        <div class="p-2 text-center text-black bg-transparent text-xl">
          {{ product.name }}
        </div>
      </div>
      <BaseButton
        :on-click="deleteFromCart"
        text="Delete"
        dark
      />
    </div>
  </div>
</template>

<style scoped>
.card-container {
  width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
  color: var(--amber-200);
  background-color: var(--black);
  cursor: pointer;
}
.card-container:hover {
  background-color: var(--magenta);
}
</style>
