<template>
  <CardContentGroupWithHeader>
    <template #header> Previously with </template>
    <template #content>
      <span class="icons">
        <LogoCactusLabs />
        <LogoDirecti />
        <LogoAiesec />
      </span>
    </template>
  </CardContentGroupWithHeader>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.icons {
  @apply flex flex-col items-center justify-center gap-5 lg:flex-row;
  @apply mt-3 w-full;
  @apply [&>*]:w-3/5;

  @media (screen(md)) {
    @apply flex-row;
    @apply justify-start;
    @apply [&>*]:w-4/5;
  }
  @media (screen(lg)) {
    @apply flex-col;
    @apply justify-start;
    @apply [&>*]:w-3/4;
  }
}
</style>
