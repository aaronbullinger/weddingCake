<template>
  <div class="gallery">
    <div v-for="image in images" :key="image.fileUrl" class="gallery-item">
      <img :src="image.fileUrl" :alt="image.fileName" />
    </div>
  </div>
</template>

<script lang="ts">
import { watch, ref, onMounted } from 'vue'
import { useUploadStore } from '../../stores/upload'
import axios from 'axios'

interface Image {
  fileUrl: string;
  fileName: string;
}

export default {
  name: 'Gallery',
  setup() {
    const images = ref<Image[]>([]);
    const uploadStore = useUploadStore();

    const fetchImages = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/list-s3-images');
        images.value = data;
      } catch (error) {
        console.error('Fehler beim Laden der Bilder:', error);
      }
    };

    onMounted(fetchImages);

    watch(
        () => uploadStore.uploadedFiles,
        (newFiles) => {
          for (const newFile of newFiles) {
            if (!images.value.find(img => img.fileUrl === newFile.fileUrl)) {
              images.value.unshift(newFile);
            }
          }
        },
        { deep: true }
    );

    return {
      images,
    };
  },
};

</script>

<style scoped lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 1.25rem;
  max-width: 44rem;
  margin-inline: auto;
}

.gallery-item {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.1);
}
</style>


