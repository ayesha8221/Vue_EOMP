<template>
  <NavbarComp v-if="!isHomePage" />
  
  <router-view/> 
  <FooterComp/>
</template>
<script>

import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavbarComp,
    FooterComp
  },
  data() {
    return {
      isHomePage: false,
    };
  },
  watch: {
    $route(to) {
      // Check if the route is the home page and set isHomePage accordingly
      this.isHomePage = to.name === "home"; // Assuming your home route is named "home"
    },
  },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Varela+Round&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
