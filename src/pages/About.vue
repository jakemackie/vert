<script setup lang="ts">
  import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="min-h-screen">
    <!-- Wrapping each section in "section" reads like english, I like doing it -->
    <section class="my-12 container grid-design">
      <div class="col-span-full lg:col-span-7 flex flex-col gap-4 p-4 bg-gray-800/50 rounded-lg">
        About
        <a href="/" class="text-blue-400 underline"> Go back home?</a>
      </div>
  
      <div class="col-span-full lg:col-span-5 flex flex-col gap-4 p-4 bg-gray-800/50 rounded-lg">
        This is the about page.
      </div>
    </section>
  </main>

  <Footer />
</template>
