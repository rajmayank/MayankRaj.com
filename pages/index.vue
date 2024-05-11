<template>
  <!-- Control Vertical Height -->

  <!-- relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0 -->

  <div class="h-full bg-red-100 py-10 sm:pb-20">
    <div class="z-10 mx-auto max-w-7xl px-6 pb-40 lg:px-12 xl:px-6 2xl:px-0">
      <MainHeader></MainHeader>

      <div class="mt-20">
        <div
          class="grid gap-3 [grid-template-areas:'name_name_detail_detail_detail''name_name_image_image_recording''name_name_image_image_link'] sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5"
        >
          <Card class="relative overflow-hidden [grid-area:name]" useFullHeight>
            <CardContentGroupWithHeader>
              <template #header> Conference </template>

              <template #content>
                <LogoGIDS class="w-4/5" />
              </template>
            </CardContentGroupWithHeader>

            <!-- <LogoGIDS class="absolute -top-0 left-0 w-11/12 opacity-10" /> -->
          </Card>
          <Card class="[grid-area:detail]">
            <CardContentGroupWithHeader>
              <template #content>
                <span>
                  <p class="text-4xl font-semibold">
                    Resilient Cybersecurity Strategies: Exploring Zero Trust,
                    Threat Intelligence, and Secure SDLC
                  </p>
                  <p class="hidden pt-5">
                    In today's world, designing with security in mind extends
                    beyond the cybersecurity team. Over the past few years,
                    we've witnessed numerous attacks and data breaches that
                    could have been avoided if security practices were
                    integrated into the design process from the outset. Today,
                    designing for data security is not just an option but a
                    necessity. Join me in this talk as we explore how software
                    can be designed to be resilient to such attacks. We will
                    delve into the domains of Zero Trust Security, Threat
                    Intelligence, and how to integrate them with the Secure
                    Software Development Lifecycle (SDLC). We will not stay
                    abstract but rather examine major attacks we have seen in
                    the last few years, what went wrong with them, and how they
                    could have been prevented. Additionally, we will discuss the
                    trade-offs that teams and executives need to make to balance
                    the cost of providing security with the value of the data.
                    Key Takeaways: Explore the significance of continuous
                    verification and access control in safeguarding against
                    ever-changing threats. Uncover the benefits of proactive
                    threat detection and neutralization, leveraging insights
                    from threat intelligence sources to enhance your service's
                    security. Recognize the criticality of integrating security
                    into the development phase from the outset, ensuring
                    resilience is inherent in software rather than merely
                    patched on later.
                  </p>
                  <p class="w-auto rounded-full bg-red-500">Session</p>
                </span>
              </template>
            </CardContentGroupWithHeader>
          </Card>
          <Card class="[grid-area:image]" useFullHeight>Image</Card>
          <Card class="[grid-area:recording]">Recording</Card>
          <Card class="[grid-area:link]">
            <NuxtLink src="https://youtu.be/jake6C8O-BA"
              >Watch Recording</NuxtLink
            >
          </Card>
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
