<template>
  <CardContentGroupWithHeader>
    <template #header> Certifications </template>
    <template #content>
      <span>
        <img
          src="~/assets/images/badges/aws-certified-solutions-architect-associate.png"
          alt="Certified Kubernetes Administrator Certification"
        />
      </span>
      <span>
        <img
          src="~/assets/images/badges/aws-certified-solutions-architect-professional.png"
          alt="Certified Kubernetes Administrator Certification"
        />
      </span>
      <span>
        <img
          src="~/assets/images/badges/cka-certified-kubernetes-administrator.png"
          alt="Certified Kubernetes Administrator Certification"
        />
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
  @apply [&>*]:max-w-32;
}
</style>
