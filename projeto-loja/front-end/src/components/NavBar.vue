<script setup lang="ts">
import { routes } from '@/router';
import MobileMenuBtn from './MobileMenuBtn.vue';
</script>

<template>
  <nav class="absolute w-full bg-blue-200 h-12 flex justify-end animate-fade-out opacity-0 rounded">
    <router-link to="/" class="absolute left-0 mt-3 ml-5">Home</router-link>
    <router-link v-for="route in routes"
      class="hidden md:border-l md:border-green-700 md:rounded-xl md:h-full md:w-24 md:flex md:items-center md:justify-center"
      :to="route.path"> {{
          route.name
      }}
    </router-link>
    <mobile-menu-btn></mobile-menu-btn>
  </nav>
</template>