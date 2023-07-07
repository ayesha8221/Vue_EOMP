<template>
    <section id="About" data-aos="fade-up">
        <div class="container" >
            <h1 class="about-heading">Resume</h1>
        </div>
        <div class="container">
            <div>
                <h2 class="skills-heading p-3">Education & Experience</h2>
                <ul>
                    <li>
                        High School (2019-2021)
              <li><strong>Al Azhar High School</strong></li>
                    </li>
                    <br>
                    <li>
                        (2023- current)
              <li><strong>Life Choices Coding Academy</strong></li>
                    </li>
                    <br>
                    <li>
                        Institute of Islamic Studies
          <li><strong>Student Teacher (2018-2020)</strong></li>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>

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
    
</style>