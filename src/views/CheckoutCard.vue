<template>
<div class="container">
    <NavbarNav></NavbarNav>
    <div class="container">
        <div class='row'>
            <div class='col-12'>
                <!-- TITULO -->
                <h1 class="main-title">Pagar</h1>

                <form id="addCard" method="post" name="addCard">
                    <div class="form-group mt-4">
                        <label for="cardNumber">Numero de tarjeta de crédito o débito</label>
                        <input
                                type="tel"
                                id="cardNumber"
                                class="form-control"
                                data-checkout="cardNumber"
                                placeholder
                                onselectstart="return false"
                                onpaste="return false"
                                onCut="return false"
                                onDrag="return false"
                                onDrop="return false"
                                autocomplete="off"
                                v-model="cardDetail.number"
                                data-vv-name="número de tarjeta"
                                v-validate="'required'"
                                :class="{ 'is-invalid': submitted && errors.has('número de tarjeta') }"
                        >
                        <div
                                v-if="submitted && errors.has('número de tarjeta')"
                                class="invalid-feedback"
                        >{{ errors.first('número de tarjeta') }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cardholderName">Nombre completo</label>
                        <input
                                type="text"
                                id="cardholderName"
                                class="form-control"
                                data-checkout="cardholderName"
                                v-model="cardDetail.name"
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
                        <label for="cardExpiry">Vencimiento</label>
                        <input
                                type="tel"
                                id="cardExpiry"
                                class="form-control"
                                data-checkout="cardExpirationMonth"
                                placeholder="05/25"
                                onselectstart="return false"
                                onpaste="return false"
                                onCopy="return false"
                                onCut="return false"
                                onDrag="return false"
                                onDrop="return false"
                                autocomplete="off"
                                v-model="cardDetail.expiry"
                                v-validate="{ required: true, max: 7 }"
                                :class="{ 'is-invalid': submitted && errors.has('vencimiento') }"
                                maxlength="5"
                                data-vv-name="vencimiento"
                        >
                        <div
                                v-if="submitted && errors.has('vencimiento')"
                                class="invalid-feedback"
                        >{{ errors.first('vencimiento') }}
                        </div>
                    </div>

                    <div class="mt-3" v-if="cardDetail"></div>

                    <div class="form-group">
                        <label for="securityCode">Código de seguridad</label>
                        <input
                                type="tel"
                                id="securityCode"
                                class="form-control"
                                data-checkout="securityCode"
                                placeholder="123"
                                onselectstart="return false"
                                onpaste="return false"
                                onCopy="return false"
                                onCut="return false"
                                onDrag="return false"
                                onDrop="return false"
                                autocomplete="off"
                                v-model="cardDetail.cvc"
                                v-validate="'required'"
                                data-vv-name="código de seguridad"
                                :class="{ 'is-invalid': submitted && errors.has('código de seguridad') }"
                        >
                        <div
                                v-if="submitted && errors.has('código de seguridad')"
                                class="invalid-feedback"
                        >{{ errors.first('código de seguridad') }}
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="docNumber">Número de Documento</label>
                        <input
                                type="tel"
                                id="docNumber"
                                class="form-control"
                                data-checkout="docNumber"
                                placeholder
                                v-model="cardDetail.dni"
                                v-validate="{ required: true, min:8 }"
                                :class="{ 'is-invalid': submitted && errors.has('dni') }"
                                data-vv-name="dni"
                        >
                        <div
                                v-if="submitted && errors.has('dni')"
                                class="invalid-feedback"
                        >{{ errors.first('dni') }}
                        </div>
                    </div>


                    <input id="docType" data-checkout="docType" value="DNI" hidden>
                    <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" hidden>
                    <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" hidden>
                    <input type="text" name="paymentMethodId" value="visa" hidden>
                    <input type="text" name="token" id="token" value hidden>
                    <input type="text" data-checkout="cardId" id="cardId" value hidden>

                    <div class="form-group mt-4">
                        <b-button block variant="primary" @click.stop.prevent="handleSubmit()">PAGAR</b-button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</div>
</template>

<script>
    import NavbarNav from '@/components/NavbarNav.vue';

    export default {
        name: 'Checkout',
        components: {
            NavbarNav,
        },

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
                cardDetail: {
                    number: '',
                    name: '',
                    expiry: '',
                    cvc: '',
                    userName: '',
                },
                submitted: false,
            };
        },
        methods: {
            handleSubmit() {
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.loading = true;
                        this.$router.push('/exito');
                    }
                });
            },
        }
    }
</script>

<style scoped>

</style>
