
<template>
  <section id="Projects">
    <div class="container">
      <br>
      <br>
      <h1 class="projects-heading">Projects</h1>
      <div class="container">
        <div class="category-filter">
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
         <div v-if="projects" class="flex-container justify-content-center row row-cols-1 row-cols-sm-2 row-cols-lg-4 ">
          <ModalComp v-for="project in filteredProjects" :key="project.id" :project="project"/>
        </div>
        <div v-else><Loader/></div>
        </div>
      </div>
      <div>
      <span class="copyright">Designed by Ayesha Galant © 2023</span>
    </div>
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


#Projects {
  background-color: #BD9D91 !important  ;
  color: #BD9D91;
  min-height: 100vh;
}

.container {
  padding-bottom: 40px;
}

.filter-buttons {
  width: 350px;
  text-align: center;
  display: inline-block;
  border-radius: 10px;
  background: #E7D7D6;
  margin-bottom: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

button {
  background: transparent;
  border: none;
  align-items: center;
  font-family: 'Varela Round', sans-serif;
  justify-content: center;
  color: #b7a7c3;
  border-radius: 10px;
  font-size: 40px;
  color: #E99B94;
text-align: center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 45px;
font-weight: 700;
line-height: normal;
}

button:hover {
  background: #eeb7b2;
}

label{
  color:#E7D7D6;
  font-size: 1;
}

.lang {
  height: 50px;
  align-items: center;
}

.projects-heading {
  color: #E99B94;
  font-family: 'Varela Round', sans-serif;
  font-weight: 3rem;
  font-size: 7rem;
  margin-top: 3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
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