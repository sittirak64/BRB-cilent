<template>
    <header>
        <NavBar/>
    </header>
    <main>
        <Logo/>
        <ProjectComponent/>
    </main>
    <footer>
        <Footer/>
    </footer>
</template>
<script>
import Footer from '../components/Footer.vue';
import ProjectComponent from '../components/ProjectComponent.vue';


export default {
    name: 'Project',
    components: {
        ProjectComponent,
    },
};
</script>

<style scoped></style>