<template>
    <section id="Testimonials">
        <div class="container">
            <h1 class="testimonials-heading">Testimonials</h1>
        <div v-if="testimonials" class="flex-container row row-cols-">
        <CardComp v-for="testimonial of testimonials" :key="testimonial.id" :testimonial="testimonial"/>
    </div>
    <div v-else>Loading...</div>
</div>
    </section>
</template>
<script>

import CardComp from '@/components/CardComp.vue';

export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },

    mounted() {
        this.$store.dispatch("getTestimonials")
    },

    components: {CardComp},
}

</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
.body {
    background-color: black !important;
    overflow: hidden;
}

#Testimonials {
  background-color: rgb(41, 41, 41) !important ;
  color: white;
  min-height: 100vh;
}

.testimonials-heading {
  color: blueviolet;
 font-family: 'Varela Round', sans-serif;
  font-weight: 2rem;
  font-size: 5rem;
  margin-top: 3rem;
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