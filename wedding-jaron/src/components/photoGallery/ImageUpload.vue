<template>
  <div class="image-uploader">
    <input
        type="file"
        ref="fileInput"
        @change="handleFileUpload"
        accept="image/*"
        hidden
        multiple
    />
    <button @click="triggerFileInput">Bild auswählen</button>

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
    const selectedFiles = ref<File[]>([]);
    const uploadSuccess = ref(false);

    const triggerFileInput = () => {
      fileInput.value?.click();
    };

    const handleFileUpload = async (event: Event) => {
      const target = event.target as HTMLInputElement | null;
      const files = target?.files;
      if (!files) return;

      const validFiles = Array.from(files).filter(file =>
          file.type.startsWith('image/')
      );

      if (validFiles.length === 0) {
        alert('Bitte wähle gültige Bilddateien.');
        return;
      }

      selectedFiles.value = validFiles;
      uploadSuccess.value = false;

      await uploadAllToS3(); // Mehrfach-Upload starten
    };

    const uploadAllToS3 = async () => {
      if (!selectedFiles.value.length) return;

      uploadStore.setUploading(true);

      try {
        for (const file of selectedFiles.value) {
          const { data } = await axios.post('http://localhost:3000/api/get-presigned-url', {
            filename: file.name
          });

          const { uploadUrl, fileUrl } = data;

          await axios.put(uploadUrl, file);

          uploadStore.addUploadedFile({ fileUrl, fileName: file.name });
        }

        uploadSuccess.value = true;
      } catch (err) {
        console.error('Fehler beim Upload:', err);
        alert('Mindestens ein Upload ist fehlgeschlagen.');
      } finally {
        uploadStore.setUploading(false);
      }
    };

    return {
      fileInput,
      selectedFiles,
      uploadSuccess,
      uploadStore,
      triggerFileInput,
      handleFileUpload,
      uploadAllToS3
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