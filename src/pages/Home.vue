<script setup lang="ts">
  import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="min-h-screen">
    <!-- Wrapping each section in "section" reads like english, I like doing it -->
    <section class="my-12 container grid-design">
      <div class="col-span-full lg:col-span-7 p-4 bg-gray-800/50 rounded-lg">
        Sup!
      </div>
  
      <div class="col-span-full lg:col-span-5 flex flex-col gap-4 p-4 bg-gray-800/50 rounded-lg">
        You can build awesome layouts really easily with this grid layout
        <a 
          href="/about" 
          class="aspect-video flex items-center justify-center w-full bg-gray-800 border-2 border-gray-500 hover:border-blue-300 rounded-md"
        >
          Imagine there was a video here... (click me to go to the about page)
        </a>
      </div>
    </section>
  </main>

  <Footer />
</template>
