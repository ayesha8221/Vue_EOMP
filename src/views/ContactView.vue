<template>
    <section id="About">
    <div class="container">

          <h1 class="about-heading">Contact Me</h1>
          <div class="container align-items-center">
            <div class="row justify-content-center align-items-center">
    <div class="col-3">
      <img class="icons" src="https://i.postimg.cc/C179cvdn/542689.png" alt="email">
    </div>
    <div class="col-6 ">
      <p class="info" > ayesha.glnt012@gmail.com</p>
    </div>
  </div>
            <div class="row justify-content-center align-items-center">
    <div class="col-3">
      <img class="icons" src="https://i.postimg.cc/SKvgRwXr/13936.png" alt="call">
    </div>
    <div class="col-6 ">
      <p class="info"> 063 730 8806 </p>
    </div>
  </div>
            <div class="row justify-content-center align-items-center">
    <div class="col-3">
      <img class="icons" src="https://i.postimg.cc/R0yT4K8p/3177361.png" alt="location">
    </div>
    <div class="col-6">
      <p class="info"> Lansdowne, Cape Town, Southern Suburbs</p>
    </div>
  </div>
            <div class="row justify-content-center">
    <div class="col-3">
      <img class="icons" src="https://i.postimg.cc/HxbbmKbj/7771984.png" alt="form">
    </div>
    <div class="col-6">
      <form action="https://formspree.io/f/mknlwave" method="POST">
                        <div class="mb-3">
                           
                            <input type="text" class="form-control border-2" name="Name" placeholder="Full Name" required />
                        </div>
                        
                        <div class="mb-3">
                           
                            <input type="email" class="form-control border-2" name="Email" placeholder="Email" required />
                        </div>
                        
                        <div class="mb-3">

                            <textarea class="form-control border-2" name="Message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        
                        <button type="submit" class="btn ">Submit</button>
                    </form>
      <!-- <FormComp class="info"/> -->
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

// import FormComp from '@/components/FormComp.vue';

export default {
    // components: { FormComp }
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}

#About {
  background-color:#AD6B5D !important ;
  color: white;
  min-height: 100vh;
}

.container {
  padding-top: 60px;
}

.about-heading {
  color: #E7A552;
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

.copyright {
    color: #000;
text-align: center;
/* font-family: Inter; */
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }

.col-md-4.p-5.p {
  padding-top: 150px;

}

.icons {
  max-height: 65px;
  float: right;
  
  /* padding-bottom: 20px; */
}

.info {
  float: left; color:#000; padding-left: 10px; font-weight: 800; font-size: 18px;
}

button {
  color: #E7A552;
/* text-align: center; */
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
/* font-family: Inter; */
font-size: 25px;
/* font-style: italic; */
font-weight: 600;
line-height: normal;
border: solid 1px black;
border-radius: 0 !important;
float: right !important;
margin-bottom: 50px;
}

textarea, input {
    background-color: #AD6B5D !important;
    border: solid 1px black !important;
    border-radius: 20px !important;
    width: 100%;
    color:#000 !important;
}

.row.justify-content-center.align-items-center {
  margin-bottom: 20px;
}
    
</style>