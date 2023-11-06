<template>
  <div class="card col d-flex justify-content-center">
  <div class="hold">
    <img class="image" :src="project.image" :alt="project.title" >
  </div>
  <div class="containe words">
    <h5>{{ project.title }}</h5>
    <p>{{ project.desc }}</p>
    <button>
      <a :href="project.link"><img class="links" src="https://i.postimg.cc/9FvYzQ6N/455691.png" alt=""> </a>
    </button>
    <button>
      <a :href="project.github"><img class="links" src="https://i.postimg.cc/QtL1FsN0/img-icons8.png" alt=""> </a>
    </button>
  </div>
</div>
  <!-- <div>
  <div class="col d-flex justify-content-center">
    <div class="card my-4" id="body">
        <img :src="project.image" :alt="project.title" class="picture" />
        <h5>{{ project.title }}</h5>
        <p>{{ project.desc }}</p>
        <button class="button"><a :href="project.link">Check me out</a></button>
    </div>
  </div> -->
</template>
<script>
export default {
  props: ["project"]
}
</script>
<style scoped>

.hold {
  padding-top:10px;
}
.card.col.d-flex.justify-content-center {
/* border: red solid; */
background-color: blue;
width: 350px;
border-radius: 22px;
}

.image {
  /* border: solid red; */
  /* padding-top: 30px; */
  border-radius: 22px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
height: 300px;
width: auto;
}

.links{
  height: 40px;
}
.containe.words {
  padding: 10px ;
  background-color: aqua;
  border-radius: 22px;
}
  
</style>