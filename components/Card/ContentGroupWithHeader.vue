<template>
  <div>
    <div class="relative w-full">
      <span class="card-header">
        <slot name="header" />
      </span>
      <span class="card-header alias">
        <slot name="header" />
      </span>
    </div>

    <span
      class="card-content"
      :class="{
        'pt-5': $slots.header,
      }"
    >
      <slot name="content" />
    </span>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.card-header {
  @apply break-normal text-4xl font-semibold xl:leading-tight;
  // @apply absolute;
  // @apply absolute -right-3 -top-5 z-0;
  // @apply absolute -left-3 -top-5 z-0;
  @apply opacity-80;

  &.alias {
    @apply w-[1000px] text-7xl;
    @apply absolute -left-7 -top-7 z-0;
    // @apply absolute -right-4 -top-8 z-0;
    @apply opacity-10;

    @media (screen(lg)) {
      @apply w-auto text-8xl;
      @apply absolute -left-10 -top-9 z-0;
    }
  }
}

.card-content {
  @apply flex items-center justify-start;
  @apply text-2xl font-light;
  @apply gap-x-3 px-3;
  @apply z-10;
}
</style>
