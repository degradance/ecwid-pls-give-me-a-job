<script setup lang="ts">
import CategoryList from "@/components/CategoryList.vue";
import ImageWrapper from "@/components/ImageWrapper.vue";
</script>

<template>
  <div class="bg-white flex flex-col gap-[32px]">
    <ImageWrapper label="Категории" :imgHeight=200>
      <img src="/wear1.jpg" alt="wear1"/>
    </ImageWrapper>
    <CategoryList />
    <ImageWrapper label="SALE" :imgHeight=300>
      <img src="/wear2.jpg" alt="wear2"/>
    </ImageWrapper>
  </div>
</template>

<style scoped>

</style>
