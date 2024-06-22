<script setup lang="ts">
import IconLeftArrow from "@/components/icons/IconLeftArrow.vue";
import IconRightArrow from "@/components/icons/IconRightArrow.vue";
import {ref, VNodeRef} from "vue";
import {BaseCarouselType} from "@/types/base";

defineProps<BaseCarouselType>();
const carouselContainer = ref<VNodeRef | null>(null);

const scrollLeft = () => {
  if (carouselContainer.value) {
    carouselContainer.value.scrollBy({ left: -200, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (carouselContainer.value) {
    carouselContainer.value.scrollBy({ left: 200, behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="flex items-center w-full justify-center">
    <div
      v-if="showButtons"
      class="button-wrapper"
    >
      <button
        class="carousel-btn m-[12px]"
        @click="scrollLeft"
      >
        <IconLeftArrow />
      </button>
    </div>
    <div
      ref="carouselContainer"
      class="w-fit overflow-x-scroll flex flex-row gap-8"
    >
      <slot />
    </div>
    <div
      v-if="showButtons"
      class="button-wrapper"
    >
      <button
        class="carousel-btn m-[12px]"
        @click="scrollRight"
      >
        <IconRightArrow />
      </button>
    </div>
  </div>
</template>

<style scoped>
.button-wrapper {
  width: fit-content;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
}
.carousel-btn:hover {
  fill: var(--magenta);
}
</style>
