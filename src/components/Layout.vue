<template>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 4em;
}
</style>
