
<template>
  <div id="Testimonials">
    <!-- <img class="stars" src="https://i.postimg.cc/CL1FqwSr/istockphoto-826581600-2048x2048-removebg-preview.png" alt="5-stars"> -->
    <h1 class="testimonials-heading">Testimonials</h1>
    <img class="stars" src="https://i.postimg.cc/CL1FqwSr/istockphoto-826581600-2048x2048-removebg-preview.png" alt="5-stars">
    <div class="container justify-content-center">
     <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(testimonial, index) in testimonials" :key="testimonial.id" :class="['carousel-item', { 'active': index === 0 }]">
        <div class="testimonial">
          <img class="pics" :src="testimonial.image" :alt="testimonial.name" />
          <h3>{{ testimonial.name }}</h3>
          <p>{{ testimonial.desc }}</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#testimonialCarousel" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#testimonialCarousel" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div> 
    </div>
  </div>
</template>


<script>

import Loader from '@/components/Loader.vue';
// import CardComp from '@/components/CardComp.vue';

export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },

    mounted() {
        this.$store.dispatch("getTestimonials")
    },

    components: { Loader},
}

</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
.body {
    background-color: #b7a7c3 !important;
    overflow: hidden;
}
#testimonialCarousel{
padding-top: 3rem;
width: 900px;
}
.carousel-inner {
  background-color: #b7a7c3;
  /* background-image: url("https://i.postimg.cc/Kc5Xfw0X/istockphoto-826581600-2048x2048-removebg-preview.png"); */
  width: 100%;
  /* background-repeat: no-repeat; */
  background-size: cover;
}

img.stars {
  margin-top: 0.5rem;
  height: 100px;
}
.pics {
  height: 300px;
  border-radius: 20px;
  background-color: #a58298;
}

#Testimonials {
  background-color: #b7a7c3 !important ;
  color: white;
  min-height: 100vh;
}

.testimonials-heading {
  color:  #a58298;
 font-family: 'Varela Round', sans-serif;
  font-weight: 2rem;
  font-size: 5rem;
  padding-top: 4rem;
}
.testimonials-heading:after {
  content: "";
  display: block;
  width: 30px;
  height: auto;
  background: rgb(41, 41, 41);
  right: 0;
  top: 50%;
  position: absolute;
}

ul {
  background-color: rgb(41, 41, 41) !important ;
  background-image: none;
  /* background-color: transparent !important;  */
  border: 0;
  box-shadow: none;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

    
</style>