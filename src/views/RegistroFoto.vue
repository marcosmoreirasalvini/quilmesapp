<template>
    <div class="page" id="registro-datos">
        <navbar-nav></navbar-nav>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- TITULO -->
                    <h1 class="main-title">Ingresá tu foto</h1>
                    <p class="lead">La vamos a usar para tu carnet</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavbarNav from "../components/NavbarNav";

    export default {
        name: 'RegistroFoto',
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
