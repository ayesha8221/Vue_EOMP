<template>
  <div class="card col d-flex justify-content-center g-4 ms-4 ">
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
background-color: #DDAEAA;
width: 300px;
border-radius: 22px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}


.image {
  /* border: solid red; */
  /* padding-top: 30px; */
  border-radius: 22px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
height: 250px;
width: 90%;
}

.links{
  height: 40px;
  align-items: baseline;
}

button {
  border:none;
  background: transparent;
}
.containe.words {
  padding: 10px ;
  background-color: #E7D7D6;
  border-radius: 22px;
  width:100%;
  height: 200px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
}
  
</style>