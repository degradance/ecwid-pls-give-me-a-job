<script lang="ts">
import { defineComponent } from 'vue';
import { Product } from "@/types/product";
import IconLeftArrow from "@/components/icons/IconLeftArrow.vue";
import IconRightArrow from "@/components/icons/IconRightArrow.vue";
import BaseCarousel from "@/components/base/BaseCarousel.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import {fetchProducts} from "@/actions/productActions";

export default defineComponent({
  name: 'ProductList',
  components: {BaseCarousel, IconRightArrow, IconLeftArrow, ProductCard },
  props: {
    productIds: { type: Array<number>, default: [] },
    parentCategoryId: { type: Number, required: false, default: 0 },
    showAsList: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      products: [] as Product[]
    };
  },
  mounted() {
    this.fetchData();
  },
  updated() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      if (this.productIds && this.productIds.length > 0) {
        this.products = await fetchProducts(this.productIds);
      }
    },
  }
});
</script>

<template>
  <div v-if="products && products.length > 0" class="flex flex-col">
    <h2 class="text-2xl font-semibold mb-[24px]">Items</h2>
    <div v-if="!showAsList">
      <BaseCarousel :show-buttons="products.length > 2">
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
