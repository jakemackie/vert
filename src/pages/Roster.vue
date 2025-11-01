<script setup lang="ts">
import PlayerCard from '../components/PlayerCard.vue'
import players, { Role } from '../data/players'
import type { RoleType } from '../data/players'

// convert the players record into an array for iteration
const roster = Object.values(players)

// Role priority map: lower number = higher priority
const rolePriority: Record<RoleType, number> = {
  [Role.LEAD_TRICKLINER]: 0,
  [Role.TRICKLINER]: 1,
}

// Sorted roster: primary by role priority, secondary by name
const rosterSorted = roster.slice().sort((a, b) => {
  const pa = rolePriority[a.role] ?? 99
  const pb = rolePriority[b.role] ?? 99
  if (pa !== pb) return pa - pb
  return a.name.localeCompare(b.name)
})
</script>

<template>
  <section class="my-24 container grid-design gap-y-24!">
    <div v-for="p in rosterSorted" :key="p.id" class="col-span-6">
      <PlayerCard :player="p.id" />
    </div>
  </section>
</template>
