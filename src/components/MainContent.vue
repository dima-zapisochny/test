<template>
  <main class="main">
    <router-view />
    <CartModal />
    <AuthModal />
  </main>
</template>

<script setup>
import { AuthModal } from './auth';
import { CartModal } from './cart';
</script>