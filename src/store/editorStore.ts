import { defineStore } from 'pinia';
import { useIpcStore } from '@/store/ipcStore';
import { File } from 'virtual-file-system';

export const useEditorStore = defineStore('editor', {
  state: () => ({
    ipcStore: useIpcStore(),
    file: null as File | null,
  }),

  actions: {
    async readFile() {
      this.file = (await this.ipcStore.invoke(
        'read-file',
        'C:\\Users\\tenst\\Desktop\\test.txt'
      )) as File;
      console.log(`Store: read file ${this.file.name} : ${this.file.data}`);
      return this.file.data;
    },
    writeFile() {
      if (!this.file) return;
      console.log(this.file);
      this.ipcStore.invoke('write-file', {
        path: this.file.location + this.file.name,
        data: this.file.data,
      });
    },
  },
});
