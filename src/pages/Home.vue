<script setup lang="ts">
import { useVideoBanner } from '../composables/useVideoBanner'

import logo from '../assets/images/vert_logo_3d.gif'

// Array of video paths (relative to `public/` folder)
const videos = [
  '/videos/skate_infinity_2.mp4',
  '/videos/skateproj_lumberjack_2_3.mp4'
]

const { currentVideo } = useVideoBanner(videos, 2000) // 2 seconds interval to like flip between em
</script>

<template>
  <!-- Create a section with responsive height and width -->
  <section class="relative w-full h-[calc(100vh-64px)] overflow-hidden">
    <!-- Looping the background videos n shit -->
    <video
      :src="currentVideo"
      autoplay
      muted
      loop
      playsinline
      class="blur-sm absolute top-0 left-0 w-full h-full object-cover"
    ></video>

    <!-- The overlay and the title/logo -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/65 flex items-center justify-center">
      <img
        :src="logo"
        alt="Team Vert Logo"
        class="h-32 sm:h-40 md:h-125 object-contain drop-shadow-lg"
      />
    </div>
  </section>

  <!-- And then content below the banner playing the vids
  <section class="py-16 bg-zinc-950 text-white text-center">
    <h2 class="text-3xl font-bold mb-6">Welcome to Team Vert</h2>
    <p class="max-w-xl mx-auto text-lg">
      Check out our latest skate projects and videos.
    </p>
  </section>-->
</template>
