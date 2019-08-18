<template>
<div class="container">
    {{localuser}}
</div>
</template>

<script>
    export default {
        name: 'Checkout',
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
                    },
                ],
            };
        }
    }
</script>

<style scoped>

</style>
