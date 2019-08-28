<template>
    <div class="page" id="credencial">
        <NavbarMenu></NavbarMenu>

        <div class="container">
            <div class="row justify-content-center mb-3">
                <div class="col-8" v-for="u in user">
                    <b-img thumbnail fluid :src="u.picture" alt="Image 1"></b-img>
                </div>
            </div>

        </div>
        <b-list-group v-for="u in user">
            <b-list-group-item>{{u.name}} {{u.surname}}</b-list-group-item>
            <b-list-group-item>#12345567 <br>
                <small>NÚMERO DE SOCIO</small>
            </b-list-group-item>
            <b-list-group-item>{{u.dni}} <br>
                <small>DNI</small>
            </b-list-group-item>
        </b-list-group>
        <div class="text-center">
            <b-img thumbnail fluid src="../assets/img/qr.png" alt="Image 1" class="w-75 mx-auto mt-3"></b-img>
        </div>
    </div>
</template>

<script>
    import NavbarMenu from "../components/NavbarMenu";

    export default {
        name: 'Credencial',
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
