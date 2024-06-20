<script>
export default {
  data() {
    return {
      hoverIndex: null,
      editingIndex: null
    };
  },
  methods: {
    closeevent() {
      this.$emit('closevent')
    },
    startEditing(index) {
      this.editingIndex = index;
    },
    stopEditing() {
      this.editingIndex = null;
    }
  },
  props: {
    Ilabels: Array
  }
}
</script>

<template>
  <v-card title="Edit labels" class="u-card">
    <div class="d-flex">
      <div class="pa-2 pb-2">
        <v-icon icon="mdi-window-close"></v-icon>
      </div>
      <v-text-field
        placeholder="Create new label"
        density="compact"
        variant="flat"
      ></v-text-field>
      <div class="pa-2 pb-2">
        <v-icon icon="mdi-check"></v-icon>
      </div>
    </div>
    <!-- iterating... -->
    <div 
      v-for="(item, index) in Ilabels" 
      :key="index" 
      class="d-flex"
      @mouseover="hoverIndex = index"
      @mouseleave="hoverIndex = null"
    >
      <div class="pa-2 pb-2">
        <v-icon :icon="hoverIndex === index ? 'mdi-trash-can' : 'mdi-label'"></v-icon>
      </div>
      <v-text-field
        v-model="item.label"
        density="compact"
        variant="flat"
        @focus="startEditing(index)"
        @blur="stopEditing"
      ></v-text-field>
      <div class="pa-2 pb-2">
        <v-icon :icon="editingIndex === index ? 'mdi-check' : 'mdi-pencil'"></v-icon>
      </div>
    </div>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn text @click="closeevent()">Done</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.u-card {
  width: 300px !important;
  min-height: 250px !important;
}

.v-dialog > .v-overlay__content > .v-card,
.v-dialog > .v-overlay__content > .v-sheet,
.v-dialog > .v-overlay__content > form > .v-card,
.v-dialog > .v-overlay__content > form > .v-sheet {
  --v-scrollbar-offset: 0px;
  border-radius: 1px;
}

.v-icon {
  color: #808080;
}
</style>
