<template>
    <div class="flex flex-col h-screen">
        <Navbar />
        <div class="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-16">
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Winrate</h1>
                <p class="text-xl font-bold">{{ winrate }}%</p>
                <div class="w-4/5 bg-background rounded-full h-6 my-3">
                    <div :class="winrate > 50 ? 'bg-green' : 'bg-red'" class="h-full rounded-full"
                        :style="{ width: winrate + '%' }">
                    </div>
                </div>
                <p class="text-xl font-bold">{{ totalWars }} wars</p>
            </div>
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Active members</h1>
                <p class="text-xl font-bold">Total members : {{ members }}/50</p>
            </div>
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Last MVP</h1>
            </div>
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Role distribution</h1>
            </div>
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Capital</h1>
            </div>
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Donations</h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { IClan } from '@/entities/IClan';
import router from '@/router';
import { getFromStorage } from '@/services/storageService';
import { onMounted, ref } from 'vue';

const winrate = ref(0);
const totalWars = ref(0);

const members = ref(0);

onMounted(() => {
    const clanData: IClan = getFromStorage('clanData');
    if (!clanData) {
        console.error('No clan data found in storage');
        router.push('/');
    }

    winrate.value = computeWinrate(clanData);
    totalWars.value = clanData.warLosses + clanData.warWins + clanData.warTies;

    console.log(computeActiveMembersRate(clanData));
    members.value = clanData.members;
})

function computeWinrate(clanData: IClan): number {
    const totalWars = clanData.warLosses + clanData.warWins + clanData.warTies;
    if (totalWars === 0) {
        return 0;
    }
    return parseFloat(((clanData.warWins / totalWars) * 100).toFixed(1));
}

function computeActiveMembersRate(clanData: IClan): number {
    const totalMembers = clanData.members;
    if (totalMembers === 0) {
        return 0;
    }

    // Check if members are active based on their participations in clan's life
    // TODO : Implement a better way to check if a member is active
    const activeMembers = clanData.memberList.filter(member =>
        member.donations > 0
    ).length;

    return parseFloat(((activeMembers / totalMembers) * 100).toFixed(1));
}
</script>