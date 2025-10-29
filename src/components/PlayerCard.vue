<script setup lang="ts">
  import TikTokIcon from '../assets/social-icons/tiktok.svg'
  import YouTubeIcon from '../assets/social-icons/youtube.svg'
  import DiscordIcon from '../assets/social-icons/discord.svg'
  import vertLogo from '../assets/images/vert_logo.webp';
</script>

<template>
  <article class="relative overflow-visible divide-y rounded-lg divide-white/10 bg-gray-800/50 outline -outline-offset-1 outline-white/10">
    <div class="px-4 py-5 sm:px-6">
      <!-- Content goes here -->
      <!-- We use less vertical padding on card headers on desktop than on body sections -->
      <h3 class="text-2xl font-medium">Name</h3>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <!-- Content goes here -->
      <p class="italic">I like placeholders tbh</p>
    </div>
    <div class="flex justify-between px-4 py-4 sm:px-6">
      <!-- Content goes here -->
      <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
      <p class="text-gray-400">Lead VFX Editor</p>
      <div class="flex flex-wrap items-center gap-4">
        <a href="https://www.tiktok.com/@unbanvert" target="_blank" rel="noopener noreferrer">
          <span class="sr-only">TikTok</span>
          <TikTokIcon class="size-5 text-gray-400 hover:text-gray-300" />
        </a>
        <a href="https://www.youtube.com/@vertorg" target="_blank" rel="noopener noreferrer">
          <span class="sr-only">YouTube</span>
          <YouTubeIcon class="size-5 text-gray-400 hover:text-gray-300" />
        </a>
        <a href="https://discord.gg/RNQ5TveW2g" target="_blank" rel="noopener noreferrer">
          <span class="sr-only">Discord</span>
          <DiscordIcon class="size-5 text-gray-400 hover:text-gray-300" />
        </a>
      </div>
    </div>

    <!-- Profile Image -->
    <div class="absolute -top-1/5 lg:-top-1/4 right-0 size-20 lg:size-24 bg-gray-800 border border-gray-700 drop-shadow-xl drop-shadow-gray-900 rounded-full overflow-hidden">
      <img :src="vertLogo" class="size-full object-contain"></img>
    </div>
  </article>
</template>
