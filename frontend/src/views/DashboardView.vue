<template>
    <div class="flex flex-col h-screen">
        <Navbar />
        <div class="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-16">
            <div class="bg-primary text-secondary rounded-lg shadow-md flex items-top justify-center p-4">
                <p class="text-2xl font-bold">Winrate</p>
            </div>
            <div class="bg-primary text-secondary rounded-lg shadow-md flex items-top justify-center p-4">
                <p class="text-2xl font-bold">Active members</p>
            </div>
            <div class="bg-primary text-secondary rounded-lg shadow-md flex items-top justify-center p-4">
                <p class="text-2xl font-bold">Last MVP</p>
            </div>
            <div class="bg-primary text-secondary rounded-lg shadow-md flex items-top justify-center p-4">
                <p class="text-2xl font-bold">Role distribution</p>
            </div>
            <div class="bg-primary text-secondary rounded-lg shadow-md flex items-top justify-center p-4">
                <p class="text-2xl font-bold">Capital</p>
            </div>
            <div class="bg-primary text-secondary rounded-lg shadow-md flex items-top justify-center p-4">
                <p class="text-2xl font-bold">Donations</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>