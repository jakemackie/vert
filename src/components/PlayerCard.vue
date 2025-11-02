<script setup lang="ts">
import { computed } from 'vue'
import TikTokIcon from '../assets/social-icons/tiktok.svg'
import YouTubeIcon from '../assets/social-icons/youtube.svg'
import DiscordIcon from '../assets/social-icons/discord.svg'
import type { PlayerId } from '../data/players'
import { players, Role } from '../data/players'

const props = defineProps<{ player: PlayerId }>()
const profile = computed(() => players[props.player])
</script>

<template>
  <article class="relative overflow-visible divide-y rounded-lg divide-white/10 bg-zinc-800/50 outline -outline-offset-1 outline-white/10 group">
    <div class="px-4 py-5 sm:px-6">
      <!-- Header -->
      <h3 class="text-2xl font-medium">{{ profile.name }}</h3>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <!-- Body -->
      <p class="italic">{{ profile.description }}</p>
    </div>
    <div class="flex justify-between px-4 py-4 sm:px-6">
      <!-- Footer -->
  <p :class="profile.role === Role.LEAD_TRICKLINER ? 'text-blue-400' : 'text-gray-400'">{{ profile.role }}</p>
      <div class="flex flex-wrap items-center gap-4">
        <a v-if="profile.socials?.tiktok" :href="profile.socials.tiktok" target="_blank" rel="noopener noreferrer" class="hover:rotate-6 hover:scale-125 transition-transform duration-200 ease-out">
          <span class="sr-only">TikTok</span>
          <TikTokIcon class="size-5 text-gray-400 hover:text-gray-300" />
        </a>
        <a v-if="profile.socials?.youtube" :href="profile.socials.youtube" target="_blank" rel="noopener noreferrer" class="hover:rotate-6 hover:scale-125 transition-transform duration-200 ease-out">
          <span class="sr-only">YouTube</span>
          <YouTubeIcon class="size-5 text-gray-400 hover:text-gray-300" />
        </a>
        <a v-if="profile.socials?.discord" :href="profile.socials.discord" target="_blank" rel="noopener noreferrer" class="hover:rotate-6 hover:scale-125 transition-transform duration-200 ease-out">
          <span class="sr-only">Discord</span>
          <DiscordIcon class="size-5 text-gray-400 hover:text-gray-300" />
        </a>
      </div>
    </div>

    <!-- Profile Image -->
    <div class="absolute -top-1/5 lg:-top-1/4 right-0 size-20 lg:size-24 bg-gray-800 border border-gray-700 drop-shadow-xl drop-shadow-gray-900 rounded-full overflow-hidden">
      <img :src="profile.avatar" class="size-full object-contain" />
    </div>
  </article>
</template>
