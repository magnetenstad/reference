import { defineStore } from 'pinia';
import { IpcRenderer } from 'electron';

export const useIpcStore = defineStore('ipc', {
  state: () => ({
    // ipcRenderer is added to window in preload.js
    // @ts-ignore
    ipcRenderer: window.ipcRenderer as IpcRenderer,
  }),

  actions: {
    send(text: string, ...args: any[]) {
      console.log(`Try send ${text} : ${args}`);
      return this.ipcRenderer.send(text, ...args);
    },
    invoke(text: string, ...args: any[]) {
      console.log(`Try invoke ${text} : ${args}`);
      return this.ipcRenderer.invoke(text, ...args);
    },
  },
});
