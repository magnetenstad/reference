<template>
  <div class="wrapper" @click="focusTextArea">
    <h1>Hello world! {{ editorStore.text }}</h1>
    <span class="text-area" ref="textArea" contenteditable @input="onInput">
    </span>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useEditorStore } from '@/store/editorStore';
import { useIpcStore } from '@/store/ipcStore';

const textArea = ref<HTMLSpanElement | null>(null);
const editorStore = useEditorStore();
const ipcStore = useIpcStore();

onMounted(() => {
  if (!textArea.value) return;
  textArea.value.innerText = editorStore.text;
});

const focusTextArea = async () => {
  textArea.value?.focus();
  console.log(await ipcStore.invoke('test'));
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement | null;
  if (!target) return;
  editorStore.text = target.innerText;
};
</script>

<style>
.wrapper {
  background-color: #ffffff10;
  color: white;
  width: 80%;
  max-width: 720px;
  margin: 0 auto;
  min-height: 960px;
  height: fit-content;
  padding: 2em;
  border-radius: 0.5em;
}

.text-area {
  font-size: large;
  width: 100%;
  min-height: 20pt;
  outline: none;
}
</style>
