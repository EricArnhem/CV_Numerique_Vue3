<script setup>
import { useI18n } from 'vue-i18n';
useI18n();

import { skillsColors } from '@/assets/js/skillsDataProcessor.js';

// -- Methods --

// Get a technology color (used to apply the colored underline)
const getTechnologyColor = (technology) => {
  if (skillsColors[technology]) {
    const technologyColor = skillsColors[technology];
    return technologyColor;
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

            <ul class="experience-technologies">
              <li>
                <span class="fw-500">{{ $t('experiences.technologiesTitle') }}: </span>
                
                <!-- Displays each technology used for the event -->
                <span class="experience-technology" v-for="(technology) in event.technologies" :key="name + technology">

                  <span
                    class="technology-underline"
                    :style="{ '--technology-color': getTechnologyColor($rt(technology)) }">
                    {{ $rt(technology) }}
                  </span>

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
@media screen and (max-width: 400px) {
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

.experience-technologies {
  list-style: square;
  margin-top: 1rem;
}

.experience-technologies li {
  margin-bottom: .5rem;
}

.experience-technology~.experience-technology::before {
  /* Add a comma after each technology except the last one */
  content: ', ';
}

#link-arnhembraun:hover {
  color: #F1E2A6;
}

.technology-underline {
  border-bottom: 2px solid var(--technology-color);
}
</style>