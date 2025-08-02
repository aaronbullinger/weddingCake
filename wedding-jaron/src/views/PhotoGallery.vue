<template>
  <main>
    <ImageUpload />
    <Gallery />
  </main>
</template>

<script lang="ts">
import ImageUpload from '@/components/photoGallery/ImageUpload.vue';
import Gallery from "@/components/photoGallery/Gallery.vue";

export default {
  name: 'PhotoGallery',
  components: {
    Gallery,
    ImageUpload
  }
};
</script>

<style scoped lang="scss">

</style>