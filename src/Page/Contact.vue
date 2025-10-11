<template>
    <header>
        <NavBar />
    </header>
    <main>
        <Logo/>
        <ContactComponent/>
    </main>
    <footer>
        <Footer />
    </footer>
</template>
<script>
import ContactComponent from '../components/ContactComponent.vue';

export default {
    name: 'Contact',
    components: {
        ContactComponent
    },
};

</script>