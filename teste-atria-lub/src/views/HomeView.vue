<template>
  <div class="flex justify-center items-center bg-blue-100 h-screen w-full">
    <control-panel />
    <profile-modal />
  </div>
</template>

<script setup lang="ts">
import ControlPanel from '@/components/ControlPanel.vue';
import ProfileModal from '@/components/ProfileModal.vue';
</script>
