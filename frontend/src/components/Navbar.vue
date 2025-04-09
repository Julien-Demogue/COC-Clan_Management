<template>
    <nav
        class="flex items-center justify-between bg-secondary_background text-secondary font-semibold text-xl px-6 py-2">
        <div class="flex items-center space-x-4">
            <button class="w-10 h-10 flex items-center justify-center bg-red rounded-full" @click="backToMenu">
                <img src="../assets/icons/chevron-right.png" alt="Back" class="w-7 h-7 rotate-180">
            </button>
            <div class="flex space-x-4">
                <router-link v-for="link in links" :key="link.name" :to="link.path" class="px-2 py-1 rounded"
                    :class="{ 'bg-primary text-white': isActive(link.path) }">
                    {{ link.name }}
                </router-link>
            </div>
        </div>
        <div class="flex items-center space-x-5">
            <span>{{ clanName }}</span>
            <img :src="clanLogoUrl" alt="Clan Icon" class="w-14 h-14 rounded-full">
        </div>
    </nav>
</template>

<script setup lang="ts">
import { IClan } from '@/entities/IClan';
import { getFromStorage, removeFromStorage } from '@/services/storageService';
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const clanName = ref('');
const clanLogoUrl = ref('');

const router = useRouter();
const route = useRoute();

const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Members', path: '/members' },
    { name: 'War', path: '/war' },
];

function isActive(path: string) {
    return route.path === path;
}

function backToMenu() {
    removeFromStorage('clanData');
    router.push('/');
}

onMounted(() => {
    const clanData: IClan = getFromStorage('clanData');
    if (clanData) {
        clanName.value = clanData.name;
        clanLogoUrl.value = clanData.badgeUrls.small;
    }
    else {
        console.error('No clan data found in storage');
        router.push('/');
    }
})
</script>