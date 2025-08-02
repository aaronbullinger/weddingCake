<template>
  <div class="image-uploader">
    <input
        type="file"
        ref="fileInput"
        @change="handleFileUpload"
        accept="image/*"
        hidden
    />
    <button @click="triggerFileInput">Bild auswählen</button>

    <div v-if="previewUrl" class="preview">
      <h3>Vorschau:</h3>
      <img :src="previewUrl" alt="Vorschau" />
    </div>

    <button
        v-if="selectedFile && !uploadStore.isUploading"
        @click="uploadToS3"
    >
      Hochladen
    </button>

    <p v-if="uploadStore.isUploading">🔄 Upload läuft...</p>
    <p v-if="uploadSuccess">✅ Hochgeladen!</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useUploadStore } from '../../stores/upload'

export default {
  setup() {
    const uploadStore = useUploadStore();

    const fileInput = ref<HTMLInputElement | null>(null);
    const selectedFile = ref<File | null>(null);
    const previewUrl = ref<string | null>(null);
    const uploadSuccess = ref(false);

    const triggerFileInput = () => {
      fileInput.value?.click();
    };

    const handleFileUpload = (event: Event) => {
      const target = event.target as HTMLInputElement | null;
      const file = target?.files?.[0];
      if (file && file.type.startsWith('image/')) {
        selectedFile.value = file;
        uploadSuccess.value = false;

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          previewUrl.value = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Bitte wähle eine gültige Bilddatei.');
      }
    };

    const uploadToS3 = async () => {
      if (!selectedFile.value) return;

      uploadStore.setUploading(true);
      try {
        const { data } = await axios.post('http://localhost:3000/api/get-presigned-url', {
          filename: selectedFile.value.name
        });

        const { uploadUrl, fileUrl } = data;

        // Hochladen zu S3
        await axios.put(uploadUrl, selectedFile.value, /*{
          headers: {
            'Content-Type': selectedFile.value.type,
          },
        }*/);

        uploadStore.addUploadedFile({ fileUrl, fileName: selectedFile.value.name });
        uploadSuccess.value = true;
      } catch (err) {
        console.error('Fehler beim Upload:', err);
        alert('Upload fehlgeschlagen.');
      } finally {
        uploadStore.setUploading(false);
      }
    };

    return {
      fileInput,
      selectedFile,
      previewUrl,
      uploadSuccess,
      uploadStore,
      triggerFileInput,
      handleFileUpload,
      uploadToS3,
    };
  },
};
</script>

<style scoped lang="scss">
.image-uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.preview img {
  max-width: 200px;
  margin-top: 10px;
  border: 1px solid #ccc;
}
</style>