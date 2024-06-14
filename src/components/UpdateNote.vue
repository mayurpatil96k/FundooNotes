<script>
import Icon from './Icon.vue'
import { updateNote } from '../components/services/Notes'

export default {
  components: {
    Icon
  },
  mounted() {
    this.title = this.c_title.title
    this.desc = this.c_title.description
  },
  props: {
    c_title: Object
  },

  data: () => ({
    showContent: true,
    dialog: false,
    title: '',
    desc: '',
    items: [
      { title: 'Delete note' },
      { title: 'Add Label' },
      { title: 'Add drawwing' },
      { title: 'make a copy' },
      { title: 'Show tick boxes' },
      { title: 'Copy to google docs' },
      { title: 'Version History' }
    ]
  }),
  methods: {
    delrefresh(){
      this.$emit("closeevent");
      this.$emit("uprefresh");
    },
    closebox() {
      const updated = {
        noteId : this.c_title.id,
        title : this.title,
        description : this.desc
      }
      updateNote(updated);
      this.$emit('closeevent')
      this.$emit("uprefresh");
      console.log(updated);
    }
  }
}
</script>

<template>
  <div class="u-border man-bg">
    <div @click="toggleContent">
      <v-textarea auto-grow
        v-model="title"
        rows="1"
        placeholder="Title"
        density="compact"
        variant="flat"
      >
        <template v-slot:append-inner>
          <v-icon class="mx-2">mdi-pin</v-icon>
        </template>
      </v-textarea>
    </div>
    <div>
      <v-textarea auto-grow
        v-model="desc"
        rows="1"
        placeholder="Take a note..."
        density="compact"
        variant="flat"
      ></v-textarea>
      <div style="margin-top: 20px" class="d-flex u-align-center">
        <div class="u-icon-left">
          <icon :items="this.items" @refresh="delrefresh" :obj="this.c_title.id" />
        </div>
        <v-btn @click="closebox" variant="plain" class="text-none ml-auto">Close</v-btn>
      </div>
    </div>
  </div>
</template>

<style>
.man-bg {
  background: #ffff !important;
}

.u-card {
  width: 650px !important;
  height: 150px !important;
  background: #ffff;
}

.v-input__details {
  display: none;
}

.u-align-center {
  align-items: center;
  justify-content: space-between;
}

.ml-auto {
  margin-left: auto;
}

.u-border {
  border: 1px solid #ccc;
  border-radius: 8px;
}

.v-icon {
  cursor: pointer;
}
</style>
