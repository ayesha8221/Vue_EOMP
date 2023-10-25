<template>
  <section id="About">
    <div class="container">
      <div class="row">
        <div class="col-md-4 p-5">
          <img
            class="img-fluid"
            src="https://i.postimg.cc/J73RY3xR/IMG-1353-1.jpg"
            alt="Ayesha Galant"
          />
        </div>
        <div class="col-md-8 p-5">
          <h1 class="about-heading">About Me</h1>
          <hr>
          <p>Hello, I'm Ayesha Galant, a passionate and dedicated web developer based in Lansdowne, Southern Suburbs. My journey into the world of technology began with a burning desire to break into the tech field. Since then, I've embarked on a comprehensive web development program, equipping myself with a wide range of skills that include HTML5, CSS3, Bootstrap, JavaScript, Vue.js, MySQL, and Node.js.</p>
          <br>
          <p>My enthusiasm for web development is driven by the ever-evolving nature of the industry, and I've taken the initiative to further my knowledge by venturing into the realm of AWS cloud computing. I believe that in this rapidly changing digital landscape, continuous learning and adaptation are key to success.</p>
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
                   <div class="col-md-2 p-1">
                    <img class="mysql" src="https://i.postimg.cc/cC4y8qqH/img-icons8.png" alt="MySQL">
              </div>
                   <div class="col-md-2 p-1">
                    <img class="mysql" src="https://i.postimg.cc/MHKHZrd0/img-icons8.png" alt="Nodejs">
              </div>
                   <div class="col-md-2 p-1">
                    <img class="figma" src="https://i.postimg.cc/KvbjYjsc/8096528.png" alt="Figma">
              </div>
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
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

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
  /* border: solid blueviolet; */
  border-radius: 20px;
}

.col-md-2.p-1 {
    transition: transform 0.3s; /* Add a smooth transition for a smoother zoom effect */
}

.col-md-2.p-1:hover {
    transform: scale(1.2); /* Increase the scale factor to zoom in (1.2 is 20% larger) */
}

.vuejs {
  height: 100px;
}

.mysql {
  height: 150px;
}

.figma {
  height: 120px;
}

</style>