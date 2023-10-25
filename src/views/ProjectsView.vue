<template>
    <section id="Projects">
    <div class="container">
        <h1 class="projects-heading">Projects</h1>
        <div class="container">
           <div v-if="projects" class="flex-container row row row-cols-4">
        <ModalComp v-for="project of projects" :key="project.id" :project="project"/>
    </div>
    <div v-else>Loading...</div>
</div> 
        </div>
    
    
    </section>
</template>
<script>

import ModalComp from '@/components/ModalComp.vue';

export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },

    mounted() {
        this.$store.dispatch("getProjects")
    },

    components: { ModalComp,}
}

</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}

body {
  background-color: rgb(41, 41, 41) !important ;
}

#Projects {
  background-color: rgb(41, 41, 41) !important ;
  color: white;
  min-height: 100vh;
}

.container {
  padding-bottom: 40px;
}

ul {
  background-color: rgb(41, 41, 41) !important ;
}

.projects-heading {
  color: blueviolet;
 font-family: 'Varela Round', sans-serif;
  font-weight: 2rem;
  font-size: 5rem;
  margin-top: 3rem;
}
.projects-heading:after {
  content: "";
  display: block;
  width: 30px;
  height: auto;
  background: #000;
  right: 0;
  top: 50%;
  position: absolute;
  background-color: rgb(72, 72, 72) !important ;
}


    
</style>