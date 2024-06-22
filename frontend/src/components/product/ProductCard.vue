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
      <div class="card-wrapper">
        <img
          class="w-full h-full object-cover object-center"
          :src="product.thumbnailUrl"
          :alt="product.name"
        />
      </div>
      <div class="text-center text-white bg-transparent product-name">
        {{ product.name }}
      </div>
    </div>
  </div>
  <div v-else>
    <div class="row-container flex flex-row items-center mb-2 border-b border-t justify-between">
      <div
        class="flex flex-row gap-[12px] justify-between items-center"
        @click="navigateToProductDetails"
      >
        <div class="relative h-[100px] cursor-pointer">
          <img
            class="w-full h-full object-cover object-center"
            :src="product.thumbnailUrl"
            :alt="product.name"
          />
        </div>
        <div class="text-center text-black bg-transparent product-name">
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
.row-container {
  max-width: 600px;
  width: 100%;
}
.card-wrapper {
  position: relative;
  width: 100%;
  height: 160px;
}
.product-name {
  font-size: 20px;
  line-height: 28px;
  padding: 8px;
}
@media (max-width: 600px) {
  .card-container {
    width: 160px;
  }
  .card-wrapper {
    height: 120px;
  }
  .product-name {
    font-size: 16px;
    line-height: 20px;
    padding: 4px;
    height: 46px;
  }
}
</style>
