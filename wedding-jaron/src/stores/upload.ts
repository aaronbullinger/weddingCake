// stores/upload.ts
import { defineStore } from 'pinia';

export const useUploadStore = defineStore('upload', {
    state: () => ({
        isUploading: false as boolean,
        uploadedFiles: [] as any[],
    }),
    actions: {
        setUploading(status: boolean) {
            this.isUploading = status;
        },
        addUploadedFile(fileInfo: any) {
            this.uploadedFiles.push(fileInfo);
        },
    },
});
