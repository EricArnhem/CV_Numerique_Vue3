<script setup>
import { useI18n } from 'vue-i18n';
useI18n();
</script>

<template>
  <div id="block-description" class="p-3">
    <h2>Description</h2>
    <p class="text-center" v-html="$t('description')"></p>
  </div>
</template>

<i18n global src="@/i18n_locale_messages/DescriptionBlock.json"></i18n>