<template>
  <label class="search">
    <input
        type="text"
        class="input input-search"
        :placeholder="placeholder"
        v-model="search"
    />
  </label>
</template>

<script setup>
import { ref, watch, defineEmits } from  'vue';

defineProps({
  placeholder: {
    type: String,
    required: false,
    default: false
  }
});

const search = ref('');
const emit = defineEmits(['update:search']);


watch(search, (newValue) => emit('update:search', newValue));
</script>