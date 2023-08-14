<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    duration: 700,
    once: true
  });
})

import NavigationBar from '@/components/NavigationBar.vue';
import InfosBlock from '@/components/InfosBlock.vue';
import SkillsBlock from '@/components/SkillsBlock.vue';
import HobbiesBlock from '@/components/HobbiesBlock.vue';
import DescriptionBlock from '@/components/DescriptionBlock.vue';
import TrainingBlock from '@/components/TrainingBlock.vue';
import ExperiencesBlock from '@/components/ExperiencesBlock.vue';

// -- Methods --
const currentYear = () => {
  let date = new Date();
  return date.getFullYear();
}

</script>

<template>
  <NavigationBar />

  <main>
    <div id="main-container" class="container-fluid mt-md-5">
      <div id="main-row" class="row justify-content-center mx-auto">
        
        <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 col-xxl-3">
          <div data-aos="fade-right-xl-left-sm" data-aos-delay="100">
            <InfosBlock />
          </div>
          <div data-aos="fade-right" data-aos-delay="300">
            <SkillsBlock />
          </div>
          <div data-aos="fade-right-xl-left-sm" data-aos-delay="300" data-aos-anchor-placement="top-bottom">
            <HobbiesBlock />
          </div>
        </div>
        
        <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
          <div data-aos="fade-left-xl-right-sm" data-aos-delay="200">
            <DescriptionBlock />
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <TrainingBlock />
          </div>
          <div data-aos="fade-left-xl-right-sm" data-aos-delay="500" data-aos-anchor-placement="top-bottom">
            <ExperiencesBlock />
          </div>
        </div>
        
      </div>
    </div>
  </main>
  
  <div id="footer-container" class="container-fluid">
    <div id="footer-row" class="row mt-5 justify-content-center mx-auto">

      <footer class="col-10 col-sm-8 col-lg-6 py-4 text-center">
        <span>© <span id="current-year">{{ currentYear() }}</span> Eric Arnhem.</span>
      </footer>
      
    </div>
  </div>

</template>

<style>
#main-row,
#footer-row {
  max-width: 2000px;
  overflow: hidden;
}

/* For xs and sm displays */
@media (max-width: 767px) {

  /* Removes the horizontal padding on the container and the row */
  #main-container,
  #main-row>* {
    padding-left: 0;
    padding-right: 0;
  }

  /* Adds a border-bottom on divs with ID starting with 'block-' */
  div[id^="block-"] {
    border-bottom: 1px solid var(--block-border-color);
  }

}

/* For md and + displays */
@media (min-width: 768px) {

  /* Adds a full border on divs with ID starting with 'block-' */
  div[id^="block-"] {
    border: 1px solid var(--block-border-color);
    border-radius: 0.25rem;
  }

}

footer {
  border-top: 1px solid;
  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(222 226 230 / 36%) 20%, rgb(222 226 230 / 36%) 80%, rgba(255, 255, 255, 0) 100%) 1;
}

/* AOS */

/* Large screens -> Fade to right / Small screens -> Fade to left */
[data-aos="fade-right-xl-left-sm"] {
  opacity: 0;
  transform: translateX(-100px);
  transition-property: transform, opacity;
}

[data-aos="fade-right-xl-left-sm"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}

/* Large screens -> Fade to left / Small screens -> Fade to right */
[data-aos="fade-left-xl-right-sm"] {
  opacity: 0;
  transform: translateX(100px);
  transition-property: transform, opacity;
}

[data-aos="fade-left-xl-right-sm"].aos-animate {
  transform: translateX(0);
  opacity: 1;
}

@media screen and (max-width: 768px) {
  [data-aos] {
    /* Sets global transition delay for small screens */
    transition-delay: 100ms !important;
  }

  [data-aos="fade-right-xl-left-sm"] {
    transform: translateX(100px);
  }

  [data-aos="fade-left-xl-right-sm"] {
    transform: translateX(-100px);
  }
}
</style>