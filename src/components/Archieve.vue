<script>
import NewNote from './NewNote.vue'
import Icon from './Icon.vue'
import Card from './Card.vue'
import { getAllArc } from './services/Archieve'

export default {
  data() {
    return {
      obj: null
    }
  },
  components: {
    NewNote,
    Icon,
    Card
  },
  methods: {
    getNotes() {
      getAllArc()
        .then((data) => {
          
          this.obj = data.data.data.data.reverse();

        })
        .catch((err) => console.log(err))
    },
    refresh(){
      console.log("refreshing...")
      this.getNotes(); 
    }
  },

  mounted() {
    this.getNotes()
  }
}
</script>

<template>
  <v-main class="main">
    <v-container class="">
      <v-row justify="center">
        <v-col cols="7">
        </v-col>
      </v-row>
      <v-col >
        <Card @refreshing="refresh" :obj="this.obj" />
      </v-col>
    </v-container>
  </v-main>
</template>

<style>

.main {
  width: 100vw;
  min-height: 45vw;
}

</style>
