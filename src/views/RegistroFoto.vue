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
                <b-form class="text-center">
                    <b-button class="relative mx-auto" variant="secondary">
                        <i class="fas fa-camera"></i> ELEGÍ TU FOTO
                        <div class="upload-pic">
                            <b-form-file
                                    id="file-upload"
                                    :state="Boolean(form.picture)"
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
            <b-button block @click.stop.prevent="handleSubmit()" class="mt-4" variant="primary">
                <span v-if="form.picture">
                    SIGUENTE
                </span>
                <span v-else>
                    OMITIR
                </span>
            </b-button>
        </div>
    </div>
</template>

<script>
    import NavbarNav from '../components/NavbarNav';


    export default {
        name: 'RegistroFoto',
        components: {NavbarNav},
        data() {
            const localuser = JSON.parse(localStorage.user)
            return {
                form: {
                    picture: '',
                },
                user: localuser,
                url: null,
                show: true
            }
        },
        methods: {
            handleSubmit() {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.loading = true;
                        const userUpdated = {
                            ...JSON.parse(localStorage.user),
                            ...{
                                picture: this.url,
                            }
                        }
                        localStorage.user = JSON.stringify(userUpdated)
                        this.$router.push('/checkout');
                    }
                });
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
