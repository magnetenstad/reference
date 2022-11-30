<template>
  <div class="titlebar">Reference</div>
  <div class="main">
    <Layout><Editor /></Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from './components/Layout.vue';
import Editor from './components/Editor.vue';
</script>

<style scoped>
.titlebar {
  user-select: none;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  background-color: black;
  height: 32px;
  width: 100%;
  position: sticky;
  top: 0;
}

.main {
  height: calc(100% - 32px);
  overflow: auto;
}
</style>
