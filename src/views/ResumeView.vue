<template>
    <section id="About">
        <div class="container" >
            <h1 class="about-heading">Resume</h1>
        </div>
        <div>
          <button><a href="https://docs.google.com/document/d/1r5Fkc8GVzWnQ6nP7JXzhz4d2n9uXEZDH9QlRFmGxoDw/edit?usp=sharing" download target="_blank">
   <img class="download" src="https://i.postimg.cc/DZq8G6bJ/2810390.png" alt="download"></a></button>
        </div>
        <div class="container">
                <h2 class="skills-heading p-3">Education & Experience</h2>
        </div>
        <!-- <div v-if="education" :key="education.id" :education="education"> -->
        <!-- <ResumeComp v-for="education of education" :key="education.id" :education="education"/> -->
        <div>
                    <div class="col-xs-6">
    <div class="row g-0">
    	<ul class="timeline-both-side">
        	<li>
            	<div class="border-line"></div>
                <div class="timeline-description">
                  <p>
                    <img class="haafith" src="https://i.postimg.cc/Dy046mN8/images-removebg-preview-1.png" alt="LC Studio">
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
                      <img class="right" src="https://i.postimg.cc/yxPhZ5Wt/download-removebg-preview.png" alt="life choices academy">
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
                        Life Sciences,
                        
                        History,
                        
                        Mathematics,
                        Business Studies
                        
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
<span class="softSkills">
        Soft Skills
      </span>
      <div class="container-fluid align-items-center justify-content-center">
  <div class="row align-items-center justify-content-center">
    <div class="col d-flex justify-content-center">
      <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">Leadership</h5>
    <p class="card-text"><img src="https://i.postimg.cc/K8407qrH/9942457.png" alt="leadership"></p>
  
  </div>
</div>
    </div>
    <div class="col d-flex justify-content-center">
      <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">Communication</h5>
    <p class="card-text"><img src="https://i.postimg.cc/XYZgBZnM/9592644.png" alt="communication"></p>
    
  </div>
</div>
    </div>
    <div class="col d-flex justify-content-center">
      <div class="card w-75">
  <div class="card-body">
    <h5 class="card-title">Problem Solving</h5>
    <p class="card-text"><img src="https://i.postimg.cc/BZVLLmb6/2618461.png" alt="problemSolving"></p>
    
  </div>
</div>
    </div>
  </div>
</div>
<div>
      <span class="copyright"> Designed by Ayesha Galant © 2023</span>
    </div>
    </section>
</template>
<script>

export default {

}
</script>
<style scoped>

::-webkit-scrollbar {
  display: none;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Varela+Round&display=swap');
#About {
  background-color:#D6A19C !important ;
  color: white;
  min-height: 100vh;
}

.container {
  padding-top: 60px;
  /* border: blueviolet solid; */
}

.about-heading {
  color: #7C4D43;
  font-family: 'Varela Round', sans-serif;
  font-weight: 3rem;
  font-size: 7rem;
  margin-top: 3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
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

.skills-heading.p-3 {
  color: #7C4D43;
  font-family: 'Varela Round', sans-serif;
  font-size: 3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.softSkills {
  color: #7C4D43;
  font-family: 'Varela Round', sans-serif;
  font-size: 3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.card-body {
  background-color:  #c98a81 !important;
  border: solid 1px black;
  border-radius: 20px;
}

.card.w-75 {
  background-color: #D6A19C;
  border: none;
}

.card-title {
  color: #7C4D43;
  font-size: 30px;
  text-shadow: 0px 4px 4px rgba(102, 65, 65, 0.25), 0px 4px 4px rgba(144, 91, 91, 0.25), 0px 4px 4px rgba(72, 59, 59, 0.25);
}

.container-fluid {
  padding-bottom: 20px;
  padding-top: 50px;
}
.edu {
    border: solid blueviolet;
}

.copyright {
    color: #000;
text-align: center;
/* font-family: Inter; */
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
button, .download {
  border: none;
  background-color: transparent;
  height: 40px;
}

.haafith {
  height: 120px;
  float: left;
}

.right {
  height: 90px;
  float: right;
}


p{
  color: #000;;
  font-size: 16px;
}

/* timeline */

/*= timeline css for data in both side =*/

div.row {
  padding-bottom: 50px;
}
.timeline-both-side{
  float: left; width: 96%; 
  margin: 20px 2% 50px; 
  position: relative; 
  box-sizing: border-box;
}
.timeline-both-side:before{
  background-color: #7C4D43; 
  bottom: 0; 
  content: " "; 
  left: 50%; 
  position: absolute; 
  top: 0; 
  width: 1px;
}
.timeline-both-side:after{
  border-radius: 50%; 
  bottom: -22px; 
  content: ""; 
  height: 18px; 
  left: 50%; 
  margin-left: -11px; 
  position: absolute; 
  width: 18px; 
  border: 2px solid#7C4D43;
}
.timeline-both-side li {position: relative; float: left; width: 100%;}
.timeline-both-side li .border-line{background-color:#7C4D43; font-size: 1.4em; height: 1px; left: 50%; margin-left: -8%; position: absolute; text-align: center; top: 50%; width: 8%; z-index: 100;}
.timeline-both-side li.opposite-side .border-line{left: auto; right: 50%; margin-left: 0; margin-right: -8%;}
.timeline-both-side li .border-line:before {background-color: #7C4D43; content: ""; height: 7px; position: absolute; right: -4px; top: -3px; width: 7px;}
.timeline-both-side li.opposite-side .border-line:before{left: -4px; right: auto;}
.timeline-both-side li .timeline-description{border-radius: 20px; background-color:  #c98a81; border: 1px solid #7C4D43; float: left; font-size: 13px; padding: 10px; position: relative; width: 42%;}
.timeline-both-side li.opposite-side .timeline-description{float: right;}
/*= timeline css for data in both side end =*/
    
li {
  list-style: none;
}    
</style>