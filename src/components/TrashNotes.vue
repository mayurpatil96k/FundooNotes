<script>
import NewNote from './NewNote.vue'
import Icon from './Icon.vue'
import Card from './Card.vue'
import { getAllTrash } from './services/Trash'

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
      getAllTrash()
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
            <i>Notes in the Recycle Bin are deleted after 7 days.</i>
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
