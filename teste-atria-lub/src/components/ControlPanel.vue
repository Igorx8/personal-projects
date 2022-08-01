<template>
  <div
    :class="userStore.modalActive ? 'hidden' : 'w-96 h-82 m-4 border grid grid-cols-2 md:grid-cols-4 md:w-screen md:mx-42 md:h-72 lg:mx-36 xl:mx-64 2xl:mx-96'">
    <div class="w-40 h-48 rounded bg-transparent border border-white block lg:h-64 lg:w-44"
      :class="userStore.userList !== null ? 'mx-4 my-2' : 'mx-28 md:mx-72'">
      <button
        class="flex items-center justify-center w-14 h-14 mx-auto mt-12 mb-2 bg-white border border-gray-500 rounded-full text-6xl lg:mt-20"
        @click="userStore.getUsers">
        <i class="fa fa-plus text-4xl text-purple-300"></i>
      </button>
      <label class="text-md ml-10 lg:ml-12">ADD NEW</label>
    </div>
    <user-card v-show="userStore.userList !== null" v-for="user in userStore.userList" :key="user.id.value"
      :user="user"></user-card>
  </div>
</template>

<script setup lang="ts">
import UserCard from '@/components/UserCard.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

</script>