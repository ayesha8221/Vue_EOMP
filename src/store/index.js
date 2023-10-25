import { createStore } from 'vuex'

export default createStore({
  state: {
    // testimonials
    testimonials: null,
    testimonial: null,
    // projects
    projects: null,
    project: null,
    //education and experience
    education: null,
    education: null,
    //categories
    // categories: []
  },

  mutations: {
    //Testimonials
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },

    // Projects
    setProjects: (state, projects) => {
      state.projects = projects;
    },

    //Education
    setEducation: (state, education) => {
      state.education = education;
    },

  },
  actions: {
    // Testimonials
    async getTestimonials(context){
      try {
        let { testimonials } = await (
          await fetch("https://ayesha8221.github.io/data/db.json")
        ).json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    },
    // Projects
    async getProjects(context){
      try {
        let { projects } = await (
          await fetch("https://ayesha8221.github.io/data/db.json")
        ).json();
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    },

    // async getProjects({ commit }) {
    //   // Fetch your projects data here
  
    //   // Extract unique categories from projects
    //   const categories = [...new Set(projects.map(project => project.category))];
      
    //   commit('setProjects', projects);
    //   commit('setCategories', categories);
    // },

    // Education&Experience
    async getEducation(context){
      try {
        let { education } = await (
          await fetch("https://ayesha8221.github.io/data/db.json")
        ).json();
        if (education) {
          context.commit("setEducation", education);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    },
  },
})
