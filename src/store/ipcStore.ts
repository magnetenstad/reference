import { defineStore } from 'pinia';
import { IpcRenderer } from 'electron';

export const useIpcStore = defineStore('ipc', {
  state: () => ({
    // ipcRenderer is added to window in preload.js
    // @ts-ignore
    ipcRenderer: window.ipcRenderer as IpcRenderer,
  }),

  actions: {
    send(text: string) {
      this.ipcRenderer.send(text);
    },
  },
});