<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<template>
  <div
    class="popup-overlay"
    @click.self="close"
  >
    <div class="popup-content">
      <slot />
      <div class="button-panel">
        <BaseButton
          :on-click="close"
          text="Close"
          dark
          special
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button-panel {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
