<template>
  <section id="About">
    <div class="container">
      <div class="row">
        <div class="col-md-4 p-5 slide-from-left">
          <img
            class="img-fluid"
            src="https://i.postimg.cc/D07TyW9F/C12-Ayesha-Galant-Class1-1-removebg-preview.png"
            alt="Ayesha Galant"
          />
        </div>
        <div class="col-md-8 p-5 slide-from-right">
          <h1 class="about-heading">About Me</h1>
          <hr>
          <p class="text-start">I am  <strong class="strong">Ayesha Galant</strong>,  a passionate and dedicated web developer based in Lansdowne, Southern Suburbs. My journey into the world of technology began with a burning desire to break into the tech field. Since then, I've embarked on a comprehensive web development program, equipping myself with a wide range of skills that include HTML5, CSS3, Bootstrap, JavaScript, Vue.js, MySQL, and Node.js.</p>
          <br>
          <p class="text-start"> My enthusiasm for web development is driven by the ever-evolving nature of the industry, and I've taken the initiative to further my knowledge by venturing into the realm of AWS cloud computing. I believe that in this rapidly changing digital landscape, continuous learning and adaptation are key to success.</p>
          <div class="moreInfo">
            <span>
              Full Name: Ayesha Galant
            </span>
            <br>
            <span>
              Date of Birth: 28 December 1999
            </span>
            <br>
            <span>
              Gender: Female
            </span>
          </div>
        </div>

          <h2 class="skills-heading">Technical Skills</h2>
          <div class="container d-inline-block justify-content-center">
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
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

::-webkit-scrollbar {
  display: none;
}

#About {
  background-color: #E7A552 !important ;
  color: black;
  min-height: 100vh;
}


.about-heading {
  color: black;
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
.skills-heading {
  color: black;
  font-family: 'Varela Round', sans-serif;
  font-size: 3.5rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* padding-top: 3rem; */
}

.text-start {
  font-size: 16px;
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
  font-size: 12px;
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
  padding-top: 40px;
  max-height: 100%;
}

.strong {
  font-weight: 750;
  font-size: 18px;
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

.copyright {
    color: #000;
text-align: center;
/* font-family: Inter; */
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
.slide-from-left {
  animation: slideInFromLeft 2s ease both;
}

  @keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.slide-from-right {
  animation: slideInFromRight 2s ease both;
  animation-delay: 1s;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.skills-heading {
  animation: fadeIn 1s ease both;
  animation-delay: 2s; /* Adjust the delay time as needed */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .img-fluid {
  margin-top: 60px !important;
  width: 400px !important;
}
 .about-heading {
  font-size: 5rem;
}
 .text-start, .moreInfo {
  font-size: 12px;
 }

 .col-md-4.p-5.slide-from-left {
  padding: 1rem !important;
 }

 .skills-heading {
  font-size: 3rem;
 }

 .row.p-5 {
  padding: 1rem;
  display:block;
 }

 .copyright {
  font-size: 15px;
 }
 
}
 
@media screen and (max-width: 768px) {
  .img-fluid {
  margin-top: 40px !important;
  width: 200px !important;
}

.about-heading {
  font-size: 5rem;
  padding-top: 10px !important;
}

.row.p-5 {
  padding: 10px !important;
  display:block;
 }
}

</style>