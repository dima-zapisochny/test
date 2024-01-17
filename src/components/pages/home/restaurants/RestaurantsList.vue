<template>
  <div class="cards cards-restaurants">
    <RestaurantCard
        v-for="restaurant of restaurantsList"
        :key="restaurant.id"
        :restaurant="restaurant"
        @click="showRestaurant(restaurant)"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import RestaurantCard from './RestaurantCard.vue';

const router = useRouter();

defineProps({
  restaurantsList: {
    type: Object,
    required: true
  }
});

const showRestaurant = (restaurant) => router.push({ name: 'restaurant', params: { id: restaurant.id } });
</script>