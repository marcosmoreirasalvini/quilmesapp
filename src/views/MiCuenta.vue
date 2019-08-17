<template>
    <div class="page" id="micuenta">
        <navbar-menu></navbar-menu>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="main-title" v-for="u in user">
                        ¡Hola {{u.name}}!
                    </h1>
                    <h4>Notificaciones</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavbarMenu from "../components/NavbarMenu";
    export default {
        name: 'MiCuenta',
        components: {NavbarMenu},
        data() {
            const localuser = JSON.parse(localStorage.user)
            return {
                user: [
                    {
                        name: localuser.name,
                        surname: localuser.surname,
                        dni: localuser.dni,
                        date: localuser.date,
                        email: localuser.email,
                    },
                ],
            };
        }
    }
</script>

<style scoped>

</style>
