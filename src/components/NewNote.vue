<template>
  <div class="u-border">
    <div @click="toggleContent">
      <v-text-field
        placeholder="Title"
        density="compact"
        variant="flat"
        single-line
      >
        <template v-if="showContent" v-slot:append-inner>
          <v-icon class="mx-2">mdi-pin</v-icon>
          </template>
          <template v-else v-slot:append-inner>
            <v-icon class="mx-2">mdi-tooltip-check-outline</v-icon>
            <v-icon class="mx-2">mdi-brush</v-icon>
            <v-icon class="mx-2">mdi-image</v-icon>
          
        </template>
      </v-text-field>
    </div>
    <div v-if="showContent">
      <v-textarea
        rows="1"
        label="Take a note..."
        density="compact"
        variant="flat"
        single-line
      ></v-textarea>
      <div style="margin-top: 20px" class="d-flex u-align-center">
        <div class="u-icon-left">
          <icon/>
        </div>
        <v-btn  @click="hideContent" variant="plain" class="text-none ml-auto">Close</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    toggleContent() {
      this.showContent = true;
    },
    hideContent() {
      this.showContent = false;
    },
  },
};
</script>

<style>
.u-card {
  width: 650px !important;
  height: 150px !important;
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
