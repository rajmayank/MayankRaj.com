<template>
  <div>
    <div class="grid">
      <!-- Text: Mayank Raj -->
      <Card class="[grid-area:name] md:place-content-end">
        <span
          class="flex text-center text-6xl font-bold md:text-left md:text-8xl lg:text-9xl xl:leading-tight 2xl:text-right"
        >
          <h1>
            Mayank <br class="hidden 2xl:visible" />
            Raj
          </h1>
        </span>
      </Card>

      <!-- Text: Lead Engineer callout -->
      <Card
        class="place-content-end [grid-area:leadengineer] md:place-content-start lg:place-content-end"
      >
        <div
          class="font-display relative flex items-center justify-between text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-5xl xl:leading-tight"
        >
          <h2 class="mr-4">
            Lead
            <br class="hidden 2xl:visible" />
            Engineer
          </h2>
          <LogoSalesforce
            class="right-0 text-4xl md:right-2 md:top-2 md:text-5xl lg:absolute lg:text-5xl"
          />
        </div>
      </Card>

      <!-- Image: Mayank -->
      <Card class="[grid-area:photo]">
        <img
          class="aspect-auto h-full w-full rounded-md object-cover"
          src="~/assets/images/others/mayank-3.jpeg"
          alt="Mayank Image"
        />
      </Card>

      <!-- Text: About Me -->
      <Card class="[grid-area:about]" extendClass="h-full">
        <CardContentGroupWithHeader>
          <template #header>About</template>
          <template #content>
            Greetings, I am Mayank Raj, a Lead Engineer with a passion for
            crafting large-scale, resilient, and fault-tolerant infrastructure.
            My journey began as a web designer & developer, where I nurtured
            startups' digital presence and delved into the captivating world of
            JavaScript. Over the years, I've evolved to specialize in machine
            learning, deep learning infrastructure, Big Data, and innovative
            realms like AR/VR and Voice technology. My commitment to technology
            extends beyond my professional roles, as evidenced by my extensive
            contributions to open-source projects like Firefox and my ongoing
            engagement with Artificial Intelligence, particularly TFJS.
          </template>
        </CardContentGroupWithHeader>
      </Card>

      <!-- Scrolling Text -->

      <Card class="[grid-area:prefixes]"> <PersonaMarquee /> </Card>

      <!-- Image: Certifications -->
      <Card class="[grid-area:certificates]"> <CardCertifications /> </Card>

      <!-- Image: Bootstraped Projcts -->
      <Card class="[grid-area:projects]">
        <CardBootstrappedProjects />
      </Card>

      <!-- Image: Previously worked at -->
      <Card class="[grid-area:companies]">
        <CardPreviouslyWorkedAt />
      </Card>

      <!-- Text: Details, Salesforce -->
      <!-- <Card col-start-3">
          <CardContentGroupWithHeader>
            <template #header>Salesforce</template>
            <template #content>
              As a Lead Engineer at Salesforce, I focus on enhancing ecosystem
              security and providing cryptography capabilities across
              Salesforce, Slack, Tableau, Heroku and more.
            </template>
          </CardContentGroupWithHeader>
        </Card> -->

      <!-- Text: Details, Apptale.io -->
      <!-- <Card col-start-3">
          <CardContentGroupWithHeader>
            <template #header>Apptale.io</template>
            <template #content>
              A SaaS marvel which operates as a highly available monitoring
              system across AWS's global footprint, utilizing over 50+ AWS
              availability zones. The system is designed to efficiently monitor
              services, offering real-time insights and ensuring uninterrupted
              operations.
            </template>
          </CardContentGroupWithHeader>
        </Card> -->

      <!-- Text: Details, ThePostRoster -->
      <!-- <Card col-start-3">
          <CardContentGroupWithHeader>
            <template #header>ThePostRoster</template>
            <template #content>
              Social media management, offering a user-friendly platform for
              composing and scheduling tweets, threads, Instagram posts and
              reels, and LinkedIn content. Enable seamless content creation and
              scheduling, empowering users to enhance their social media
              presence effortlessly.
            </template>
          </CardContentGroupWithHeader>
        </Card> -->
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.grid {
  @apply gap-3;
  @apply grid-cols-1;
  grid-template-areas:
    "name "
    "leadengineer"
    "photo"
    "about"
    "prefixes"
    "certificates"
    "projects"
    "companies";

  @media (screen(md)) {
    @apply grid-cols-2 gap-3;
    grid-template-areas:
      "name photo"
      "leadengineer photo"
      "about about"
      "prefixes prefixes "
      "certificates projects "
      " companies .";
  }

  @media (screen(2xl)) {
    @apply grid-cols-5 gap-3;
    grid-template-areas:
      "name name leadengineer photo photo"
      "about about about about about"
      "prefixes prefixes prefixes prefixes prefixes"
      "certificates certificates certificates projects companies";
  }
}
</style>
