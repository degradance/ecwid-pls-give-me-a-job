<script setup>
import {useRouter} from "vue-router";
import BaseButton from "@/components/base/BaseButton.vue";
import IconCart from "@/components/icons/IconCart.vue";
import {computed, onMounted, onUnmounted, ref} from 'vue';
import { getSavedItems } from '@/actions/localStorageActions';

const router = useRouter();
const goToHome = () => {
  router.push("/");
}
const goToCart = () => {
  router.push("/cart");
}
const savedItems = ref(getSavedItems());
const counter = computed(() => savedItems.value.length);
const counterStr = computed(() => counter.value < 99 ? counter.value : "99+");

const updateSavedItems = () => {
  savedItems.value = getSavedItems();
};

onMounted(() => {
  window.addEventListener('storage', updateSavedItems);
});

onUnmounted(() => {
  window.removeEventListener('storage', updateSavedItems);
});
</script>

<template>
  <header class="bg-black text-amber-200 flex items-center justify-between p-4">
    <h1 @click="goToHome" class="text-3xl font-sans cursor-pointer">.shop</h1>
    <div class="cart-container">
      <div v-if="counter > 0" @click="goToCart" class="counter-badge">
        <div class="counter">
          {{counterStr}}
        </div>
      </div>
      <BaseButton :on-click="goToCart" text="Cart" :dark="false">
        <IconCart />
      </BaseButton>
    </div>
  </header>

  <main>
    <div id="app">
      <router-view />
    </div>
  </main>
</template>

<style scoped>
.cart-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
.counter-badge {
  cursor: pointer;
  background: #f33636;
  border-radius: 50%;
  width: 29px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.counter {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}
</style>
