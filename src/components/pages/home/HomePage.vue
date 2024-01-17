<template>
  <div class="container">
    <PromoBanner />
    <section class="restaurants">
      <div class="section-heading">
        <h2 class="section-title">Рестораны</h2>
        <SearchInput
            placeholder="Поиск блюд и ресторанов"
            :search="search"
            @update:search="updateSearch"
        />
      </div>
      <RestaurantsList :restaurantsList="restaurantsList" />
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from 'vue';
import { PromoBanner } from '../../banner'
import { useStore } from '../../../../store';
import { SearchInput } from '../../baseComponents';
import { RestaurantsList } from './restaurants';

const store = useStore();

onBeforeMount(async () => await store.fetchRestaurants());

const search = ref('');

const restaurantsList = computed(() => {
  return store.restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(search.value.toLowerCase()) ||
        restaurant.kitchen.toLowerCase().includes(search.value.toLowerCase()) ||
        restaurant.products.some((product) =>
            product.name.toLowerCase().includes(search.value.toLowerCase()) ||
            product.description.toLowerCase().includes(search.value.toLowerCase())
        );
  })
});

const updateSearch = (newSearch) => search.value = newSearch;
</script>