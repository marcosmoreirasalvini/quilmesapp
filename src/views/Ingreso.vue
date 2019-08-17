<template>
    <div class="page" id="ingreso">
        <navbar-nav></navbar-nav>
        <div class="container">
            <!-- TITULO -->
            <h1 class="main-title">Ingresar a tu cuenta</h1>

            <b-button block variant="info" class="mb-3 mt-4" to="/registro-datos">INGRESAR CON FACEBOOK</b-button>

            <h4 class="mb-3 mt-4 text-center"><small>O ingresar con tus datos</small></h4>

            <b-form @submit.stop.prevent>
                <b-form-group>
                    <label for="email">Email</label>
                    <b-input type="email" id="email" aria-describedby="email-help-block"></b-input>
                </b-form-group>
                <b-form-group>
                    <label for="text-password">Contraseña</label>
                    <b-input type="password" id="text-password" aria-describedby="password-help-block"></b-input>
                </b-form-group>
                <b-button block to="/micuenta" variant="primary">INGRESAR</b-button>
                <b-button block to="/recuperar-cuenta" variant="link">RECORDAR CONTRASEÑA</b-button>
                <b-button block to="/recuperar-cuenta" variant="light">No tengo cuenta</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    import NavbarNav from "../components/NavbarNav";
    export default {
        name: 'Ingreso',
        components: {NavbarNav},
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                localStorage.setItem('user', JSON.stringify(this.form));
                this.$router.push('/micuenta');
            },
        }
    }
</script>

<style scoped>

</style>
