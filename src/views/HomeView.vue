<template>
  <div class="bgImg">
            <div class="container overlay w-100 h-100">
                   

                  <router-link to="/projects">
  <button class="projects">
    <span class="bounce-text">Projects</span>
  </button>
</router-link>
      <router-link to="/contact">
        <button class="contact">
          <span class="bounce-text">Contact</span>
        </button>
      </router-link>
      <router-link to="/about">
        <button class="about">
          <span class="bounce-text">About</span>
        </button>
      </router-link>
      <router-link to="/resume">
        <button class="resume">
          <span class="bounce-text">Resume</span>
        </button>
      </router-link>
      <span class="myName slide-in">Ayesha Galant</span>
      <span class="myJob slide-in">Web Developer</span>
    </div>
</div>
                      
                  
                  
              
            
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>

::-webkit-scrollbar {
  display: none;
}

body {
  overflow-x: hidden;
}
.bgImg {
  background-image: url(https://i.postimg.cc/kXRbpnr9/premium-photo-1683631774703-f43d458bcf74-transformed1.jpg);
    position: relative;
    background-size: cover;
    height: 100vh;
    width: auto;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

/* projects button */
button.projects {
  position: absolute;
  background-color: transparent;
  border: none;
  top: 35%;
  left: 7%;
color: #CC6E66;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 60px;
font-weight: 900;
}

button.projects:hover {
  color:#E99B94;
}

/* contact button */
button.contact {
  position: absolute;
  background-color: transparent;
  border: none;
  top: 65%;
  left: 52.3%;
color: var(--d-9-d-9-d-9, #E39D45);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 60px;
font-weight: 900;
}

button.contact:hover {
  color:var(--d-9-d-9-d-9, #e1b175);
}

/* about button */

button.about {
  position: absolute;
  background-color: transparent;
  border: none;
  top: 6.5%;
  left: 37%;
color: black;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 60px;
font-weight: 900;
}

button.about:hover {
  color:grey;
}

/* resume button */

button.resume {
  position: absolute;
  background-color: transparent;
  border: none;
  top: 14%;
  left: 73%;
color: var(--d-9-d-9-d-9, #5F3A31);
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 60px;
font-weight: 900;
}

button.resume:hover {
  color:var(--d-9-d-9-d-9, #825144);
}

/* Ayesha Galant */
.myName {
  position: absolute;
  top: 55%;
right: 12%;
transform: rotate(44.415deg);
flex-shrink: 0;
color: var(--d-9-d-9-d-9, #5F3A31);
/* text-align: center; */
text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
/* font-family: Inter; */
font-size: 80px;
font-style: italic;
font-weight: 800;
line-height: normal;
}

.myName:hover {
  color: var(--d-9-d-9-d-9, #905446);
}

/* web developer */
.myJob {
  position: absolute;
  top: 66%;
right: 40%;
transform: rotate(48.928deg);
flex-shrink: 0;
color: var(--d-9-d-9-d-9, #5F3A31);
/* text-align: center; */
text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
/* font-family: Inter; */
font-size: 70px;
font-style: italic;
font-weight: 800;
line-height: normal;
}

.myJob:hover {
  color: var(--d-9-d-9-d-9, #905446);
}

.bounce-text {
  display: inline-block;
  animation: bounce 0.8s alternate infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px); /* Adjust this value for the desired movement */
  }
}


</style>

