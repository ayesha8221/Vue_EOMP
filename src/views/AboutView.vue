<template>
  <section id="About">
    <div class="container">
      <div class="row">
        <div class="col-md-4 p-5">
          <img
            class="img-fluid"
            src="https://i.postimg.cc/fRqjT8mQ/IMG-1353.jpg"
            alt="Ayesha Galant"
          />
        </div>
        <div class="col-md-8 p-5">
          <h1 class="about-heading">About</h1>
          <hr>
          <p>
Dedicated web developer with a strong passion for continuous learning and staying up-to-date with the latest industry trends. 
Proficient in a wide range of in-demand skills, including HTML5, CSS3, Bootstrap, JavaScript, Vue.js, MySQL and Nodejs. I am expanding expertise in MySQL and Node.
<p>I am committed to creating responsive and accessible web applications that showcase creativity and innovation.
 Adept at leveraging various technologies to build dynamic and engaging user experiences. Seeking opportunities to contribute to challenging projects and build a diverse portfolio of impressive web applications.</p>
          </p>
        </div>
          <h2 class="skills-heading p-3">Technical Skills</h2>
          <div class="container d-inline-block justify-content center">
            <div class="row p-5">
               <div class="col-md-2 p-1">
                  <img class="vuejs" src="https://i.postimg.cc/KcfsXSQ0/vue-js-icon.png" alt="VueJs">
                </div>
                     <div class="col-md-2 p-1">
                  <img src="https://i.postimg.cc/8cF9C7nT/174854.png" alt="HTML5"/>
                     </div>
              <div class="col-md-2 p-1">
                  <img src="https://i.postimg.cc/KYcRHTYq/5968672.png" alt="Bootstrap">
              </div>
              <div class="col-md-2 p-1">
                  <img src="https://i.postimg.cc/65pgq1gM/732190.png" alt="CSS3">
                </div>
                   <div class="col-md-2 p-1">
                    <img src="https://i.postimg.cc/Zq8VVrX9/721671.png" alt="Javascript">
              </div>
                   <!-- <div class="col-md-2 p-1">
                    <img src="https://i.postimg.cc/XJZ0zN6B/152760.png" alt="Java">
              </div> -->
                      </div>
              </div>
            </div>
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

#About {
  background-color: rgb(41, 41, 41) !important ;
  color: white;
  min-height: 100vh;
}

.container {
  padding-top: 60px;
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
.skills-heading {
  color: blueviolet;
  font-family: 'Varela Round', sans-serif;
  font-size: 2rem;
  padding-top: 5rem;
}
.fa-brands,
.fab {
  font-family: "Font Awesome 6 Brands";
  font-weight: 400;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pin {
  font-size: 10px;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  color: cornflowerblue;
  text-decoration: none;
}
.img-fluid {
  /* padding-bottom: 5rem; */
  border: solid blueviolet;
}

.vuejs {
  height: 100px;
}

</style>