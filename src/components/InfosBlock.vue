<script setup>
import { useI18n } from 'vue-i18n';
useI18n();
</script>

<template>
  <div id="block-info" class="p-3 text-center text-md-start">
    <h1>
      <span class="fs-2 fw-bold d-block">Eric Arnhem</span>
      <span id="info-job" class="fs-5 fw-normal d-block">{{ $t('job') }}</span>
    </h1>

    <ul id="info-personnal" class="list-unstyled mb-0 pb-3">
      <li>
        <font-awesome-icon :icon="['fas', 'location-dot']" /> Hauts-de-France - FRANCE
      </li>
    </ul>

    <ul id="info-links" class="list-unstyled mb-0 mt-3">
      <li>
        <a href="mailto:arnhemeric60@gmail.com">
          <font-awesome-icon :icon="['fas', 'envelope']" /> arnhemeric60@gmail.com
        </a>
      </li>
      <li>
        <a href="https://github.com/EricArnhem">
          <font-awesome-icon :icon="['fab', 'github']" /> GitHub
        </a>
      </li>
      <!-- REMOVED UNTIL NEW CV PDF IS DONE -->
      <!-- <li v-show="$i18n.locale === 'fr'">
        <a href="/CV_ARNHEM_Eric.pdf">
          <font-awesome-icon :icon="['fas', 'file-pdf']" /> CV PDF
        </a>
      </li> -->
    </ul>
  </div>
</template>

<i18n global src="@/i18n_locale_messages/InfosBlock.json"></i18n>

<style>
#block-info {
  font-size: 1.1rem;
}

#info-personnal {
  border-bottom: var(--border-underline-style);
  border-image: var(--border-gradient);
}

#info-job {
  color: #afafaf;
}

#info-links a {
  text-decoration: none;
}

#info-links a:hover {
  text-decoration: underline;
  color: #81a7ff;
}
</style>