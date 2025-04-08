<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-background">
    <h1 class="mb-12 text-6xl font-bold text-secondary">Your clan tag</h1>
    <div class="flex items-center w-1/2 h-16 rounded-full bg-secondary">
      <span class="px-8 text-primary text-2xl font-bold">#</span>
      <input type="text"
        class="flex-1 h-full bg-transparent text-primary text-left font-semibold text-xl outline-none" />
    </div>
    <p class="mt-4 text-red font-semibold text-xl">This clan does not exists</p>
    <button
      class="mt-12 px-8 py-2 text-xl font-bold text-primary bg-secondary rounded-full hover:bg-primary hover:text-secondary transition duration-300 ease-in-out"
      v-on:click="">
      Test api
    </button>
  </div>
</template>