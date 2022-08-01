<template>
    <div :class="userStore.modalActive ? 'absolute w-screen h-screen flex items-center justify-center bg-black opacity-60' : 'hidden'"></div>
    <div :class="userStore.modalActive ? 'absolute w-64 h-96 bg-white z-10':'hidden'">
            <section class="w-full h-52 bg-gradient-to-r from-blue-500 to-green-500 relative">
                <header class="h-1/4">
                    <i class="fa fa-angle-left text-lg text-white text-left ml-4 mt-2 hover:cursor-pointer"
                        @click="userStore.changeModalState()"></i>
                    <label class="text-md text-white m-2 ml-16">View profile</label>
                    <i class="fa fa-plus text-lg text-white ml-11 hover:cursor-pointer" @click="addAlert()"></i>
                </header>
                <div class="h-2/4 relative">
                    <img class="border border-white w-20 h-20 mx-auto rounded-full"
                        :src="userStore.user?.picture.thumbnail" alt="profile-picture">
                    <label class="absolute text-white text-center w-full">{{ userStore.user?.name.first }} {{
                            userStore.user?.name.last
                    }} </label>
                    <label class="absolute text-white text-center w-full mt-5"> {{ userStore.user?.location.city }},
                        {{ userStore.user?.location.country }}</label>
                </div>
                <div class="h-1/4 mt-6">
                    <span class="absolute flex flex-wrap w-1/2 h-10 text-center text-white bg-green-500">
                        <label class="text-md w-32 h-5"> {{ randomNumber() }}</label>
                        <label class="text-xs w-32">Followers</label>
                    </span>

                    <span class="absolute flex flex-wrap w-1/2 h-10 ml-32 text-center text-white bg-blue-500">
                        <label class="text-md w-32 h-5"> {{ randomNumber() }}</label>
                        <label class="text-xs w-32">Following</label>
                    </span>
                </div>
            </section>
            <aside class="w-full bg-white h-56 pb-4">
                <div class="mx-auto mt-2 w-52 h-1/4 border-b border-black">
                    <label class="absolute text-xs mt-3 ml-1 text-blue-900">Email:</label>
                    <label class="absolute text-sm mt-7 ml-1 text-black">{{ userStore.user?.email}}</label>
                </div>
                <div class="mx-auto w-52 h-1/4 border-b border-black">
                    <label class="absolute text-xs mt-3 ml-1 text-blue-900">Phone:</label>
                    <label class="absolute text-sm mt-7 ml-1 text-black">{{ userStore.user?.cell}}</label>
                </div>
                <div class="mx-auto w-52 h-1/4 border-b border-black">
                    <label class="absolute text-xs mt-3 ml-1 text-blue-900">Twitter:</label>
                    <label class="absolute text-sm mt-7 ml-1 text-black">@{{ userStore.user?.name.first}}</label>
                </div>
                <div class="mx-auto w-52 h-1/4 border-b border-black">
                    <label class="absolute text-xs mt-3 ml-1 text-blue-900">Behance:</label>
                    <label class="absolute text-sm mt-7 ml-1 text-black">behance.net/{{ userStore.user?.name.first}}</label>
                </div>
            </aside>
        </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();

const randomNumber = () => {
    return Math.floor(Math.random() * 9999) + 1;
}

const addAlert = () => {
    alert('Your invite has been sent');
}
</script>