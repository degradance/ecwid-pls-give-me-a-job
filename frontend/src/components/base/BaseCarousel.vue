<template>
  <div class="flex items-center w-full">
    <button v-if="showButtons" @click="scrollLeft" class="absolute left-0 z-10 m-[12px]">
      <IconLeftArrow />
    </button>
    <div ref="carouselContainer" class="w-fit overflow-x-scroll flex flex-row gap-8">
      <slot />
    </div>
    <button v-if="showButtons" @click="scrollRight" class="absolute right-0 z-10 m-[12px]">
      <IconRightArrow />
    </button>
  </div>
</template>

<script lang="ts">
import IconLeftArrow from "@/components/icons/IconLeftArrow.vue";
import IconRightArrow from "@/components/icons/IconRightArrow.vue";
import {defineComponent, ref, VNodeRef} from "vue";

export default defineComponent({
  name: 'BaseCarousel',
  components: {
    IconLeftArrow,
    IconRightArrow,
  },
  props: {
    showButtons: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
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

    return {
      carouselContainer,
      scrollLeft,
      scrollRight,
    };
  }
});
</script>

<style scoped>
</style>
