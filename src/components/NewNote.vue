<template>
      <div @click="toggleContent">
        <v-text-field
          class="u-margin"
          label="Title"
          density="compact"
          variant="solo-filled"
          single-line
        ></v-text-field>
      </div>
      <div v-if="showContent">
        <v-textarea
        rows="1"
          label="Take a note..."
          density="compact"
          variant="solo-filled"
          single-line
        ></v-textarea>
        <div style="margin-top: 20px" class="d-flex u-align">
          <div>
            <icon/>
          </div>
          <v-btn @click="hideContent" variant="plain">Close</v-btn>
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
  
  .u-margin {
    padding: 0 !important;
    margin: 0 !important;
  }
  
  .v-input__details {
    display: none;
  }
  
  .u-align {
    align-items: center;
    justify-content: center;
  }
  </style>
  