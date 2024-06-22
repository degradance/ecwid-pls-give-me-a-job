<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import IconBackArrow from "@/components/icons/IconBackArrow.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { fetchProducts } from "@/actions/productActions";
import {ProductType} from "@/types/product";
import Gallery from "@/components/product/ImageGallery.vue";
import { addItem, deleteItem, isAdded } from "@/actions/localStorageActions";

const route = useRoute();
const router = useRouter();
const product = ref<ProductType>();

const back = () => {
  router.back()
}

const checkInCart = ref(false);

const addToCart = () => {
  if (product.value) {
    addItem(product.value.id);
    checkInCart.value = true;
  }
}

const deleteFromCart = () => {
  if (product.value) {
    deleteItem(product.value.id);
    checkInCart.value = false;
  }
}

onMounted(async () => {
  try {
    const result = await fetchProducts([Number(route.params.productId)]);
    product.value = result[0];
    if (product.value) {
      checkInCart.value = isAdded(product.value.id);
    }
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div
    v-if="product"
    class="product-details-page flex flex-col gap-[32px]"
  >
    <BaseButton
      :on-click="back"
      text="Back"
      dark
    >
      <IconBackArrow />
    </BaseButton>
    <div class="product-details-container gap-[24px]">
      <Gallery :gallery-images="product.galleryImages" />
      <div class="w-[380px] flex flex-col gap-[24px] items-center">
        <h1 class="text-2xl font-bold text-black">
          {{ product.name }}
        </h1>
        <div class="flex flex-col gap-[24px] h-[350px] w-full">
          <h3 class="text-2xl font-bold text-black">
            Description
          </h3>
          <div
            class="text-justify description overflow-y-auto"
            v-html="product.description"
          />
        </div>
        <div class="flex flex-row gap-[24px] items-center justify-between w-[380px]">
          <p class="text-3xl font-bold text-black">
            &#8381;{{ product.price }}
          </p>
          <div v-if="checkInCart">
            <BaseButton
              :on-click="deleteFromCart"
              text="Delete from Cart"
              dark
            />
          </div>
          <div v-else>
            <BaseButton
              :on-click="addToCart"
              text="Add to Cart"
              dark
              special
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.description > p {
  margin-bottom: 12px;
}
.product-details-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}
.product-details-page {
  padding: 32px;
  width: 100%;
}
@media (max-width: 1200px) {
  .product-details-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>

