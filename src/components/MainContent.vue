<template>
  <main class="main">
    <router-view v-if="store.isRestaurantsLoaded" />
    <CartModal />
    <AuthModal />
  </main>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { AuthModal } from './auth';
import { CartModal } from './cart';
import { useStore } from '../store';

const store = useStore();

onBeforeMount(async () => await store.fetchRestaurants());
</script>