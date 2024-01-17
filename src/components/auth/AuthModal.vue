<template>
  <BaseModal
      title="Авторизация"
      :is-open="isModalOpen"
      @cancel="onCancel"
      @close="closeModal"
  >
    <template v-slot:body>
      <form id="logInForm">
        <fieldset class="modal-body">
          <label class="label-auth">
            <span>Логин</span>
            <input v-model="username" id="login" type="text">
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input v-model="password" id="password" type="password">
          </label>
        </fieldset>
      </form>
    </template>

    <template v-slot:footer>
      <div class="modal-auth-footer">
        <div class="footer-buttons">
          <PrimaryButton
              text="Войти"
              class="button-login"
              @click="onSubmit"
          />
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { BaseModal } from '../baseComponents';
import { useStore } from '../../../store/';
import { useLocalStorage } from '../../composables/';
import {PrimaryButton} from "../baseComponents/index.js";

const store = useStore();
const storage = useLocalStorage('user')

const username = ref('');
const password = ref('');

const isModalOpen = computed(() => store.isAuthOpen);

const closeModal = () => store.isAuthOpen = false;
const onCancel = () => closeModal();
const onSubmit = () => {
  if (username.value && password.value) {
    console.log(store.isLoggedIn);

    store.isLoggedIn = true;

    storage.setItem({ username: username.value });
    closeModal();
  }
};

onMounted(() => {
  storage.storedValue.value ? store.isLoggedIn = true : store.isLoggedIn = false;
});
</script>


