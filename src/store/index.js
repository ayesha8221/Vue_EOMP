import { createStore } from 'vuex'

export default createStore({
  state: {
    // projects
    projects: null,
    project: null,
  },

  mutations: {

    // Projects
    setProjects: (state, projects) => {
      state.projects = projects;
    },

  },
  actions: {
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
        console.error(e);
      }
    },
  },
})
