<script setup>
import { useI18n } from 'vue-i18n';
useI18n();
</script>

<template>
  <div id="block-training" class="p-3 mt-md-3">
    <h2>{{ $t('training.title') }}</h2>

    <div class="row px-3">
      <div
        class="col-9 col-sm-10 col-md-9 col-lg-10 offset-3 offset-sm-2 offset-md-3 offset-lg-2 p-0 pt-3"
      >
        <ul id="training-timeline">

          <!-- Displays each event from the training -->
          <li class="training-event" v-for="(event, name) in $tm('training.events')" :key="name" :data-date="$rt(event.date)">
            <span class="training-title" v-html="$rt(event.title)"></span>
            <ul class="training-description">
              <!-- Displays each line of description -->
              <li v-for="(description, index) in event.descriptions" :key="name + index">
                {{ $rt(description) }}
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<i18n global src="@/i18n_locale_messages/TrainingBlock.json"></i18n>

<style>
#training-timeline {
  border-left: 4px solid #81a7ff;
  line-height: 1.4rem;
  padding: 25px;
  padding-bottom: 0.25rem;
  list-style: none;
  font-weight: 300;
}

.training-event {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.6);
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

.training-event:last-of-type {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

/* Date of the event */
.training-event::before {
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
  .training-event::before {
    left: -127px;
    width: 77px;
  }
}

/* Dot that shows the event on the timeline */
.training-event::after {
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

.training-title {
  font-weight: 600;
  font-size: 1.25rem;
}

.training-description {
  list-style: square;
  margin-top: 1rem;
}

.training-description li {
  margin-bottom: 0.5rem;
}

#link-lamanu:hover {
  color: #2dabe3;
}
</style>