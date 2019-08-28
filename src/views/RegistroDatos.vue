<template>
    <div class="page" id="registro-datos">
        <navbar-nav></navbar-nav>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- TITULO -->
                    <h1 class="main-title">Asociarme</h1>
                    <form id="addUser" method="post" name="addCard">
                        <div class="form-group">
                            <label for="name">Nombre completo</label>
                            <input
                                    type="text"
                                    id="name"
                                    class="form-control"
                                    v-model="form.name"
                                    :class="{ 'is-invalid': submitted && errors.has('nombre') }"
                                    v-validate="'required'"
                                    data-vv-name="nombre"
                            >
                            <div
                                    v-if="submitted && errors.has('nombre')"
                                    class="invalid-feedback"
                            >{{ errors.first('nombre') }}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="surname">Apellido</label>
                            <input
                                    type="text"
                                    id="surname"
                                    class="form-control"
                                    v-model="form.surname"
                                    :class="{ 'is-invalid': submitted && errors.has('apellido') }"
                                    v-validate="'required'"
                                    data-vv-name="apellido"
                            >
                            <div
                                    v-if="submitted && errors.has('apellido')"
                                    class="invalid-feedback"
                            >{{ errors.first('apellido') }}
                            </div>
                        </div>

                        <b-form-group id="input-group-dni" label="Dni" label-for="dni">
                            <b-form-input
                                    type="tel"
                                    id="dni"
                                    v-model="form.dni"
                                    v-validate="'required'"
                                    data-vv-name="dni"
                                    :class="{ 'is-invalid': submitted && errors.has('dni') }"
                            >
                            </b-form-input>
                            <b-form-invalid-feedback id="input-live-feedback" v-if="submitted && errors.has('dni')"
                            >
                                {{ errors.first('dni') }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group id="input-group-date" label="Fecha de nacimiento" label-for="date">
                            <b-form-input
                                    type="date"
                                    id="date"
                                    v-model="form.date"
                                    v-validate="'required'"
                                    data-vv-name="fecha de nacimiento"
                                    :class="{ 'is-invalid': submitted && errors.has('fecha de nacimiento') }"
                            >
                            </b-form-input>
                            <b-form-invalid-feedback id="input-live-feedback" v-if="submitted && errors.has('fecha de nacimiento')"
                            >
                                {{ errors.first('fecha de nacimiento') }}
                            </b-form-invalid-feedback>
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
                                    v-validate="'email|required'"
                                    data-vv-name="email"
                                    :class="{ 'is-invalid': submitted && errors.has('email') }"
                            >
                            </b-form-input>
                            <b-form-invalid-feedback id="input-live-feedback" v-if="submitted && errors.has('email')"
                            >
                                {{ errors.first('email') }}
                            </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group id="input-group-pass" label="Contraseña" label-for="password">
                            <b-form-input
                                    type="password"
                                    id="password"
                                    v-model="form.password"
                                    v-validate="'required'"
                                    data-vv-name="contraseña"
                                    :class="{ 'is-invalid': submitted && errors.has('contraseña') }"
                            >
                            </b-form-input>
                            <b-form-invalid-feedback id="input-live-feedback" v-if="submitted && errors.has('contraseña')"
                            >
                                {{ errors.first('contraseña') }}
                            </b-form-invalid-feedback>
                        </b-form-group>

                        <b-button block variant="primary" @click.stop.prevent="handleSubmit()">SIGUIENTE</b-button>
                    </form>
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
            //const localuser = JSON.parse(localStorage.user)
            return {
                form: {
                    email: '',
                    name: '',
                    surname: '',
                    dni: '',
                    date: '',
                    password: '',
                },
                show: true,
                submitted: false
            }
        },
        methods: {
            handleSubmit() {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.loading = true;
                        localStorage.user = JSON.stringify({
                            name: this.form.name,
                            surname: this.form.surname,
                            dni: this.form.dni,
                            date: this.form.date,
                            password: this.form.password,
                            email: this.form.email
                        })
                        this.$router.push('/registro-foto');
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>
