<script>
import Icon from './Icon.vue'
import { createNote } from '../components/services/Notes'

export default {
  components: {
    Icon
  },
  data: () => ({
    showContent: false,
    title: '',
    desc: '',
    items: [
        { title: 'Add Label' },
        { title: 'Add Drawing' },
        { title: 'Show tick boxes' },
      ]
  }),
  methods: {
    toggleContent() {
      this.showContent = true
    },
    hideContent() {
      this.showContent = false
      if (this.desc.length > 0 && this.title.length > 0) {
        const note = {
          title: this.title,
          description: this.desc
        }
        createNote(note);
        this.$emit('refreshNotes')
        this.title = ''
        this.desc = ''
      }
    },
  }
}
</script>

<template>
  
  <div class="u-border">
    
    <div @click="toggleContent">
     
      <v-textarea auto-grow
        v-model="title"
        rows="1"
        placeholder="Title"
        density="compact"
        variant="flat"
      >
        <template v-if="showContent" v-slot:append-inner>
          <v-icon class="mx-2">mdi-pin</v-icon>
        </template>
        <template v-else v-slot:append-inner>
          <v-icon class="mx-2">mdi-tooltip-check-outline</v-icon>
          <v-icon class="mx-2">mdi-brush</v-icon>
          <v-icon class="mx-2">mdi-image</v-icon>
        </template>
      </v-textarea>
    </div>
    <div v-if="showContent">
      <v-textarea auto-grow
        v-model="desc"
        rows="1"
        placeholder="Take a note..."
        density="compact"
        variant="flat"
      ></v-textarea>
      <div style="margin-top: 20px" class="d-flex u-align-center">
        <div class="u-icon-left">
          <icon :items="this.items"/>
        </div>
        <v-btn @click="hideContent" variant="plain" class="text-none ml-auto">Close</v-btn>
      </div>
    </div>
  </div>
</template>

<style>
.u-card {
  width: 650px !important;
  min-height: 150px !important;
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
