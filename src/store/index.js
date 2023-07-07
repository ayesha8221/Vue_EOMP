import { createStore } from 'vuex'

export default createStore({
  state: {
    // testimonials
    testimonials: null,
    testimonial: null,
    // projects
    projects: null,
    project: null
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

  },
  actions: {
    // Testimonials
    async getTestimonials(context){
      try {
        let { testimonials } = await (
          await fetch("https://ayesha8221.github.io/ayesha8821.github.io/db.json")
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
          await fetch("https://ayesha8221.github.io/ayesha8821.github.io/db.json")
        ).json();
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          alert("ERROR");
        }
      } catch (e) {
        console.error(error);
      }
    }
  },
})
