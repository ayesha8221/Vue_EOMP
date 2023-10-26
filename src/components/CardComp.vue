<template>
  <div class="container">
    <BCarousel
      id="carouselExampleSlidesOnly"
      v-model="activeSlide"
      :interval="3000"
      controls
      indicators
      background="#333"
    >
      <BCarouselSlide
        :key="testimonial.id"
      >
        <img :src="testimonial.image" class="d-block w-100" :alt="testimonial.name">
        <h5 class="card-title">{{ testimonial.name }}</h5>
        <p class="card-text">{{ testimonial.desc }}</p>
      </BCarouselSlide>
    </BCarousel>
  </div>
</template>

import { BCarousel, BCarouselSlide } from 'bootstrap-vue';

<script>
export default {
  props:
    ["testimonial"],
  data() {
    return {
      activeSlide: 0,
    };
  },
  components: {
    BCarousel,
    BCarouselSlide,
  },
};
</script>
<style scoped>

body {
  padding-top: 60px;
}

#testimonial-imgs {
  padding-top: 60px;
  height: 300px;
  width: auto;
}

.butt {
  width: auto;
  height: 40px;
  text-decoration: none;
  text-underline-offset: none;
}





#Testimonials {
  background-color: rgb(41, 41, 41) !important ;
  color: white;
  min-height: 100vh;
}
  
</style>