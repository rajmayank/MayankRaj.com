<template>
  <div
    class="items-center justify-start rounded-md bg-red-400 bg-opacity-40 p-2 backdrop-blur-md backdrop-filter"
    :class="isHidden ? 'bg-transparent' : 'bg-white/30'"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps(["isHidden"]);
</script>

<style></style>
