<script setup lang="ts">

import IconBackArrow from "@/components/icons/IconBackArrow.vue";
import ProductList from "@/components/product/ProductList.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import {useRouter} from "vue-router";
import {clearItems, getSavedItems} from "@/actions/localStorageActions";
import {computed, onMounted, onUnmounted, ref} from "vue";
import BasePopup from "@/components/base/BasePopup.vue";

const router = useRouter();
const back = () => {
  router.back()
}
const savedItems = ref(getSavedItems());
const items = computed(() => savedItems.value);
const showPopup = ref(false);
const updateSavedItems = () => {
  savedItems.value = getSavedItems();
};
const makePurchase = () => {
  showPopup.value = true;
  clearItems();
};
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
  <div class="m-[64px] w-full flex flex-col gap-[32px]">
    <BaseButton
      :on-click="back"
      text="Continue shopping"
      dark
    >
      <IconBackArrow />
    </BaseButton>
    <h1 class="text-4xl font-bold text-black">
      Cart
    </h1>
    <div v-if="items.length > 0">
      <ProductList
        :product-ids="items"
        show-as-list
      />
      <p>
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
