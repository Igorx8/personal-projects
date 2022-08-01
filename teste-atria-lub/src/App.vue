<template>
  <nav-bar>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav-bar>
  <router-view/>
</template>


<script setup lang="ts">
  import NavBar from '@/components/NavBar.vue';

</script>
