<script setup lang="ts">
import 'lite-youtube-embed/src/lite-yt-embed.css'
import 'lite-youtube-embed'
</script>

<template>
  <section class="my-12 container grid-design">
    <div class="col-span-full lg:col-start-4 lg:col-span-6">
      <h2 class="text-4xl font-bold text-center">Team Vert</h2>
    </div>

    <div class="col-span-full lg:col-start-4 lg:col-span-6 flex flex-col gap-4 p-4 bg-gray-800/50 rounded-lg">
      <div class="aspect-video flex items-center justify-center w-full border-2 border-gray-500 hover:border-blue-300 rounded-md">
        <lite-youtube
          class="size-full"
          videoid="z3o1EYT8s8c"
          style="aspect-ratio: 16/9;"
          params="color=white&theme=dark"
        ></lite-youtube>
      </div>
    </div>
  </section>
</template>
