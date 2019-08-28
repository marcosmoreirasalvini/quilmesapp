<template>
    <div class="message" id="success">
        <div class="container">
            <NavbarNav></NavbarNav>
            <div class="icon my-4">
                <i class="far fa-check-circle d-block"></i>
            </div>
            <h1 class="text-center">¡Ya sos socio!</h1>
            <b-button block to="/credencial" class="mt-4" variant="primary">
                VER MI CREDENCIAL
            </b-button>
            <b-button block to="/actividades" class="mt-4" variant="link">
                VER ACTIVIDADES
            </b-button>
        </div>
    </div>
</template>

<script>
    import NavbarNav from '@/components/NavbarNav.vue';

    export default {
        name: 'Success',
        components: {NavbarNav},
    }
</script>

<style scoped>

</style>
