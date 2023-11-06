<template>
    <div>
        <div class="container">
                <div class="col-sm-9 p-3">
                    <div class="card m-2 p-3 contact">
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
                </div>
                  </div>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

.card.m-2.p-3.contact {
    background-color: #AD6B5D;
    border: none;
}

textarea, input {
    background-color: #AD6B5D !important;
    border: solid 1px black !important;
    border-radius: 20px !important;
    width: 100%;
}




    
</style>