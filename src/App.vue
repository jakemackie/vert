<script setup lang="ts">
// This is how you import and use components, we won't need for now but will need later
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- Wrapping each section in "section" reads like english, I like doing it -->
  <section class="my-12 container grid-design">
    <div class="col-span-full lg:col-span-7 p-4 bg-gray-800/50 rounded-lg">
      Sup!
    </div>

    <div class="col-span-full lg:col-span-5 flex flex-col gap-4 p-4 bg-gray-800/50 rounded-lg">
      You can build awesome layouts really easily with this grid layout
      <div class="aspect-video flex items-center justify-center w-full bg-gray-800 border-2 border-gray-500 rounded-md">
        Imagine there was a video here...
      </div>
    </div>
  </section>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>
