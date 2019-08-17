<template>
    <div class="page" id="registro">
        <navbar-nav></navbar-nav>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="main-title">
                        Registro de usuario
                    </h1>
                    <b-button block variant="info" class="mb-3" to="/registro-datos">REGISTRARME CON FACEBOOK</b-button>
                    <b-button block variant="primary" to="/registro-datos">REGISTRARME CON MIS DATOS</b-button>
                    <b-button block variant="link" to="/ingreso">YA SOY SOCIO</b-button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavbarNav from "../components/NavbarNav";

    export default {
        name: 'RegistroHome',
        components: {NavbarNav}
    }
</script>

<style scoped>

</style>
