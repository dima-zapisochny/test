<template>
  <teleport to="#modal">
    <div class="modal" v-show="isOpen">
      <div class="modal-dialog">

        <div class="modal-header">
          <slot name="header">
            <h3 class="modal-title">{{ title }}</h3>
            <button class="close" @click="closeModal">&times;</button>
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-auth-footer">
          <slot name="footer">
            <PrimaryButton :text="continueText" @click="onContinue" />
            <SecondaryButton :text="cancelText" @click="onCancel" />
          </slot>
        </div>

      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import PrimaryButton from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue';

defineProps({
  isOpen: {
    type: Boolean,
    required: false,
    default: false
  },

  title: {
    type: String,
    required: true
  },

  continueText: {
    type: String,
    required: false,
    default: 'Продолжить'
  },

  cancelText: {
    type: String,
    required: false,
    default: 'Отменить'
  }
});

const emit = defineEmits(['close', 'continue', 'cancel']);

const closeModal = () => emit('close');

const onContinue = () => {
  emit('continue');
  closeModal();
};

const onCancel = () => {
  emit('cancel');
  closeModal();
};
</script>

