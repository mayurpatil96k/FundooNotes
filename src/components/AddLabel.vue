<script>
import { getAllLabels } from './services/Label'
export default {
  data() {
    return {
      selected: this.card.noteLabels.map(labelObj => labelObj.label),
      labels: null
    }
  },
  props: {
    card: Object,
    cardId:String
  },
  methods: {
    getLabel() {
      getAllLabels()
        .then((data) => (this.labels = data.data.data.details))
        .then(() => console.log(this.labels))
        .then(()=>console.log(this.card))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.getLabel()
  }
}
</script>

<template>
  <v-card>
    <v-card-title class="headline">Label Note</v-card-title>

    <div class="d-flex align-center justify-center">
      <v-text-field placeholder="Enter Label Name" density="compact" variant="flat"></v-text-field>
      <v-icon class="pa-2 pb-2">mdi-magnify</v-icon>
    </div>
    <div v-for="item in labels">
      <v-checkbox
        class="u-margin"
        v-model="selected"
        size="small"
        density="compact"
        :label="item.label"
        :value="item.label"
      ></v-checkbox>
    </div>
  </v-card>
</template>

<style scoped>
.u-margin {
  margin-left: 7px;
}
.v-input {
  font-size: 0.7rem;
  line-height: 1.2;
}

.headline {
  font-size: 1rem;
}
.v-card .v-card-title {
  line-height: 0.6;
}
.d-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-icon {
  color: #808080;
}
</style>
