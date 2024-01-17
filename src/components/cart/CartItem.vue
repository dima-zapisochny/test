<template>
  <div class="food-row">
    <span class="food-name">{{ product.name }}</span>
    <strong class="food-price">{{ product.price }} ₴</strong>
    <div class="food-counter">
      <button class="counter-button" @click="decreaseCounter">-</button>
      <span class="counter">{{ product.quantity }}</span>
      <button class="counter-button" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '../../store/';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const store = useStore();

const findProduct = (id) => store.cart.find((product) => product.id === id);

const decreaseCounter = () => {
  const product = findProduct(props.product.id);

  if (product && product.quantity === 1) {
    store.cart = store.cart.filter((product) => product.id !== props.product.id);
  } else if (product && product.quantity > 1) {
    product.quantity--;
  }
}

const increaseCounter = () => {
  const product = findProduct(props.product.id);

  product.quantity++;
}
</script>