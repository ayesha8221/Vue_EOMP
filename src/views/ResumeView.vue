<template>
    <section id="About">
        <div class="container" >
            <h1 class="about-heading">Resume</h1>
        </div>
        <div>
          <button><a href="https://docs.google.com/document/d/1r5Fkc8GVzWnQ6nP7JXzhz4d2n9uXEZDH9QlRFmGxoDw/edit?usp=sharing" download target="_blank">
   Download Resume</a></button>
        </div>
        <div class="container">
                <h2 class="skills-heading p-3">Education & Experience</h2>
        </div>
        <!-- <div v-if="education" :key="education.id" :education="education"> -->
        <!-- <ResumeComp v-for="education of education" :key="education.id" :education="education"/> -->
        <div>
                    <div class="col-xs-6">
    <div class="row">
    	<ul class="timeline-both-side">
        	<li>
            	<div class="border-line"></div>
                <div class="timeline-description">
                  <p>
                    <img class="haafith" src="https://i.postimg.cc/CxgtbDFP/download.png" alt="LC Studio">
                    <p>
                      <strong>
                        LC Studio - Oct 2023
                      </strong>
                      <p> Intern Web Developer </p>
                    </p>
                  </p>
     
                </div>
            </li>
            <li class="opposite-side">
            	<div class="border-line"></div>
                <div class="timeline-description">
                  <p>
                      <img class="right" src="https://i.postimg.cc/vm30rsCN/download.png" alt="life choices academy">
                      <p>
                        <strong> Life Choices Academy - (Apr - Sept 2023)</strong>
                      </p>
                      <p>
                        HTML, CSS, Bootstrap, Javascript, VueJs, MySQL, NodeJs
                      </p>
                    </p>
                </div>
            </li>
            <li>
            	<div class="border-line"></div>
                <div class="timeline-description">
                    <p><img class="haafith" src="https://i.postimg.cc/fTL4PMcD/Al-Azhar-HS-Logo-2017-removebg-preview.png" alt="Al Azhar High School">
                    <p>
                    <strong> Al Azhar High School - Matriculated 2021</strong>
                      </p> 
                      <p>
                        Life Sciences
                        <br>
                        History
                        <br>
                        Mathematics
                        <br>
                        Business Studies
                        <br>
                      </p>
                      </p>
                </div>
            </li>
            <li class="opposite-side">
            	<div class="border-line"></div>
                <div class="timeline-description">
                    <p>
                      <strong>Institute of Islamic Studies - (Sept 2018 - 2020)</strong>
                    </p>
                    <p>
                      Student Teacher
                    </p>
                </div>
            </li>
            <li>
            	<div class="border-line"></div>
                <div class="timeline-description">
                    <p> 
                      <img  class="haafith" src="https://i.postimg.cc/3J4dXF0j/IMG-3192-removebg-preview-removebg-preview-1.png" alt="nisaa al quran">
                      <p> <strong> Nisaa Al Quran - ( 2013 - 2018 )</strong> </p> 
                      <p>
                        Memorisation of the Holy Quran
                        <br>
                        Islamic Studies
                      </p>
                      </p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</div>
    <!-- </div> -->
    <!-- <div v-else>Loading...</div> -->
    </section>
</template>
<script>

// import ResumeComp from '@/components/ResumeComp.vue'

export default {
  // props: ["education"],
    // computed: {
    //     education() {
    //         return this.$store.state.education
    //     }
    // },

    // mounted() {
    //     this.$store.dispatch("getEducation")
    // },

    // components: {
    //     ResumeComp
    // }
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

.haafith {
  height: 120px;
  float: left;
}

.right {
  height: 120px;
  float: right;
}

button {
  color: rgb(255, 255, 255);
  background-color: blueviolet;
  border: solid blueviolet;
  /* margin-right: 100px; */
  height: 40px;
  /* width: 90px; */
  border-radius: 20px;
}

a {
  text-decoration: none;
  color: white;
}

/* timeline */

/*= timeline css for data in both side =*/
.timeline-both-side{float: left; width: 96%; margin: 20px 2% 50px; position: relative; box-sizing: border-box;}
.timeline-both-side:before{background-color: blueviolet; bottom: 0; content: " "; left: 50%; position: absolute; top: 0; width: 1px;}
.timeline-both-side:after{border-radius: 50%; bottom: -22px; content: ""; height: 18px; left: 50%; margin-left: -11px; position: absolute; width: 18px; border: 2px solid blueviolet;}
.timeline-both-side li {position: relative; float: left; width: 100%;}
.timeline-both-side li .border-line{background-color:blueviolet; font-size: 1.4em; height: 1px; left: 50%; margin-left: -8%; position: absolute; text-align: center; top: 50%; width: 8%; z-index: 100;}
.timeline-both-side li.opposite-side .border-line{left: auto; right: 50%; margin-left: 0; margin-right: -8%;}
.timeline-both-side li .border-line:before {background-color: blueviolet; content: ""; height: 7px; position: absolute; right: -4px; top: -3px; width: 7px;}
.timeline-both-side li.opposite-side .border-line:before{left: -4px; right: auto;}
.timeline-both-side li .timeline-description{border-radius: 20px; background-color: rgb(41, 41, 41); border: 1px solid blueviolet; float: left; font-size: 13px; padding: 10px; position: relative; width: 42%;}
.timeline-both-side li.opposite-side .timeline-description{float: right;}
/*= timeline css for data in both side end =*/
    
li {
  list-style: none;
}    
</style>