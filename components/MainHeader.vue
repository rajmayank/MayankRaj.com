<template>
  <div>
    <div class="grid gap-3 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5">
      <!-- Text: Mayank Raj -->
      <Card class="place-content-end lg:col-span-2">
        <span
          class="flex text-right text-6xl font-bold sm:text-8xl md:text-9xl xl:leading-tight"
        >
          <h1>
            Mayank <br />
            Raj
          </h1>
        </span>
      </Card>

      <!-- Text: Lead Engineer callout -->
      <Card class="place-content-end">
        <div
          class="font-display relative flex text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-5xl xl:leading-tight"
        >
          <h2 class="mr-4">Lead <br />Engineer</h2>
          <LogoSalesforce class="absolute right-2 top-2 text-5xl" />
        </div>
      </Card>

      <!-- Image: Mayank -->
      <Card class="col-span-2">
        <img
          class="aspect-auto h-full w-full rounded-md object-cover"
          src="~/assets/images/others/mayank-3.jpeg"
          alt="Mayank Image"
        />
      </Card>

      <!-- Text: About Me -->
      <Card class="col-span-5 row-span-3" extendClass="h-full">
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

      <Card class="col-span-5"> <PersonaMarquee /> </Card>

      <!-- Image: Certifications -->
      <Card class="col-span-3 row-span-2"> <CardCertifications /> </Card>

      <!-- Image: Bootstraped Projcts -->
      <Card class="col-span-1">
        <CardBootstrappedProjects />
      </Card>

      <!-- Image: Previously worked at -->
      <Card class="col-span-1">
        <CardPreviouslyWorkedAt />
      </Card>

      <!-- Text: Details, Salesforce -->
      <!-- <Card class="col-span-3 col-start-3">
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
      <!-- <Card class="col-span-3 col-start-3">
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
      <!-- <Card class="col-span-3 col-start-3">
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

<style lang="scss" scoped></style>
