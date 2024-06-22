<script setup lang="ts">
import { BaseButtonType } from "@/types/base";

const props = withDefaults(defineProps<BaseButtonType>(), {
  dark: true,
});

const { onClick } = props;

const handleClick = (e: MouseEvent) => {
  onClick(e);
};
</script>

<template>
  <button
    class="base-btn"
    type="button"
    :class="{ dark, special }"
    @click="handleClick"
  >
    <slot />
    <span class="pl-[4px] text-lg">
      {{ text }}
    </span>
  </button>
</template>

<style scoped>
.base-btn {
  display: flex;
  align-items: center;
  height: 42px;
  width: fit-content;
  padding: 8px 16px;
  background-color: var(--amber-200);
  color: var(--black);
}
.base-btn.dark {
  background-color: var(--black);
  color: var(--white);
}
.base-btn.special {
  background-color: var(--black);
  color: var(--amber-200);
}
.base-btn:focus,
.base-btn:hover {
  background-color: var(--orange);
}
.base-btn.dark:focus,
.base-btn.dark:hover {
  background-color: var(--magenta);
}
</style>
