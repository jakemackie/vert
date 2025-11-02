<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TikTokIcon from '../assets/social-icons/tiktok.svg'
import YouTubeIcon from '../assets/social-icons/youtube.svg'
import DiscordIcon from '../assets/social-icons/discord.svg'
</script>

<template>
  <footer class="bg-zinc-950 border-t border-white/10">
    <div class="max-w-7xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <!-- Internal links -->
      <nav class="flex flex-col sm:flex-row flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <RouterLink to="/roster" class="text-base leading-6 text-gray-400 hover:text-gray-300">
            Roster
          </RouterLink>
        </div>
        <div class="px-5 py-2">
          <RouterLink to="/recruitment" class="text-base leading-6 text-gray-400 hover:text-gray-300">
            Recruitment
          </RouterLink>
        </div>
        <div class="px-5 py-2">
          <RouterLink to="/about" class="text-base leading-6 text-gray-400 hover:text-gray-300">
            About
          </RouterLink>
        </div>
        <div class="px-5 py-2">
          <RouterLink to="/contact" class="text-base leading-6 text-gray-400 hover:text-gray-300">
            Contact
          </RouterLink>
        </div>
      </nav>

      <!-- External links -->
      <div class="flex sm:justify-center mt-8 space-x-6">
        <a href="https://www.tiktok.com/@unbanvert" target="_blank" rel="noopener noreferrer">
          <span class="sr-only">TikTok</span>
          <TikTokIcon class="size-6 text-gray-400 hover:text-gray-300" />
        </a>
        <a href="https://www.youtube.com/@vertorg" target="_blank" rel="noopener noreferrer">
          <span class="sr-only">YouTube</span>
          <YouTubeIcon class="size-6 text-gray-400 hover:text-gray-300" />
        </a>
        <a href="https://discord.gg/RNQ5TveW2g" target="_blank" rel="noopener noreferrer">
          <span class="sr-only">Discord</span>
          <DiscordIcon class="size-6 text-gray-400 hover:text-gray-300" />
        </a>
      </div>

      <p class="mt-8 text-base leading-6 sm:text-center text-gray-400">
        © 2025 Vert Org. All rights reserved.
      </p>
    </div>
  </footer>
</template>
