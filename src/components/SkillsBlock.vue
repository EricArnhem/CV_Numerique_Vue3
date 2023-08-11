<script setup>
import { useI18n } from 'vue-i18n';
useI18n();

import '@/assets/js/progressBars.js';
import skillsData from '@/assets/json/skillsData.json';
</script>

<template>
  <div id="block-skill" class="p-3 mt-md-3">
    <h2>{{ $t('skills.title') }}</h2>

    <h3 class="fs-5">
      <font-awesome-icon :icon="['fas', 'chevron-right']" /> {{ $t('skills.programmingLanguages') }}
    </h3>
    <ul class="skill-list">
      
      <!-- Programming languages -->
      <li v-for="(skill, name) in skillsData.programmingLanguages[0]" :key="skill.shortname" :id="'skill-' + skill.shortname">
        <span class="skill-name">{{ name }}</span>

        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :aria-valuenow="skill.percentage"
            aria-valuemin="0"
            aria-valuemax="100"
          >{{ skill.percentage }}%</div>
        </div>

        <ul v-if="skill.frameworks" class="framework-list">

          <li v-for="(framework, name) in skill.frameworks" :key="framework.shortname" :id="'skill-' + framework.shortname">
            <span class="skill-name">{{ name }}</span>

            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                :aria-valuenow="framework.percentage"
                aria-valuemin="0"
                aria-valuemax="100"
              >{{ framework.percentage }}%</div>
            </div>

          </li>
        </ul>

      </li>
    </ul>

    <h3 class="fs-5">
      <font-awesome-icon :icon="['fas', 'chevron-right']" /> OS
    </h3>
    <ul class="skill-list">

      <!-- OS -->
      <li v-for="(skill, name) in skillsData.operatingSystems[0]" :key="skill.shortname" :id="'skill-' + skill.shortname">
        <span class="skill-name">{{ name }}</span>

        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :aria-valuenow="skill.percentage"
            aria-valuemin="0"
            aria-valuemax="100"
          >{{ skill.percentage }}%</div>
        </div>

      </li>
    </ul>

    <h3 class="fs-5">
      <font-awesome-icon :icon="['fas', 'chevron-right']" /> {{ $t('skills.tools.title') }}
    </h3>
    <ul class="skill-list">

      <!-- Tools -->
      <li v-for="(skill, name) in skillsData.tools[0]" :key="skill.shortname" :id="'skill-' + skill.shortname">
        <span class="skill-name" v-if="skill.shortname == 'commandline'">{{ $t('skills.tools.commandLine') }}</span>
        <span class="skill-name" v-else>{{ name }}</span>

        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :aria-valuenow="skill.percentage"
            aria-valuemin="0"
            aria-valuemax="100"
          >{{ skill.percentage }}%</div>
        </div>

      </li>
    </ul>

    <h3 class="fs-5">
      <font-awesome-icon :icon="['fas', 'chevron-right']" /> {{ $t('skills.languages.title') }}
    </h3>
    <ul class="skill-list mb-0">
      <li id="skill-english">
        <span class="skill-name">{{ $t('skills.languages.english') }}</span>
      </li>
    </ul>
  </div>
</template>

<i18n global src="@/i18n_locale_messages/SkillsBlock.json"></i18n>

<style>
.skill-name {
  font-weight: 500;
}

.skill-list li {
  margin-bottom: 0.75rem;
}

.framework-list {
  margin-top: 0.75rem;
}

.skill-list .progress {
  height: 20px;
  font-size: 1rem;
  border-radius: 4px;
}

.progress-bar {
  transition: width 0.1s ease;
}

#skill-english {
  list-style-image: url(@/assets/img/logos/uk_flag.png);
}
</style>

<style lang="scss">
$skills: 'html', 'css', 'bootstrap', 'js', 'vuejs', 'php', 'sql', 'windows', 'linux', 'vscode', 'nano', 'commandline', 'git', 'github', 'wamp', 'paintnet', 'pencil';

@each $skill in $skills {

  #skill-#{$skill} {
    list-style-image: url(@/assets/img/logos/#{$skill}.png);
  }

  #skill-#{$skill} .progress-bar {
    background-color: var(--#{$skill}-color);
    width: 0px;
  }

}
</style>