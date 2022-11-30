<template>
  <div class="wrapper" @click="focusTextArea">
    <h1>Hello world!</h1>
    <span class="text-area" ref="textArea" contenteditable> etst </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const textArea = ref<HTMLSpanElement | null>(null);

const focusTextArea = () => {
  textArea.value?.focus();
  console.log('Focus!' + textArea.value);
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
