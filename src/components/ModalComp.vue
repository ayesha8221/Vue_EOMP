<template>
  <!-- <div class="container">
    <div class="card" style="width: 18rem;">
  <img :src="project.image" class="card-img-top" :alt="project.title">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <p class="card-text">{{ project.desc }}</p>
    <a :href="project.link" class="btn btn-primary">Check me out</a>
  </div>
</div>
  </div> -->
  <div>
        <div class="container">
    <div class="card " id="body">
        <img :src="project.image" :alt="project.title" class="picture" />
        <h5>{{ project.title }}</h5>
        <p> {{ project.desc }}</p>
        <button class="button"><a :href="project.link">Check me out</a></button>
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

.card.my-4 {
  /* background:  #dab99a; */
 border: 1px solid #c59360; 
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  /* border: none; */
}

.card.my-4:hover{
  box-shadow: rgba(80, 45, 8, 0.22) 0px 25px 43px;
  transform: translate3d(0px, -1.5px, 0px);
}

#body {
  height: 405px;
  width:300px;
  text-align: center;
  /* justify-content: center; */
  align-items: center;
}

.picture {
  height: 250px;
  width:auto;
}

button {
  color: rgb(255, 255, 255);
  background-color: blueviolet;
  border: solid blueviolet;
  /* margin-right: 100px; */
  height: 40px;
  width: 120px;
  border-radius: 20px;
}

a {
  text-decoration: none;
  color: white;
}
  
</style>