<template>
  <BaseModal
      title="Корзина"
      :is-open="isModalOpen"
      @continue="onContinue"
      @cancel="onCancel"
      @close="closeModal"
  >
    <template v-slot:body>
      <CartItem
          v-if="store.cart.length"
          v-for="product of store.cart"
          :key="product.id"
          :product="product"
      />
      <h3 v-if="!store.cart.length">Здесь пока ничего нет...</h3>
    </template>

    <template v-slot:footer>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ totalPrice }} ₴</span>
        <div class="footer-buttons">
          <PrimaryButton text="Оформить заказ" @click="onContinue" />
          <SecondaryButton text="Отмена" class="clear-cart" @click="onCancel" />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { computed } from 'vue';
import { BaseModal } from '../baseComponents';
import { useStore } from '../../store/';
import { PrimaryButton, SecondaryButton } from '../baseComponents';
import CartItem from './CartItem.vue';

const store = useStore();

const isModalOpen = computed(() => store.isCartOpen);

const totalPrice = computed(() => {
  return store.cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
});

const closeModal = () => store.isCartOpen = false;

const onCancel = () => closeModal();

const onContinue = () => closeModal();
</script>
