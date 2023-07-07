<template>
  <div class="container" >
    <div class="card" style="width: 16rem;">
  <img :src="testimonial.image" class="card-img-top" :alt="testimonial.name">
  <div class="card-body">
    <h5 class="card-title">{{ testimonial.name }}</h5>
    <p class="card-text">{{ testimonial.desc }}</p>
  </div>
</div>
  </div>
            
</template>
<script>
export default {
  props: ["testimonial"]
}
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

.container {
  margin-top: 60px;
  /* padding-top: 60px; */
   width: 275px;
   height:auto;
   /* border: solid blueviolet; */
   background-color: black !important;

}

.card {
  background-color: black;
  color: blueviolet;
}

#Testimonials {
  background-color: rgb(41, 41, 41) !important ;
  color: white;
  min-height: 100vh;
}
  
</style>