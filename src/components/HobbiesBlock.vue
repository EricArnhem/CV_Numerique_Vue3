<script setup>
import { useI18n } from 'vue-i18n';
useI18n();
</script>

<template>
  <div id="block-hobbies" class="p-3 mt-md-3">
    <h2>{{ $t('hobbies.title') }}</h2>

    <div class="d-flex justify-content-center d-md-block">
      <ul id="hobbies-list" class="list-unstyled mb-0">
        <li class="faa-parent animated-hover">
          <span class="hobby-icon-container faa-pulse faa-slow">
            <font-awesome-icon :icon="['fas', 'microchip']" size="2x" class="hobby-icon" />
          </span>
          {{ $t('hobbies.newTechnologies') }}
        </li>
        <li class="faa-parent animated-hover">
          <span class="hobby-icon-container faa-float">
            <font-awesome-icon :icon="['fas', 'rocket']" size="2x" class="hobby-icon" />
          </span>
          {{ $t('hobbies.astronomy') }}
        </li>
        <li class="faa-parent animated-hover">
          <span class="hobby-icon-container faa-wrench faa-slow">
            <font-awesome-icon :icon="['fas', 'gamepad']" size="2x" class="hobby-icon" />
          </span>
          {{ $t('hobbies.videoGames') }}
        </li>
        <li class="faa-parent animated-hover">
          <span class="hobby-icon-container faa-flash faa-slow">
            <font-awesome-icon :icon="['fas', 'display']" size="2x" class="hobby-icon" />
          </span>
          {{ $t('hobbies.itNews') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<i18n global src="@/i18n_locale_messages/HobbiesBlock.json"></i18n>

<style>
#hobbies-list li {
  margin-bottom: 0.75rem;
  width: fit-content;
}

.hobby-icon {
  vertical-align: middle;
}

.hobby-icon-container {
  min-width: 50px;
  display: inline-block;
  text-align: center;
}
</style>