<script setup>
import { useI18n } from 'vue-i18n';
useI18n();

// Add tool name as key and shortname used in CSS variable to add an underline on the tool name in the tools used list
const toolsShortNames = {
  "HTML": "html",
  "CSS": "css",
  "Bootstrap": "bootstrap",
  "JavaScript": "js",
  "jQuery": "jquery",
  "PHP": "php",
  "MySQL": "sql",
  "Vue.js": "vuejs"
}

// -- Methods --

// Get a tool CSS color variable (used to apply the colored underline)
const getToolColorVariable = (tool) => {
  if (toolsShortNames[tool]) {
    let toolShortname = toolsShortNames[tool];
    return `--${toolShortname}-color`;
  }
};

</script>

<template>
  <div id="block-experience" class="p-3 mt-md-3">
    <h2>Expériences Développement</h2>

    <!-- Experiences -->
    <div class="row px-3">
      <div
        class="col-9 col-sm-10 col-md-9 col-lg-10 offset-3 offset-sm-2 offset-md-3 offset-lg-2 p-0 pt-3"
      >
        <ul id="experience-timeline">

          <!-- Displays each event from the experiences -->
          <li class="experience-event" v-for="(event, name) in $tm('experiences.events')" :key="name" :data-date="$rt(event.date)">

            <span class="experience-title" v-html="$rt(event.title)"></span>

            <ul class="experience-tools">
              <li>
                <span class="fw-500">{{ $t('experiences.toolsTitle') }}: </span>
                
                <!-- Displays each tool used for the event -->
                <span v-for="(tool, index) in event.tools" :key="name + tool">

                  <span
                    class="tool-underline"
                    :style="{ '--tool-color': `var(${getToolColorVariable($rt(tool))})` }">
                    {{ $rt(tool) }}
                  </span>

                  <!-- Adds a comma after each tool except the last one -->
                  <span v-if="index != Object.keys(event.tools).length - 1">, </span>

                </span>
              </li>
            </ul>

          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<i18n global src="@/i18n_locale_messages/ExperiencesBlock.json"></i18n>

<style>
#experience-timeline {
  border-left: 4px solid #81a7ff;
  line-height: 1.4rem;
  padding: 25px;
  padding-bottom: .25rem;
  list-style: none;
  font-weight: 300;
}

.experience-event {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.6);
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

.experience-event:last-of-type {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Date of the event */
.experience-event::before {
  top: 0;
  left: -145px;
  content: attr(data-date);
  color: rgba(248, 249, 249, 0.8);
  font-size: 0.9rem;
  text-align: right;
  width: 100px;
  position: absolute;
  display: block;
}

/* Reduces the width of the date so it can wrap */
@media (max-width: 400px) {
  .experience-event::before {
    left: -127px;
    width: 77px;
  }
}

/* Dot that shows the event on the timeline */
.experience-event::after {
  top: 5px;
  left: -31.85px;
  content: "";
  background: #313534;
  box-shadow: 0 0 0 4px #81a7ff;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  position: absolute;
  display: block;
}

.experience-title {
  font-weight: 600;
  font-size: 1.25rem;
}

.experience-tools {
  list-style: square;
  margin-top: 1rem;
}

.experience-tools li {
  margin-bottom: .5rem;
}

#link-arnhembraun:hover {
  color: #F1E2A6;
}

.tool-underline {
  border-bottom: 2px solid var(--tool-color);
}
</style>