<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
  <div class="bgImg">
            <div class="container overlay w-100 h-100">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                      <div class="bgtext"><div class="wrapper">
    <div class="bgText">
      Hi! I'm Ayesha Galant.<br>
      I am an aspiring software developer.
    </div>
    <div>
      <router-link to="/projects">
        <button class="btnp">Projects</button>
      </router-link>
      <router-link to="/contact">
        <button class="btnc">Contact</button>
      </router-link>
    
    </div>
</div>
</div>
                      
                  </div>
                    </div>
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
  background-image: url(https://i.postimg.cc/x8gW9dh7/premium-photo-1683631774703-f43d458bcf74-transformed-Cropped.jpg);
    position: relative;
    background-size: cover;
    height: 100vh;
    width: auto;
    background-attachment: fixed;
    background-repeat: no-repeat;
}

.wrapper {
  padding-top: 270px;
  display: grid;
  place-items: center;
  
}

.ul {
  background-image: none;
  background-color: transparent !important; 
  border: 0;
  box-shadow: none;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}


.bgText {
    color: rgb(206, 206, 206);
  width: 47ch;
  animation: typing 2s steps(22), blink 1s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  transform: translate(-50%, -50%);
  font-family: monospace;
  font-size: 2em;
  text-align: center;
}

@keyframes typing {
  from {
    width: 0
  }
}

.btnp {
  color: rgb(255, 255, 255);
  background-color: blueviolet;
  border: solid blueviolet;
  margin-right: 100px;
  height: 40px;
  width: 90px;
  border-radius: 20px;
}
.btnc {
  color: white;
  background-color: blueviolet;
  border: solid blueviolet;
  margin-right: 800px;
  height: 40px;
  width: 90px;
  border-radius: 20px;
}

</style>

