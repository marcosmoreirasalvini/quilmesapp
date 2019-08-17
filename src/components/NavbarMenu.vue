<template>
    <div class="NavbarMenu">
        <div id="navbar-menu">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-6">
                        <div class="logo">
                            <img :src="'../assets/img/escudo.png'">
                        </div>
                    </div>
                    <div class="col-6 text-right">
                        <Slide :burgerIcon="true" right>
                            <ul class="nav flex-column off-canvas">

                                <!-- SI ESTÁ LOGUEADO -->

                                <li class="nav-item">
                                    <router-link class="nav-link" to="/credencial">
                                           MI CREDENCIAL
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/cuotas">
                                        MIS CUOTAS
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/actividades">
                                        MIS ACTIVIDADES
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/cuenta">
                                       MIS DATOS
                                    </router-link>
                                </li>
                                <!-- SI ESTÁ LOGUEADO -->




                                <li class="nav-item mt-4">
                                    <router-link class="nav-link" to="/noticias">
                                        NOTICIAS
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/eventos">
                                        EVENTOS
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/actividades">
                                        ACTIVIDADES DEPORTIVAS
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/actividades">
                                        EL CLUB
                                    </router-link>
                                </li>

                                <!-- SI NO ESTÁ LOGUEADO -->
                                <li class="nav-item mt-4">
                                    <router-link class="nav-link" to="/registro">
                                        ASOCIARME
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/ingreso">
                                        INGRESAR
                                    </router-link>
                                </li>
                                <!-- SI NO ESTÁ LOGUEADO -->

                                <!-- SI ESTÁ LOGUEADO -->
                                <li class="nav-item mt-4">
                                    <router-link class="nav-link" to="/salir">
                                        Salir
                                    </router-link>
                                </li>
                                <!-- SI ESTÁ LOGUEADO -->


                            </ul>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Slide} from 'vue-burger-menu';

    export default {
        name: 'NavbarMenu',
        components: {
            Slide // Register your component
        }
    }
</script>

<style scoped>

</style>
