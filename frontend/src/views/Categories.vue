<script setup lang="ts">
import CategoryList from "@/components/category/CategoryList.vue";
import ImageWrapper from "@/components/ImageWrapper.vue";
</script>

<template>
  <div class="bg-white flex flex-col gap-[32px] items-center">
    <ImageWrapper label="Category" :img-height=200>
      <img src="/wear1.jpg" alt="wear1"/>
    </ImageWrapper>
    <CategoryList />
    <ImageWrapper label="SALE" :img-height=300>
      <img src="/wear2.jpg" alt="wear2"/>
    </ImageWrapper>
  </div>
</template>

<style scoped>

</style>
