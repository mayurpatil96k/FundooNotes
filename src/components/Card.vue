<script>
import { ref } from 'vue';
import NewNote from './NewNote.vue'
import Icon from './Icon.vue';

export default {
  components: {
    NewNote,
    Icon,
  },
  props: {
    obj: Array,
  },
  setup(props) {
    // Setup a reactive property to track hover states
    const hoverIndex = ref(null);

    // Function to set hover index
    const onHover = (index) => {
      hoverIndex.value = index;
    };

    // Function to clear hover index
    const onLeave = () => {
      hoverIndex.value = null;
    };

    return { hoverIndex, onHover, onLeave };
  }
}
</script>
<template>
  <v-col cols="15" md="3" lg="3" sm="1" v-for="(item, index) in obj" :key="index">

    <v-card class="border-sm" @mouseover="onHover(index)" @mouseleave="onLeave">
      <div class="d-flex position-relative">
      <v-card-title> {{ item.title }}</v-card-title>
      <v-btn class=" u-align CardIcons" :class="{ 'show': hoverIndex === index }" variant="plain"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z"/></svg></v-btn>
    </div>
      <v-card-text>{{ item.description }}</v-card-text>
      <div class="CardIcons" :class="{ 'show': hoverIndex === index }">
        <Icon />
      </div>
    </v-card>

  </v-col>
</template>
<style scoped>
.CardIcons {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.CardIcons.show {
  opacity: 1;
}

.u-align{
  position: absolute;
  right: 0px;
}
</style>