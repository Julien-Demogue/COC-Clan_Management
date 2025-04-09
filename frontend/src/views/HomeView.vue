<template>
  <div class="flex flex-col items-center justify-center h-screen bg-background">
    <h1 class="mb-12 text-6xl font-bold text-secondary">Your clan tag</h1>
    <div class="flex items-center w-1/2 h-16 rounded-full bg-secondary">
      <span class="px-8 text-primary text-2xl font-bold">#</span>
      <input type="text" v-model="clanTag" @keyup.enter="onValidateInput"
        class="flex-1 h-full bg-transparent text-primary text-left font-semibold text-xl outline-none" />
    </div>
    <p class="mt-4 text-red font-semibold text-xl">{{ errorMessage }}</p>
  </div>
  <Loading v-if="isLoading" />
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { fetchClanInfo, fetchClanMembers } from '@/services/apiService';
import Loading from '@/components/Loading.vue';

const clanTag = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

async function getClanInfo(clanTag: string): Promise<boolean> {
  isLoading.value = true;
  const result = await fetchClanInfo(clanTag);
  isLoading.value = false;

  if (!result.success) {
    errorMessage.value = result.error || 'Unknown error';
    return false;
  }

  errorMessage.value = '';
  const clanInfo = result.data;
  console.log('Clan Info:', clanInfo);
  return true;
}

async function getClanMembers(clanTag: string): Promise<boolean> {
  isLoading.value = true;
  const result = await fetchClanMembers(clanTag);
  isLoading.value = false;

  if (!result.success) {
    errorMessage.value = result.error || 'Unknown error';
    return false;
  }

  errorMessage.value = '';
  const clanMembers = result.data;
  console.log('Clan Members:', clanMembers);
  return true;
}

async function onValidateInput() {
  if (!clanTag || clanTag.value.trim() === '') {
    errorMessage.value = 'Clan tag is required';
    return;
  }

  const isFetchSuccessful = await getClanInfo(clanTag.value);

  if (isFetchSuccessful) {
    await getClanMembers(clanTag.value);
  }
}
</script>