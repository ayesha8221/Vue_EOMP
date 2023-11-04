
<template>
   <NavbarComp/>
  <section id="Projects">
    <div class="container">
      <h1 class="projects-heading">Projects</h1>
      <div class="container">
        <div class="category-filter">
          <label>Select a language</label>
          <br>
          <div class="filter-buttons">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectCategory(category)"
              :class="{ active: category === selectedCategory }"
            >
              {{ category }}
            </button>
            <button @click="clearCategory" :class="{ active: selectedCategory === '' }">
              All
            </button>
            <button @click="selectCategory('HTML & CSS')" :class="{ active: selectedCategory === 'HTML & CSS' }">
              <img class="lang" src="https://i.postimg.cc/wjSFkZ6D/img-icons8.png" alt="HTML & CSS">
            </button>
            <button @click="selectCategory('VueJs')" :class="{ active: selectedCategory === 'VueJs' }">
              <img class="lang" src="https://i.postimg.cc/gjdTH5Hg/img-icons8.png" alt="VueJs">
            </button>
            <button @click="selectCategory('Javascript')" :class="{ active: selectedCategory === 'Javascript' }">
              <img class="lang" src="https://i.postimg.cc/MTQGQsWP/img-icons8.png" alt="Javascript">
            </button>
            <button @click="selectCategory('Bootstrap')" :class="{ active: selectedCategory === 'Bootstrap' }">
              <img class="lang" src="https://i.postimg.cc/MT7SwgZS/img-icons8.png" alt="Bootstrap">
            </button>
          </div>
        </div>
         <div v-if="projects" class="flex-container row row row-cols-1 row-cols-sm-2 row-cols-lg-4">
          <ModalComp v-for="project in filteredProjects" :key="project.id" :project="project"/>
        </div>
        <div v-else><Loader/></div>
        </div>
      </div>
    <!-- </div> -->
  </section>
</template>
<script>
import ModalComp from '@/components/ModalComp.vue';
import Loader from '@/components/Loader.vue';

export default {
  data() {
    return {
      selectedCategory: '',
      categories: []
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    filteredProjects() {
      return this.selectedCategory
        ? this.projects.filter(project => project.category === this.selectedCategory)
        : this.projects;
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    clearCategory() {
      this.selectedCategory = '';
    },
  },
  mounted() {
    this.$store.dispatch('getProjects');
  },
  components: { ModalComp , Loader},
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}

body {
  background-color: rgb(168, 168, 168) !important ;
}

#Projects {
  background-color: #b7a7c3 !important ;
  color: white;
  min-height: 100vh;
}

.container {
  padding-bottom: 40px;
}

ul {
  background-color: #cbc0d3 !important ;
  background-image: none;
  /* background-color: transparent !important;  */
  border: 0;
  box-shadow: none;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.filter-buttons {
  /* border:  #a58298; */
  width: 350px;
  text-align: center;
  display: inline-block;
  border-radius: 10px;
  background: #b498a9;
  transition: background-color 0.4s ease-in-out;
}

button{
  background: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  color: #b7a7c3;
  border-radius: 10px;
  font-size: 40px;
}

button:hover {
  background: #a58298;
}

label{
  color:#5d6c87;
  font-size: 1;
}

.lang {
  height: 50px;
  align-items: center;
  /* margin-right: 30px; */
}

.projects-heading {
  color: #a58298;
 font-family: 'Varela Round', sans-serif;
  font-weight: 2rem;
  font-size: 5rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
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