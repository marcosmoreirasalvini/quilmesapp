<template>
<div class="container">
    <NavbarNav></NavbarNav>
    <div class="container">
        <div class='row'>
            {{user.name}}
            <div class='col-12'>
                <!-- TITULO -->
                <h1 class="main-title">Registro de socio</h1>
                <label>VALOR DE LA CUOTA</label>
                <h3 class="display-4">$650</h3>
                <div class="form-group">
                    <label>Medio de pago</label>
                    <select class="form-control">
                        <option>Tarjeta de crédito</option>
                        <option>Tarjeta de débito</option>
                    </select>
                </div>
                <b-button block variant="primary" to="/checkout-card">SIGUENTE</b-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import NavbarNav from '@/components/NavbarNav.vue';

    export default {
        name: 'Checkout',
        components: { NavbarNav },
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
