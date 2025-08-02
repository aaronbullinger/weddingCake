// stores/upload.ts
import { defineStore } from 'pinia';

export const useUploadStore = defineStore('upload', {
    state: () => ({
        isUploading: false as boolean,
        uploadedFiles: [] as { fileUrl: string; fileName: string }[],
    }),
    actions: {
        setUploading(status: boolean) {
            this.isUploading = status;
        },
        addUploadedFile(file: { fileUrl: string; fileName: string }) {
            this.uploadedFiles.push(file);
        },
        clearUploadedFiles() {
            this.uploadedFiles = [];
        }
    },
});
