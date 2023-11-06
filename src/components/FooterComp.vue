<template>
    <div class="footer">
        <div class="social">
            <div class="icon">
                <a href="https://github.com/ayesha8221" target="_blank">
                <img src="https://i.postimg.cc/QtL1FsN0/img-icons8.png" alt="github">
            </a>
            </div>
            <div class="icon">
                <a href="www.linkedin.com/in/ayesha-galant-329780284" target="_blank">
                <img src="https://i.postimg.cc/MGnmcd7K/img-icons8.png" alt="linkedin">
            </a>
            </div>
            <div class="icon">
                <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgmail%2Bloin%26oq%3Dgmail%2Bloin%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOTIPCAEQABgKGIMBGLEDGIAEMg8IAhAAGAoYgwEYsQMYgAQyCQgDEAAYChiABDIPCAQQABgKGIMBGLEDGIAEMgwIBRAAGAoYsQMYgAQyDwgGEAAYChiDARixAxiABDIPCAcQABgKGIMBGLEDGIAEMgkICBAAGAoYgAQyDwgJEAAYChiDARixAxiABNIBCDc5MzRqMGo0qAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAlAAQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1324816552%3A1697792959483621&theme=glif" target="_blank">
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