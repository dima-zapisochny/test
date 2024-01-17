<template>
  <div class="card">
    <img :src="product.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ product.name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">{{ product.description }}
        </div>
      </div>
      <div class="card-buttons">
        <PrimaryButton
            text="В корзину"
            class="button-add-cart"
            @click="addToCart(product)"
        >
          <span class="button-cart-svg"></span>
        </PrimaryButton>
        <strong class="card-price-bold">{{ product.price }} ₴</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from '../../../../../store';
import { PrimaryButton } from '../../../baseComponents';

const store = useStore();

const addToCart = (product) => {
  const existingProduct = store.cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity++;
    existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
  } else {
    store.cart.push({
      ...product,
      quantity: 1,
      totalPrice: product.price
    });
  }

  store.isCartOpen = true;
};

defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>