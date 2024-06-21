<template>
  <div class="flex items-center">
    <button v-if="showButtons" @click="scrollLeft" class="m-[24px]">
      <IconLeftArrow />
    </button>
    <div class="overflow-x-auto flex flex-row gap-8">
      <slot />
    </div>
    <button v-if="showButtons" @click="scrollRight" class="m-[24px]">
      <IconRightArrow />
    </button>
  </div>
</template>

<script lang="ts">
import IconLeftArrow from "@/components/icons/IconLeftArrow.vue";
import IconRightArrow from "@/components/icons/IconRightArrow.vue";
import {defineComponent} from "vue";

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
  methods: {
    scrollLeft() {
      const container = document.querySelector('.overflow-x-auto');
      if (container) {
        container.scrollLeft -= 200;
      }
    },
    scrollRight() {
      const container = document.querySelector('.overflow-x-auto');
      if (container) {
        container.scrollLeft += 200;
      }
    },
  },
});
</script>

<style scoped>
</style>
