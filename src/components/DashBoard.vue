<script>
import NewNote from './NewNote.vue'
import Icon from './Icon.vue';
import Card from './Card.vue';

export default {
  components: {
    NewNote,
    Icon,
    Card,
  },
  data: () => ({
    drawer: true,
    group: null,
    rail: true
  }),

  watch: {
    group() {
      this.drawer = true
    }
  }
}
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar prominent>
        <v-app-bar-nav-icon variant="text" @click="rail = !rail"></v-app-bar-nav-icon>

        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="Loading..."
        />
        <v-toolbar-title>Fundoo</v-toolbar-title>

        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          class="w-50"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"
              /></svg
          ></v-btn>

          <v-btn
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="M300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720Zm0 400q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320ZM160-840h640q17 0 28.5 11.5T840-800v280q0 17-11.5 28.5T800-480H160q-17 0-28.5-11.5T120-520v-280q0-17 11.5-28.5T160-840Zm40 80v200h560v-200H200Zm-40 320h640q17 0 28.5 11.5T840-400v280q0 17-11.5 28.5T800-80H160q-17 0-28.5-11.5T120-120v-280q0-17 11.5-28.5T160-440Zm40 80v200h560v-200H200Zm0-400v200-200Zm0 400v200-200Z"
              /></svg
          ></v-btn>
        </template>

        <v-btn
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path
              d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"
            /></svg
        ></v-btn>
        <v-btn
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path
              d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"
            /></svg
        ></v-btn>

        <v-avatar>
          <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
        </v-avatar>
      </v-app-bar>

      <div class="d-flex">
        <v-navigation-drawer
          expand-on-hover
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
        >
          <v-divdider></v-divdider>

          <v-list density="compact" nav>
            
            <v-list-item
              prepend-icon="mdi-lightbulb-outline"
              title="Notes"
              value="Notes"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-bell-outline"
              title="Reminders"
              value="Reminders"
            ></v-list-item>
            <v-list-item prepend-icon="mdi-pencil" title="Edit Label" value="Edit Label"></v-list-item>
            <v-list-item prepend-icon="mdi-archive-arrow-down-outline" title="Archieve" value="Archieve"></v-list-item>
            <v-list-item prepend-icon="mdi-trash-can-outline" title="Bin" value="Bin"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <RouterView/>
      </div>
    </v-layout>
  </v-card>
</template>

<style>
.main {
  width: 100vw;
}
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}
.v-list-item--active > .v-list-item__overlay {
  color: orange !important;
  border-radius:  0px 18px 18px 0px;
}
</style>
