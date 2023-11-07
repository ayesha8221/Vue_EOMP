<template>
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link to="/" class="nav-link">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/about" class="nav-link">About</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/projects" class="nav-link">Projects</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/resume" class="nav-link">Resume</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/contact" class="nav-link">Contact</router-link>
  </li>
    </ul>  
</template>
<script>
export default {
    
}
</script>
<style scoped>
ul {
  background-image: none;
  background-color: transparent;
  border-radius: 0px;
  border: 0;
  box-shadow: none;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

a.nav-link {
  color: black;
text-align: center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

    
</style>