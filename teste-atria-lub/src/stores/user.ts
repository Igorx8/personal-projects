import { defineStore } from 'pinia';
import axios from 'axios';

interface IStore {
    user: User | null;
    userList: User[] | null;
    modalActive: boolean;
}

interface User {
    id: { name: string, value: string};
    name: { first: string, last: string};
    location: { city: string, country: string};
    picture: { thumbnail: string};
    email: string;
    cell: string;
}

export const useUserStore = defineStore('user', {
    state: (): IStore => {
        return {
            user: null,
            userList: null,
            modalActive: false
        }
    },

    actions: {
        getUsers() {
            axios.get('https://api.randomuser.me/?results=3').then(({data}) => this.userList = data.results);
        },

        selectUser(user: User){
            this.user = user;
            this.changeModalState();
        },

        changeModalState() {
            this.modalActive = !this.modalActive;
        }
    }
})