<template>
    <div class="footer">
        <div class="social">
            <div class="icon">
                <a href="https://github.com/ayesha8221" target="_blank">
                <img src="https://i.postimg.cc/QtL1FsN0/img-icons8.png" alt="github">
            </a>
            </div>
            <div class="icon">
                <a href="https://www.linkedin.com/in/ayesha-galant-329780284/" target="_blank">
                <img src="https://i.postimg.cc/MGnmcd7K/img-icons8.png" alt="linkedin">
            </a>
            </div>
            <div class="icon">
                <a href="mailto:ayesha.glnt012@gmail.com" target="_blank">
                <img src="https://i.postimg.cc/pL4nSxjR/img-icons8.png" alt="gmail">
            </a>
            </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.bg-body-tertiary {
  background-color: blueviolet !important;
}

.navbar.fixed-bottom.bg-body-tertiary {
  height: 40px;
  opacity: 0.5;
}

img{
    max-width: 52px;
}
.social{
  position: fixed; /* or 'absolute' if preferred */
    top: 50%; /* Adjust as needed to position it vertically */
    right: 0; /* Position it on the right side */
    display: flex;
    flex-direction: column; /* Stack social icons vertically */
    align-items: center; /* Center the icons horizontally */
    /* background-color: blueviolet; */
    /* transform: rotate(-90deg); */
    transform-origin: bottom right; /* Set rotation origin to the bottom right corner */
    padding: 10px;
  }
  .social a :hover{
    transition: 0.3s;
    padding-inline: 5px;
  }
    
</style>