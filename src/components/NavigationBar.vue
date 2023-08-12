<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// -- Methods --
const changeLocale = (newLocale) => {
  locale.value = newLocale;
  updatePageTitle(newLocale);
};

const updatePageTitle = (newLocale) => {
  const titleKey = 'pageTitle'; // Translation key for page title
  const pageTitle = t(titleKey, {}, newLocale); // Get the translated page title
  document.title = pageTitle; // Update the page title
};

</script>

<template>
  <nav class="navbar sticky-top navbar-dark navbar-expand navbar-custom">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 me-0 me-sm-3">Eric ARNHEM</span>

        <ul class="navbar-nav ms-auto mb-1 mb-sm-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="language-dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <font-awesome-icon :icon="['fas', 'language']" id="language-icon"/> {{ $t('language') }}
            </a>
            <ul
              class="
                dropdown-menu
                dropdown-menu-end
                dropdown-menu-dark
                dropdown-menu-custom
              "
              aria-labelledby="language-dropdown"
            >
              <li><button class="dropdown-item" @click="changeLocale('fr')">Français</button></li>
              <li><button class="dropdown-item" @click="changeLocale('en')">English</button></li>
            </ul>
          </li>
        </ul>

    </div>
  </nav>
</template>

<i18n global src="@/i18n_locale_messages/NavigationBar.json"></i18n>

<style>
.navbar-custom {
  background-image: url("@/assets/img/background.jpg");
  border-bottom: 1px solid #f8f9f9;
}

.navbar-brand {
  font-weight: 600;
}

.dropdown-menu-custom {
  padding: 0;
  border-radius: 4px;
}

.dropdown-menu-custom li:first-child .dropdown-item {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.dropdown-menu-custom li:last-child .dropdown-item {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.dropdown-menu-custom .dropdown-item:active {
  background-color: var(--accent-color) !important;
}

.dropdown-item {
  padding: 8px 16px;
}

#language-icon {
  font-size: 19px;
  vertical-align: middle;
  margin-right: 0.2rem;
}
</style>