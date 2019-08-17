<template>
    <div class="" id="navbar-menu">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-6">
                    <a @click="$router.go(-1)"><i class="fas fa-arrow-left"></i></a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavbarNav',
    }
</script>

<style scoped>

</style>
