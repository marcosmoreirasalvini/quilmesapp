<template>
    <div class='home'>
        <!-- COMPONENTE DEL MENÚ -->
        <NavbarMenu></NavbarMenu>
        <div class="container">
            <div class='row'>
                <div class='col-12'>

                    <!-- TITULO -->
                    <h1 class="main-title">Eventos</h1>
                    
                    <!-- CARD -->
                    <b-card v-for="article in news" no-body img-top tag="article" class="mb-2">
                        <router-link :to="'evento/'+article.id">
                            <b-card-img :src="article.img_src"></b-card-img>
                        </router-link>
                        <b-card-body>
                            <b-card-title>{{article.title}}</b-card-title>
                            <b-card-text>
                                {{article.small_text}}
                            </b-card-text>
                            <b-card-text class="small text-muted">{{article.time}}</b-card-text>
                        </b-card-body>
                    </b-card>
                    <!-- / CARD -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>

    // Importamos los componentes
    import NavbarMenu from "@/components/NavbarMenu.vue";

    export default {
        name: 'Eventos',
        components: {
            NavbarMenu
        },
        data() {
            return {
                // Acá van todas las noticias
                news: [
                    {
                        id: 1,
                        title: "Eduardo Dominé asumirá como Director Deportivo",
                        img_src: "../assets/img/eduardo-presidente.jpg",
                        text: "",
                        small_text: "En el camino de reestructuración que lleva adelante la actual conducción, se concretó la incorporación de Dominé al equipo de trabajo con la intención de potenciar y mejorar las disciplinas del Club.",
                        time: "9 de agosto 2019"
                    },
                    {
                        id: 2,
                        title: "El pivot Juan Cruz Germano se suma para la Liga Argentina",
                        img_src: "../assets/img/juan-cruz-germano.jpg",
                        text: "",
                        small_text: "Quilmes suma centímetros para reforzar la pintura. Juan Cruz Germano, pivot de 2,08 metros y 19 años, llega a préstamo por un año procedente de Boca Juniors y es la nueva ficha que tendrá a disposición el DT Manuel Gelpi.\n",
                        time: "6 de agosto 2019"
                    },
                ],
            };
        }
    }
</script>
