<template>
  <button
      @click="handleClick"
      type="button"
      :class="buttonClass"
      class="px-4 py-2 flex items-center h-[42px] w-fit"
  >
    <slot/>
    <span :class="textClass" class="pl-[4px] text-lg">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
    dark: {
      type: Boolean,
      default: true,
    },
    special: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      const bg = this.dark ? 'bg-black' : 'bg-amber-200';
      const txt = this.dark ? (this.special ? 'text-amber-200' : 'text-white') : 'text-black';
      return bg + ' ' + txt;
    },
    textClass() {
      return this.dark ? (this.special ? 'text-amber-200' : 'text-white') : 'text-black';
    },
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (this.onClick) {
        this.onClick(event);
      }
    },
  },
});
</script>

<style scoped>
</style>
