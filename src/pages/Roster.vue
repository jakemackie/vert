<script setup lang="ts">
import PlayerCard from '../components/PlayerCard.vue'
import players from '../data/players'
const roster = Object.values(players)
</script>

<template>
  <section class="my-24 container grid-design gap-y-24!">
    <div v-for="p in roster" :key="p.id" class="col-span-6">
      <PlayerCard :player="p.id" />
    </div>
  </section>
</template>
