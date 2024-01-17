<template>
  <div class="container">
    <header class="header">
      <a class="logo">
        <img src="../assets/img/icon/logo.svg" alt="Logo" />
      </a>
      <label class="address">
        <input type="text" class="input input-address" placeholder="Адрес доставки" />
      </label>
      <div class="buttons">
        <span class="user-name"></span>

        <PrimaryButton
            text="Войти"
            class="button-auth"
            v-if="!store.isLoggedIn"
            @click="openAuth"
        >
          <span class="button-auth-svg"></span>
        </PrimaryButton>

        <PrimaryButton
            text="Выйти"
            class="button-out"
            v-if="store.isLoggedIn"
            @click="outAuth"
        >
          <span class="button-out-svg"></span>
        </PrimaryButton>

        <SecondaryButton text="Корзина" class="button-cart" id="cart-button" @click="openCart">
          <span class="button-cart-svg"></span>
        </SecondaryButton>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useStore } from '../store';
import { useLocalStorage } from '../composables';
import { PrimaryButton, SecondaryButton } from './baseComponents';

const store = useStore();
const storage = useLocalStorage('user')

const openCart = () => store.isCartOpen = true;
const openAuth = () => store.isAuthOpen = true;
const outAuth = () => {
  store.isLoggedIn = false;

  storage.clear();
};
</script>