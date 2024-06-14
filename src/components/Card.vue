<script>
import { ref, watch } from 'vue'
import NewNote from './NewNote.vue'
import Icon from './Icon.vue'
import UpdateNote from './UpdateNote.vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import { VProgressCircular } from 'vuetify/components' // Import the loader component

export default {
  components: {
    NewNote,
    Icon,
    UpdateNote,
    MasonryWall,
    VProgressCircular // Register the loader component
  },
  props: {
    obj: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    // Setup reactive properties
    const hoverIndex = ref(null)
    const isLoading = ref(true)
    const dialog = ref(false)
    const selectedNote = ref(null)

    // Watch the obj prop to determine when data is loaded
    watch(
      () => props.obj,
      (newObj) => {
        if (newObj && newObj.length) {
          isLoading.value = false
        }
      },
      { immediate: true }
    )

    // Function to set hover index
    const onHover = (index) => {
      hoverIndex.value = index
    }

    // Function to clear hover index
    const onLeave = () => {
      hoverIndex.value = null
    }

    // Function to open the dialog with the selected note
    const openDialog = (note) => {
      selectedNote.value = note
      dialog.value = true
    }

    // Function to close the dialog
    const close = () => {
      dialog.value = false
    }

    return { hoverIndex, onHover, onLeave, isLoading, dialog, selectedNote, openDialog, close }
  }
}
</script>

<template>
  <div v-if="isLoading" class="loader-container">
    <v-progress-circular :size="100" :width="7" color="green" indeterminate> <b>Loading...</b> </v-progress-circular>
  </div>
  <div v-else-if="obj && obj.length">
    <masonry-wall :items="obj" :ssr-columns="1" :column-width="200" :gap="0">
      <template #default="{ item, index }">
        <v-col cols="" :key="index">
          <v-card class="border-sm" @mouseover="onHover(index)" @mouseleave="onLeave" @click="openDialog(item)">
            <div class="d-flex position-relative">
              <v-card-title> {{ item.title }} </v-card-title>
              <v-btn class="u-align CardIcons" :class="{ show: hoverIndex === index }" variant="plain">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                  <path
                    d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z" />
                </svg>
              </v-btn>
            </div>
            <v-card-text>{{ item.description }}</v-card-text>
            <div class="CardIcons" :class="{ show: hoverIndex === index }">
              <Icon @refresh="delrefresh" :items="this.items" :obj="item.id" />
            </div>
          </v-card>
        </v-col>
      </template>
    </masonry-wall>
  </div>
  <div v-else>
    <p>No items to display</p>
  </div>

  <v-dialog v-model="dialog" max-width="600">
    <UpdateNote :c_title="selectedNote" @closeevent="close" />
  </v-dialog>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 5%;
  letter-spacing: 1.5px;
  font-size: 13px;
}

.CardIcons {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.CardIcons.show {
  opacity: 1;
}

.u-align {
  position: absolute;
  right: 0px;
}
.v-col{
  padding: 5px !important;
}
</style>
