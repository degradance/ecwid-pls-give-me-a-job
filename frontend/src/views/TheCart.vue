<script setup lang="ts">

import IconBackArrow from "@/components/icons/IconBackArrow.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useRouter } from "vue-router";
import { clearItems, getSavedItems } from "@/actions/localStorageActions";
import { computed, onMounted, onUnmounted, ref } from "vue";
import BasePopup from "@/components/base/BasePopup.vue";
import ProductCard from "@/components/product/ProductCard.vue";
import { ProductType } from "@/types/product";
import { fetchProducts } from "@/actions/productActions";

const router = useRouter();
const back = () => {
  router.back()
}
const savedItems = ref(getSavedItems());
const items = computed(() => savedItems.value);
const showPopup = ref(false);
const updateSavedItems = () => {
  savedItems.value = getSavedItems();
  fetchData();
};
const makePurchase = () => {
  showPopup.value = true;
  clearItems();
};
const products = ref([] as ProductType[]);

const fetchData = async() => {
  if (items && items.value.length > 0) {
    try {
      products.value = await fetchProducts(items.value);
    } catch (error) {
      console.error(error);
    }
  }
}

fetchData();

onMounted(() => {
  window.addEventListener('storage', updateSavedItems);
});
onUnmounted(() => {
  window.removeEventListener('storage', updateSavedItems);
});

</script>

<template>
  <BasePopup
    v-if="showPopup"
    @close="showPopup = false"
  >
    <h2 class="text-4xl font-bold text-black">Congratulations!</h2>
    <div>
      Order successfully placed.
    </div>
  </BasePopup>
  <div class="p-[32px] w-full flex flex-col gap-[32px]">
    <BaseButton
      :on-click="back"
      text="Continue shopping"
      dark
      special
    >
      <IconBackArrow />
    </BaseButton>
    <h1 class="text-4xl font-bold text-black">
      Cart
    </h1>
    <div v-if="items.length > 0" class="w-full">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :parent-category-id="0"
        show-as-row
      />
      <p class="text-xl mb-[6px]">
        Total Items: {{ items.length }}
      </p>
      <BaseButton
        :on-click="makePurchase"
        text="Place order"
        dark
        special
      />
    </div>
    <div v-else>
      No items added.
    </div>
  </div>
</template>

<style scoped>

</style>
