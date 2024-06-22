<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { GalleryImageType, ImageGalleryType } from "@/types/product";
import IconLeftArrow from "@/components/icons/IconLeftArrow.vue";
import IconRightArrow from "@/components/icons/IconRightArrow.vue";

const props = defineProps<ImageGalleryType>();

const currentIndex = ref(0);

const sortedImages = computed(() => {
  return props.galleryImages.sort((a, b) => a.orderBy - b.orderBy);
});

const currentImage = computed(() => {
  return sortedImages.value[currentIndex.value];
});

const preloadImages = () => {
  sortedImages.value.forEach((image) => {
    const img = new Image();
    img.src = image.url;
  });
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % sortedImages.value.length;
};

const previousImage = () => {
  currentIndex.value = (currentIndex.value - 1 + sortedImages.value.length) % sortedImages.value.length;
};

const selectImage = (image: GalleryImageType) => {
  const index = sortedImages.value.findIndex((img) => img.url === image.url);
  if (index !== -1) {
    currentIndex.value = index;
  }
};

onMounted(() => {
  preloadImages();
});
</script>

<template>
  <div class="gallery">
    <div class="main-image-container">
      <button
        v-if="sortedImages.length > 1"
        @click="previousImage"
        class="arrow left"
      >
        <IconLeftArrow />
      </button>
      <img
        class="main-image"
        :src="currentImage.url"
        alt="big"
      />
      <button
        v-if="sortedImages.length > 1"
        class="arrow right"
        @click="nextImage"
      >
        <IconRightArrow />
      </button>
    </div>
    <div class="thumbnails">
      <img
        v-for="image in sortedImages"
        class="thumbnail"
        :class="{ active: image.url === currentImage.url }"
        @click="selectImage(image)"
        :key="image.url"
        :src="image.url"
        alt="preview"
      />
    </div>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-image-container {
  position: relative;
  width: 650px;
  display: flex;
  justify-content: center;
}
@media (max-width: 800px) {
  .main-image-container {
    width: 400px;
  }
  .main-image {
    width: 350px;
    height: 350px;
  }
}
.main-image {
  width: 500px;
  height: 500px;
  object-fit: contain;
  object-position: center;
  background: #9ca3af36;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 10px;
  z-index: 1;
}
.arrow.left {
  left: 0;
}
.arrow.right {
  right: 0;
}
.thumbnails {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.thumbnail {
  width: 100px;
  object-fit: contain;
  height: auto;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid transparent;
}
.thumbnail:hover {
  border-color: #000;
}
.thumbnail.active {
  border-color: #000;
}
</style>
