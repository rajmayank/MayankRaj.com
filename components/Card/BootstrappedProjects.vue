<template>
  <CardContentGroupWithHeader>
    <template #header>
      <span> Bootstrapped SaaS </span>
    </template>
    <template #content>
      <span class="icons">
        <LogoApptale class="w-1/2" />
        <LogoThePostRoster class="w-1/2 rounded-lg" />
      </span>
    </template>
  </CardContentGroupWithHeader>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.icons {
  @apply flex flex-row justify-center gap-10 lg:flex-row;
  @apply mt-3 w-full;
  @apply [&>*]:w-1/3;

  @media (screen(md)) {
    @apply justify-start;
    @apply [&>*]:w-1/4;
  }
  @media (screen(2xl)) {
    @apply justify-start;
    @apply [&>*]:w-1/2;
  }
}
</style>
