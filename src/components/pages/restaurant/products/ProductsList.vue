<template>
  <div class="cards cards-menu">
    <ProductCard
        v-for="product of products"
        :key="product.id"
        :product="product"
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

defineProps({
  products: {
    type: Object,
    required: true
  }
});
</script>