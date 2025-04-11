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
                <p class="text-xl font-bold">{{ activeMembersRate }}%</p>
                <p class="text-xl font-bold">Total members : {{ members }}/50</p>
            </div>
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Last MVP</h1>
            </div>
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Role distribution</h1>
                <p class="text-xl font-bold">Leader : {{ leader }}</p>
                <p class="text-xl font-bold">Co-leader : {{ coleaderAmount }}</p>
                <p class="text-xl font-bold">Elders : {{ elderAmount }}</p>
                <p class="text-xl font-bold">Members : {{ memberAmount }}</p>
            </div>
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Capital</h1>
                <p class="text-xl font-bold">Capital Level : {{ capitalLevel }}</p>
            </div>
            <div
                class="bg-primary text-secondary rounded-lg shadow-md flex flex-col items-center justify-start p-6 min-h-[150px]">
                <h1 class="text-2xl font-bold mb-4">Donations</h1>
                <p class="text-xl font-bold">Best donor : {{ bestDonor }}</p>
                <p class="text-xl font-bold">Stingiest donor : {{ stingiestDonor }}</p>
                <p class="text-xl font-bold">Average donations : {{ averageDonations }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { IClan } from '@/entities/IClan';
import { IClanMember } from '@/entities/IClanMember';
import { IRoleDistribution } from '@/entities/IRoleDistribution';
import router from '@/router';
import { computeActiveMembersRate, computeAverageDonations, computeRoleDistribution, computeWinrate, getBestDonor, getStingiestDonnor } from '@/services/clanService';
import { getFromStorage } from '@/services/storageService';
import { onMounted, ref } from 'vue';

const winrate = ref(0);
const totalWars = ref(0);

const members = ref(0);
const activeMembersRate = ref(0);

const leader = ref('');
const coleaderAmount = ref(0);
const elderAmount = ref(0);
const memberAmount = ref(0);

const capitalLevel = ref(0);

const bestDonor = ref('');
const stingiestDonor = ref('');
const averageDonations = ref(0);

onMounted(() => {
    const clanData: IClan = getFromStorage('clanData');
    if (!clanData) {
        console.error('No clan data found in storage');
        router.push('/');
    }

    // Winrate
    winrate.value = computeWinrate(clanData);
    totalWars.value = clanData.warLosses + clanData.warWins + clanData.warTies;

    // Active members
    activeMembersRate.value = computeActiveMembersRate(clanData.memberList);
    members.value = clanData.members;

    // Role distribution
    const roles: IRoleDistribution = computeRoleDistribution(clanData.memberList);
    leader.value = roles.leaderName;
    coleaderAmount.value = roles.coleaderAmount;
    elderAmount.value = roles.elderAmount;
    memberAmount.value = roles.memberAmount;

    // Capital
    capitalLevel.value = clanData.clanCapital.capitalHallLevel;

    // Donations
    bestDonor.value = getBestDonor(clanData.memberList)?.name ?? '';
    stingiestDonor.value = getStingiestDonnor(clanData.memberList)?.name ?? '';
    averageDonations.value = computeAverageDonations(clanData.memberList);
})
</script>