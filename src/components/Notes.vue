<script>
import NewNote from './NewNote.vue'
import Icon from './Icon.vue'
import Card from './Card.vue'
import { getAllNotes } from './services/Notes'

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
      getAllNotes()
        .then((data) => {
          this.obj = data.data.data.data
        })
        .catch((err) => console.log(err))
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
          <NewNote />
        </v-col>
      </v-row>
      <v-row>
        <Card :obj="this.obj" />
      </v-row>
    </v-container>
  </v-main>
</template>

<style>
.main {
  width: 100vw;
  height: 100vw;
}
</style>
