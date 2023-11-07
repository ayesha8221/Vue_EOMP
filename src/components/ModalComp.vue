<template>
  <div class="card col d-flex justify-content-center g-4 ms-4 ">
  <div class="hold">
    <img class="image" :src="project.image" :alt="project.title" >
  </div>
  <div class="containe words">
    <h5>{{ project.title }}</h5>
    <div class="text">
    <p>{{ project.desc }}</p>
    </div>
    <div class="buttons d-flex justify-content-center">
    <button>
      <a :href="project.link"><img class="links" src="https://i.postimg.cc/9FvYzQ6N/455691.png" alt="live link" target="_blank"> </a>
    </button>
    <button>
      <a :href="project.github"><img class="links" src="https://i.postimg.cc/QtL1FsN0/img-icons8.png" alt="github" target="_blank"> </a>
    </button>
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

.hold {
  padding-top:10px;
  position: absolute;
  bottom: 193px;
  left: 25px;
  width: 250px;
  object-fit: cover;
}

.hold:hover {
  /* transform: scale(1.1); */
  transform: translate3d(0px, -5px, 0px);
  transition: ease-in 0.4s;
}
.card.col.d-flex.justify-content-center {
  background-color: #DDAEAA;
  width: 300px;
  border-radius: 32px ;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.card {
  position: relative;
  height: 467px;
}

.words {
  position: absolute;
  z-index: -1;
  top: 265px;
  left: 0px;
}

.image {
  border-radius: 22px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
height: 250px;
width: 90%;
}

.links{
  height: 40px;
  align-items: baseline;
  /* to make the icons stay at the bottom of the container */
  /* display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;  */
}

button {
  border:none;
  background: transparent;
}
.containe.words {
  padding: 20px 10px 10px 10px ;
  background-color: #E7D7D6;
  border-radius: 32px;
  width:100%;
  height: 200px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  /* to make the icons stay at the bottom of the container */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100%; */
}

h5 {
  font-size: 20px;
  text-shadow: 0px 4px 4px rgba(73, 71, 71, 0.25);
  font-weight: 600;
}

.text {
  height: 96px;
}

@media only screen and (max-width: 991px) {

}
  
</style>