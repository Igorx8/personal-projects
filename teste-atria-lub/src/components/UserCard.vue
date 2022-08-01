<template>
    <div class="w-40 h-48 mx-4 my-2 relative rounded bg-white border lg:h-64 lg:w-44">
        <i class="fa absolute right-2 top-2 text-2xl" :class="user.gender === 'male' ? 'fa-mars' : 'fa-venus'"></i>
        <img :src="user.picture.thumbnail" class="w-16 h-16 mt-2 mx-auto border border-black rounded-full" />
        <p class="text-center mt-1 text-xs lg:mt-3 lg:text-md"> {{ user.name.first}} {{ user.name.last }}</p>
        <p class="text-center mt-1 text-sm lg:mt-3 lg:text-lg"> {{ formatDate(user.dob.date) }}</p>
        <p class="text-center mt-1 text-sm lg:mt-3 lg:text-lg"> {{ user.cell }}</p>
        <button class="bg-purple-400 mt-3 mx-3 py-0.5 px-6 rounded-3xl text-white lg:px-8 lg:py-1.5 hover:bg-purple-600" @click="userStore.selectUser(user)">View profile</button>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { defineProps } from 'vue';

const userStore = useUserStore();

defineProps({
    user: {
        type: Object,
        required: true,
    },
});

const formatDate = (date: string) => {
    let formattedDate = new Date(date);
    let day = formattedDate.getDate();
    let month = formattedDate.getMonth() + 1;
    let year = formattedDate.getFullYear();
    return `${addZero(day)}/${addZero(month)}/${year}`;
};

const addZero = (day: number) => {
    if (day < 10) {
        return `0${day}`;
    }
    return day;
};

</script>