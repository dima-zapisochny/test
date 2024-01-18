<template>
  <div class="container" >
    <section class="menu">
      <div class="section-heading">
        <div class="info-block">
          <h2 class="section-title restaurant-title">{{ store.restaurant.name }}</h2>
          <div class="card-info">
            <div class="rating">{{ store.restaurant.stars }}</div>
            <div class="price">{{ store.restaurant.price }}</div>
            <div class="category">{{ store.restaurant.kitchen }}</div>
          </div>
        </div>
        <div class="sort-block">
          <label class="sort-text">Сортировать по цене:</label>
          <select v-model="sortOrder" class="sort">
            <option value="">По умолчанию</option>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </div>
      </div>
      <ProductsList :products="sortedProducts" />
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from '../../../store';
import { ProductsList } from './products';

const store = useStore();
const route = useRoute();

onBeforeMount(() => store.loadRestaurantInfo(route.params.id));

const sortOrder = ref('')

const sortedProducts = computed(() => {
  const sortedPartners = store.restaurant.products;

  if (sortOrder.value === null) return sortedPartners;

  return sortedPartners.sort((a, b) => {
    return sortOrder.value === "asc" ? a.price - b.price : b.price - a.price;
  });
});
</script>