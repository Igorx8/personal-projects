<script setup lang="ts">
import { useMainStore } from '@/stores/main';

import NavBar from '@/components/NavBar.vue';

const mainStore = useMainStore();
</script>

<template>
  <nav-bar></nav-bar>
  <div class="bg-gradient-to-b from-blue-400 to-blue-600 text-center h-screen flex items-center justify-center">
    <p class="animate-text-smoke text-3xl">
      Seja bem vindo a WindStore
    </p>
  </div>
</template>