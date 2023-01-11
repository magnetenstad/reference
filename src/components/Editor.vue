<template>
  <div class="wrapper" @click="focusTextArea">
    <div class="row">
      <h1>Filename</h1>
      <div>
        <button @click="onSave">Save</button>
      </div>
    </div>
    <span class="text-area" ref="textArea" contenteditable @input="onInput">
    </span>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useEditorStore } from '@/store/editorStore';

const textArea = ref<HTMLSpanElement | null>(null);
const editorStore = useEditorStore();

onMounted(async () => {
  if (!textArea.value) return;
  textArea.value.innerText = await editorStore.readFile();
});

const focusTextArea = () => {
  textArea.value?.focus();
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement | null;
  if (!target) return;
  editorStore.file = target.innerText;
};

const onSave = () => {
  editorStore.writeFile();
};
</script>

<style scoped>
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

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.text-area {
  font-size: large;
  width: 100%;
  min-height: 20pt;
  outline: none;
}
</style>
