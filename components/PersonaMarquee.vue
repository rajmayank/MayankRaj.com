<template>
  <div class="marquee-text">
    <template v-for="item in items" :key="item">
      <span :class="{ 'text-gray-400': item.startsWith('*') }">
        {{ item.replace("*", "") }}
      </span>
      <span>•</span>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const baseItems = [
  "Engineer",
  "Author",
  "Speaker",
  "Cloud Architect",
  "*Violinist",
  "*Comedian",
  "AWS Community Hero",
  "Kubernetes Administrator",
  "OSS Contributor",
];
const items = ref(baseItems);
</script>

<style scoped lang="scss">
.marquee-text {
  @apply flex gap-4 whitespace-nowrap text-xl font-semibold;
  animation: marquee 12s linear infinite;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
<!--  -->
