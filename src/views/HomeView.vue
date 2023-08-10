<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import InfosBlock from '@/components/InfosBlock.vue';
import DescriptionBlock from '@/components/DescriptionBlock.vue';

// -- Methods --
const currentYear = () => {
  let date = new Date();
  return date.getFullYear();
}

</script>

<template>
  <NavigationBar />
  <div id="main-container" class="container-fluid mt-md-5">
    <div id="main-row" class="row justify-content-center mx-auto">

      <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 col-xxl-3">
        
        <InfosBlock />
        <!-- <SkillsBlock /> -->
        <!-- <HobbiesBlock /> -->

       </div>

       <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
         
        <DescriptionBlock />
         <!-- <TrainingBlock /> -->
         <!-- <ExperiencesBlock /> -->
      </div>
       <div class="row mt-5 justify-content-center">
         <footer class="col-10 col-sm-8 col-lg-6 py-4 text-center">
           <span>© <span id="current-year">{{ currentYear() }}</span> Eric Arnhem.</span>
         </footer>
       </div>
       
    </div>
  </div>

</template>

<style>
#main-row {
  max-width: 2000px;
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
    border-bottom: 1px solid #dee2e6;
  }

}

/* For md and + displays */
@media (min-width: 768px) {

  /* Adds a full border on divs with ID starting with 'block-' */
  div[id^="block-"] {
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
  }

}

footer {
  border-top: 1px solid rgb(222 226 230 / 36%);
}
</style>