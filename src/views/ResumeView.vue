<template>
    <section id="About">
        <div class="container" >
            <h1 class="about-heading">Resume</h1>
        </div>
        <div class="container">
                <h2 class="skills-heading p-3">Education & Experience</h2>
        </div>
        <div v-if="education">
        <ResumeComp v-for="education of education" :key="education.id" :education="education"/>
    </div>
    <div v-else>Loading...</div>
    </section>
</template>
<script>

import ResumeComp from '@/components/ResumeComp.vue'

export default {
    computed: {
        education() {
            return this.$store.state.education
        }
    },

    mounted() {
        this.$store.dispatch("getEducation")
    },

    components: {
        ResumeComp
    }
}
</script>
<style scoped>

::-webkit-scrollbar {
  display: none;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Varela+Round&display=swap');
#About {
  background-color: rgb(41, 41, 41) !important ;
  color: white;
  min-height: 100vh;
}

.container {
  padding-top: 60px;
  /* border: blueviolet solid; */
}

.about-heading {
  color: blueviolet;
 font-family: 'Varela Round', sans-serif;
  font-weight: 2rem;
  font-size: 7rem;
  margin-top: 3rem;
}
.about-heading:after {
  content: "";
  display: block;
  width: 30px;
  height: auto;
  background: #000;
  right: 0;
  top: 50%;
  position: absolute;
}

.edu {
    border: solid blueviolet;
}
    
</style>