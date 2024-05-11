<template>
  <div>
    <div
      :class="{
        'items-center justify-start overflow-hidden p-2': true,
        'rounded-lg': true,
        'border-2 border-red-200': true,
        'bg-transparent': isHidden,
        'bg-white': !isHidden,
        'h-full': useFullHeight,
        [extendClass]: extendClass,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  isHidden: boolean;
  useFullHeight: boolean;
  extendClass: string; // Define extendClass prop
}>();
</script>

<style></style>
