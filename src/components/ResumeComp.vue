<template>
                <ul>
                    <li>
                        {{ education.type }}
              <li><strong>{{ education.year }}</strong></li>
              <li>{{ education.school }}</li>
              <li>{{ education.work }}</li>
                    </li>
                </ul>
</template>
<script>
export default {
    props: ["education"]
}
</script>
<style>
    
</style>