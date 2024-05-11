<template>
  <!-- Control Vertical Height -->

  <!-- relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0 -->

  <div class="h-full bg-red-100 py-20 sm:pb-20 sm:pt-10">
    <div class="z-10 mx-auto max-w-7xl px-6 pb-40 lg:px-12 xl:px-6 2xl:px-0">
      <MainHeader></MainHeader>

      <div>
        <div
          class="grid gap-3 [grid-template-areas:'name_name_detail_detail_detail''name_name_image_image_recording''name_name_image_image_link'] sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5"
        >
          <Card class="[grid-area:name]" useFullHeight>GIDS CONFERENCE</Card>
          <Card class="[grid-area:detail]">Title & Absract</Card>
          <Card class="[grid-area:image]" useFullHeight>Image</Card>
          <Card class="[grid-area:recording]">Recording</Card>
          <Card class="[grid-area:link]">Link</Card>
        </div>
      </div>
      <div class="mt-10">
        <div
          class="grid gap-3 [grid-template-areas:'detail_detail_detail_name_name''recording_image_image_name_name''link_image_image_name_name'] sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5"
        >
          <Card class="[grid-area:name]" useFullHeight>GIDS CONFERENCE</Card>
          <Card class="[grid-area:detail]">Title & Absract</Card>
          <Card class="[grid-area:image]" useFullHeight>Image</Card>
          <Card class="[grid-area:recording]">Recording</Card>
          <Card class="[grid-area:link]">Link</Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
