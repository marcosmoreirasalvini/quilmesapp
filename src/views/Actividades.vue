<template>
    <div class="page" id="credencial">
        <NavbarMenu></NavbarMenu>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- TITULO -->
                    <h1 class="main-title w-lead">Actividades deportivas</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavbarMenu from "../components/NavbarMenu";

    export default {
        name: 'Actividades',
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
                        picture: localuser.picture
                    },
                ],
            };
        }
    }
</script>

<style scoped>

</style>
