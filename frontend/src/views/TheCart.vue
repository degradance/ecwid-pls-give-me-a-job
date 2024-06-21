<script setup lang="ts">

import IconBackArrow from "@/components/icons/IconBackArrow.vue";
import ProductList from "@/components/product/ProductList.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import {useRouter} from "vue-router";
import {getSavedItems} from "@/actions/localStorageActions";
import {computed, onMounted, onUnmounted, ref} from "vue";

const router = useRouter();
const back = () => {
  router.back()
}
const savedItems = ref(getSavedItems());
const items = computed(() => savedItems.value);
const updateSavedItems = () => {
  savedItems.value = getSavedItems();
};
const makePurchase = () => {
  // todo
};
onMounted(() => {
  window.addEventListener('storage', updateSavedItems);
});
onUnmounted(() => {
  window.removeEventListener('storage', updateSavedItems);
});

</script>

<template>
  <div class="m-[64px] w-full flex flex-col gap-[32px]">
    <BaseButton :on-click="back" text="Continue shopping" dark>
      <IconBackArrow />
    </BaseButton>
    <h1 class="text-4xl font-bold text-black">Cart</h1>
    <div v-if="items.length > 0">
      <ProductList :product-ids="items" :costyl="items.length" show-as-list />
      <p>
        Total Items: {{ items.length }}
      </p>
    </div>
    <div v-else>
      Empty
    </div>
    <BaseButton :on-click="makePurchase" text="Make purchase" dark special/>
  </div>
</template>

<style scoped>

</style>
