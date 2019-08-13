<template>
  <div class="home">
    <NavbarMenu></NavbarMenu>
    <div class="row">
      <div class="col-12">
        <h1>Noticias</h1>
        <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <router-link to="/news/1" class="btn btn-primary">VER MAS</router-link>

        </b-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import NavbarMenu from '@/components/NavbarMenu.vue'; // @ is an alias to /src

@Component({
  components: {
    NavbarMenu,
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
