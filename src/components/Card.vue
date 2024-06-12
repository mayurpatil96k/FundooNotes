<script>
import NewNote from './NewNote.vue'
import Icon from './Icon.vue';

export default{
    components:{
        NewNote,
        Icon,
    }
}
</script>

<template>

<v-main class="main">
    <v-container class="">
      <v-row justify="center">
        <v-col cols="6">
          <NewNote />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" lg="3" sm="1">
          <v-card>
            <v-card-title>demo</v-card-title>
            <v-card-text
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis
              doloremque ut voluptatem ipsam velit reiciendis, eos asperiores molestiae vel
              dolore unde repudiandae itaque, cupiditate fugit nesciunt quia ea eveniet
              corporis culpa. Nemo dolorem inventore neque magnam doloribus ab beatae libero,
              sint molestiae nesciunt, exercitationem quam voluptatem sequi cum
              corporis.</v-card-text
            >
            <Icon/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>

</template>

<style>
.main {
  width: 100vw;
}
</style>