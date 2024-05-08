<template>
  <div
    class="conatiner h-screen bg-neutral-800 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600"
  >
    <div
      class="grid grid-flow-row-dense auto-rows-fr grid-cols-7 gap-2.5 px-4 py-2"
    >
      <!-- Empty Area -->
      <Card class="col-span-4 row-span-3 bg-transparent" isHidden="true" />

      <!-- Picture -->
      <Card class="relative col-span-3 row-span-4">
        <img
          class="aspect-auto h-full w-full rounded-md object-cover"
          src="~/assets/images/others/mayank-2.jpeg"
          alt=""
        />
      </Card>
      <!-- Certifications -->

      <Card class="col-start-1">
        <span class="">
          <img
            class="aspect-auto h-full"
            src="~/assets/images/badges/aws-certified-solutions-architect-associate.png"
            alt="Certified Kubernetes Administrator Certification"
          />
        </span>
      </Card>
      <Card>
        <span>
          <img
            class="aspect-auto h-full"
            src="~/assets/images/badges/aws-certified-solutions-architect-professional.png"
            alt="Certified Kubernetes Administrator Certification"
          />
        </span>
      </Card>
      <Card>
        <span>
          <img
            class="aspect-auto h-full"
            src="~/assets/images/badges/cka-certified-kubernetes-administrator.png"
            alt="Certified Kubernetes Administrator Certification"
          />
        </span>
      </Card>
      <Card>
        <span>
          <img
            class="aspect-auto h-full"
            src="~/assets/images/badges/aws-community-builder.png"
            alt="Certified Kubernetes Administrator Certification"
          />
        </span>
      </Card>

      <!-- Name & Bio -->
      <Card class="col-span-4 row-span-2 flex items-center justify-center">
        <p
          class="text-9xl font-extrabold capitalize leading-tight tracking-wider"
        >
          Mayank Raj
        </p>
      </Card>
      <Card class="col-span-2 flex items-center justify-center">
        <span class="text-4xl font-bold tracking-wider">
          Lead Engineer, Cryptography</span
        >
      </Card>
      <Card class="col-span-1 flex items-center justify-center">
        <LogoSalesforce class="h-full w-full" />
      </Card>

      <Card class="col-span-3 flex items-center justify-center">
        <span class="flex w-full justify-between gap-2 px-[15%] text-4xl">
          <LogoLinkedin />
          <LogoEmail />
          <LogoGithub />
          <LogoVideoCall />
        </span>
      </Card>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
