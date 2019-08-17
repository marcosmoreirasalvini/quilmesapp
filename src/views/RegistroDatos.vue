<template>
    <div class="page" id="registro-datos">
        <navbar-nav></navbar-nav>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- TITULO -->
                    <h1 class="main-title">Asociarme</h1>
                    <b-form @submit="onSubmit">
                        <b-form-group id="input-group-name" label="Nombre" label-for="name">
                            <b-form-input
                                    id="name"
                                    v-model="form.name"
                                    required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-surname" label="Apellido" label-for="surname">
                            <b-form-input
                                    id="surname"
                                    v-model="form.surname"
                                    required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-dni" label="Dni" label-for="dni">
                            <b-form-input
                                    type="tel"
                                    id="dni"
                                    v-model="form.dni"
                                    required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-date" label="Fecha de nacimiento" label-for="date">
                            <b-form-input
                                    type="date"
                                    id="date"
                                    v-model="form.date"
                                    required
                            ></b-form-input>
                        </b-form-group>


                        <b-form-group
                                label="Email"
                                label-for="email"
                                description=""
                        >
                            <b-form-input
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-pass" label="Contraseña" label-for="password">
                            <b-form-input
                                    type="password"
                                    id="password"
                                    v-model="form.password"
                                    required
                            ></b-form-input>
                        </b-form-group>

                        <b-button block type="submit" variant="primary">SIGUENTE</b-button>
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavbarNav from "../components/NavbarNav";

    export default {
        name: 'RegistroDatos',
        components: {NavbarNav},
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    surname: '',
                    dni: '',
                    date: '',
                    password: '',
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                localStorage.setItem('user', JSON.stringify(this.form));
                this.$router.push('/registro');
            },
        }

    }
</script>

<style scoped>

</style>
