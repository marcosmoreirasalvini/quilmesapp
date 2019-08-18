<template>
    <div class="page" id="registro-datos">
        <navbar-nav></navbar-nav>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- TITULO -->
                    <h1 class="main-title w-lead">Ingresá tu foto</h1>
                    <p class="lead">La vamos a usar para tu carnet</p>
                </div>
            </div>
        </div>
        <div class="bg-light py-4 my-4">
            <div class="container">
                <div class="credencial mx-auto mb-4">
                    <div class="image">
                        <img v-if="url" :src="url"/>
                    </div>
                </div>
                <b-form @submit="onSubmit" class="text-center">
                    <b-button class="relative mx-auto" variant="secondary">
                        <i class="fas fa-camera"></i> ELEGÍ TU FOTO
                        <div class="upload-pic">
                            <b-form-file
                                    id="file-upload"
                                    :state="Boolean(file)"
                                    v-model="form.picture"
                                    @change="onFileChange"
                                    placeholder="Choose a file or drop it here..."
                                    drop-placeholder="Drop file here..."
                            ></b-form-file>
                        </div>
                    </b-button>
                </b-form>
            </div>
        </div>
        <div class="container">
            <b-button block type="submit" to="/checkout" class="mt-4" variant="primary">SIGUENTE</b-button>
        </div>
    </div>
</template>

<script>
    import NavbarNav from '../components/NavbarNav';


    export default {
        name: 'RegistroFoto',
        components: {NavbarNav},
        data() {
            return {
                form: {
                    picture: '',
                },
                url: null,
                show: true
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                localStorage.setItem('user', JSON.stringify(this.form));
                //this.$router.push('/checkout');
            },
            onFileChange(e) {
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
            }
        }

    }
</script>

<style scoped>

</style>
