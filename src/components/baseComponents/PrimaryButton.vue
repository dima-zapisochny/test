<template>
  <button class="button button-primary" @click="$emit('click')">
    <slot></slot>
    <span class="button-text">{{ text }}</span>
  </button>
</template>

<script setup>
defineEmits(['click']);
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>