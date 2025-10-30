<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import vertLogo from '../assets/images/vert_logo.webp'

const route = useRoute()

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Roster', path: '/roster' },
  { name: 'Recruitment', path: '/recruitment' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <Disclosure
    as="nav"
    class="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    v-slot="{ open }"
  >
    <div class="container grid-design">
      <div class="col-span-full flex h-16 justify-between">
        <!-- Logo -->
        <div class="flex">
          <RouterLink to="/" class="flex shrink-0 items-center">
            <img :src="vertLogo" class="h-8 w-auto dark:hidden" alt="Team Vert" />
            <img :src="vertLogo" class="hidden h-8 w-auto dark:block" alt="Team Vert" />
          </RouterLink>

          <!-- Desktop Nav -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <RouterLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              :class="[
                route.path === item.path
                  ? 'border-indigo-600 text-gray-900 dark:border-indigo-500 dark:text-white'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:text-white',
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors duration-150',
              ]"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-600 dark:hover:bg-white/5 dark:hover:text-white dark:focus:outline-indigo-500"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile Nav -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navItems"
          :key="item.name"
          as="div"
        >
          <RouterLink
            :to="item.path"
            :class="[
              route.path === item.path
                ? 'bg-indigo-50 border-indigo-600 text-indigo-700 dark:border-indigo-500 dark:bg-indigo-600/10 dark:text-indigo-400'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white',
              'block border-l-4 py-2 pl-3 pr-4 text-base font-medium transition-colors duration-150',
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
