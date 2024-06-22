<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import { ProductType, ProductListType } from "@/types/product";
import BaseCarousel from "@/components/base/BaseCarousel.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import { fetchProducts } from "@/actions/productActions";

const props = withDefaults(defineProps<ProductListType>(), {
  parentCategoryId: 0,
  showAsList: false
});

const { productIds } = props;

const products = ref([] as ProductType[]);

const fetchData = async() => {
  if (productIds && productIds.length > 0) {
    try {
      products.value = await fetchProducts(productIds);
    } catch (error) {
      console.error(error);
    }
  }
}

onMounted(() => {
  fetchData();
});

</script>

<template>
  <div
    v-if="products && products.length > 0"
    class="flex flex-col"
  >
    <h2 class="text-2xl font-semibold mb-[24px]">
      Items
    </h2>
    <div v-if="!showAsList">
      <BaseCarousel :show-buttons="products.length > 1">
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            :parent-category-id="parentCategoryId"
        />
      </BaseCarousel>
    </div>
    <div v-else>
      <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          :parent-category-id="parentCategoryId"
          show-as-row
      />
    </div>
  </div>
</template>

<style scoped>

</style>
