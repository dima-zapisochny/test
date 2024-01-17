<template>
  <div class="card card-restaurant">
    <img :src="restaurant.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ restaurant.name }}</h3>
        <span class="card-tag tag">{{ restaurant.time_of_delivery }}</span>
      </div>
      <div class="card-info">
        <div class="rating">
          {{ restaurant.stars }}
        </div>
        <div class="price">От {{ restaurant.price }} ₴</div>
        <div class="category">{{ restaurant.kitchen }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

  defineProps({
    restaurant: {
      type: Object,
      required: true
    }
});
</script>