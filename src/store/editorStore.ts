import { defineStore } from 'pinia';
import { readTextFile, writeTextFile } from '@tauri-apps/api/fs';

const filepath = 'C:\\Users\\tenst\\Desktop\\test.txt';

export const useEditorStore = defineStore('editor', {
  state: () => ({
    file: null as string | null,
  }),

  actions: {
    async readFile() {
      return await readTextFile(filepath);
    },
    writeFile() {
      if (!this.file) return;
      writeTextFile(filepath, this.file);
    },
  },
});
