<template>
    <section id="About">
    <div class="container">
      <div class="row">
        <div class="col-md-4 p-5">
            <p>
                <strong>Phone:</strong>
                098 765 4321<br>

<strong>E-Mail:</strong> ayesha.galant@gmail.com<br>

<strong>LinkedIn:</strong> Ayesha Galant<br>

<strong>Address:</strong>
Eastgate Bird Park <br>
Unit 15 <br>
Rosebank<br>

<p>Looking forward to chatting to you👋</p>
            </p>
    </div>
        
        <div class="col-md-8 p-5">
          <h1 class="about-heading">Contact Me</h1>
          <FormComp/>
        </div>
        </div>
        </div>
    </section>
    
</template>
<script>

import FormComp from '@/components/FormComp.vue';

export default {
    components: { FormComp }
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
  font-size: 5rem;
  margin-top: 1rem;
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

.col-md-4.p-5.p {
  padding-top: 150px;

}


@media screen {
    
}
    
</style>