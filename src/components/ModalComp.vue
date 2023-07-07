<template>
  <div class="container">
    <div class="card" style="width: 18rem;">
  <img :src="project.image" class="card-img-top" :alt="project.title">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <p class="card-text">{{ project.desc }}</p>
    <a :href="project.link" class="btn btn-primary">Check me out</a>
  </div>
</div>
  </div>
</template>
<script>
export default {
  props: ["project"]
}
</script>
<style scoped>

body {
  padding-top: 60px;
}

#project-imgs {
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
}

.card {
  border: blueviolet solid;
}
  
</style>