<template>
    <!-- <section id="Projects">
    <div class="container">
        <h1 class="projects-heading">Projects</h1>
        <div class="container">
           <div v-if="projects" class="flex-container row row row-cols-4">
        <ModalComp v-for="project of projects" :key="project.id" :project="project"/>
    </div>
    <div v-else>Loading...</div>
</div> 
        </div>
    
    
    </section> -->
    <section id="Projects">
    <div class="container">
      <h1 class="projects-heading">Projects</h1>
      <div class="container">
        <div class="category-filter">
          <label for="categorySelect">Select a language</label>
          <select id="categorySelect" v-model="selectedCategory" @change="filterProjects">
            <option value="">All Categories</option>
            <!-- <option value="">Javascript</option>
            <option value="">Bootstrap</option>
            <option value="">HTML & CSS</option>
            <option value="">VueJs</option> -->
            <option v-for="category in categories" :key="category">{{ category }}</option>
          </select>
        </div>
        <!-- <div v-if="filteredProjects.length > 0" class="flex-container row row row-cols-4"> -->
          <ModalComp v-for="project in filteredProjects" :key="project.id" :project="project" class="flex-container row row row-cols-4"/>
        </div>
        <!-- <div v-else>
          No projects match the selected category.
        </div> -->
      </div>
    <!-- </div> -->
  </section>
</template>
<script>

import ModalComp from '@/components/ModalComp.vue';

export default {
  data() {
    return {
      selectedCategory: '', // Initialize with an empty category
      // projects: []
      // filteredProjects: [], // Holds the filtered products
      categories: ["Javascript", "Bootstrap", "HTML & CSS", "VueJs"],
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    // categories() {
    //   return this.$store.state.categories; // Use the categories state from the store
    // },
    filteredProjects() {
      return this.selectedCategory
        ? this.projects.filter(project => project.category === this.selectedCategory)
        : this.projects;
    },
  },
  methods: {
    filterProjects() {
      // Handle category filter
      // This method is called when the category selection changes
    },
  },
  mounted() {
    this.$store.dispatch('getProjects');
  },
    // computed: {
    //     projects() {
    //         return this.$store.state.projects
    //     }
    // },

    // mounted() {
    //     this.$store.dispatch("getProjects")
    // },

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