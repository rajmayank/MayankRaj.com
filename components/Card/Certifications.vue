<template>
  <CardContentGroupWithHeader>
    <template #header> Certifications </template>
    <template #content>
      <span>
        <NuxtLink>
          <img
            src="~/assets/images/badges/aws-certified-solutions-architect-associate.png"
            alt="Certified Kubernetes Administrator Certification"
          />
        </NuxtLink>
        <NuxtLink>
          <img
            src="~/assets/images/badges/aws-certified-solutions-architect-professional.png"
            alt="Certified Kubernetes Administrator Certification"
          />
        </NuxtLink>
        <NuxtLink to="https://google.com">
          <img
            src="~/assets/images/badges/cka-certified-kubernetes-administrator.png"
            alt="Certified Kubernetes Administrator Certification"
          />
        </NuxtLink>
      </span>
    </template>
  </CardContentGroupWithHeader>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
img {
  @apply aspect-auto;
}
span {
  @apply flex items-center justify-center gap-3;
  @apply w-full;
  @apply [&>*]:max-w-48;
  @media (screen(md)) {
    @apply w-4/5;
  }
  @media (screen(lg)) {
    @apply w-2/3;
  }
}
</style>
