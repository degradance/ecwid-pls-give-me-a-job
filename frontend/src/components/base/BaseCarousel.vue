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
  <div class="flex items-center w-full justify-center relative">
    <div
      v-if="showButtons"
      class="button-wrapper left-btn"
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
      class="carousel-wrapper"
    >
      <div class="spacer" />
      <slot />
      <div class="spacer" />
    </div>
    <div
      v-if="showButtons"
      class="button-wrapper right-btn"
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
  position: absolute;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  z-index: 10;
}
.left-btn {
  left: -5px;
  background: linear-gradient(to right, var(--white), var(--white), transparent);
}
.right-btn {
  right: -5px;
  background: linear-gradient(to left, var(--white), var(--white), transparent);
}
.carousel-btn:hover {
  fill: var(--magenta);
}
.carousel-wrapper {
  width: fit-content;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  gap: 24px;
}
.spacer:after {
  content: "";
  display: block;
  width: 40px;
}
@media (max-width: 600px) {
  .button-wrapper {
    height: 200px;
  }
}
</style>
