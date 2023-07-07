<template>
    <div v-if="education" class="flex-container row row row-col-5">
        <ResumeComp v-for="project of education" :key="project.id" :project="project"/>
    </div>
    <div v-else>Loading...</div>
</template>
<script>

import ResumeComp from '@/components/ModalComp.vue';

export default {
    computed: {
        education() {
            return this.$store.state.education
        }
    },

    mounted() {
        this.$store.dispatch("getEducation")
    },
    components: {
        ResumeComp
    }
}

</script>
<style>
::-webkit-scrollbar {
  display: none;
}
    
</style>