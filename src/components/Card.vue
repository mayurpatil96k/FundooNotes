<script>
import NewNote from './NewNote.vue'
import Icon from './Icon.vue';

export default{
    components:{
        NewNote,
        Icon,
    },
    setup(props) {
    // setup() receives props as the first argument.
    console.log(props.obj)
  },
    props: {
    obj: Array, 
  }
}
</script>

<template>
<v-col cols="15" md="3" lg="3" sm="1" v-for="item in obj">
          <v-card >
            <v-card-title> {{ item.title }}</v-card-title>
            <v-card-text
              >{{ item.description }}</v-card-text
            >
            <Icon/>
          </v-card>
        </v-col>
</template>

<style>
.main {
  width: 100vw;
}
</style>