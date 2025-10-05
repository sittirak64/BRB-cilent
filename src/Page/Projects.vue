<template>
    <head>
        <NavBar />
    </head>
    <main>
        <ProjectComponent/>
    </main>
</template>
<script>
import ProjectComponent from '../components/ProjectComponent.vue';


export default {
    name: 'Project',
    components: {
        ProjectComponent,
    },
};
</script>

<style scoped></style>