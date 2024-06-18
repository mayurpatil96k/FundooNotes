<script>
import { deleteNote, arcNote, changeColor } from '../components/services/Notes'
export default {
  props: {
    items: Array,
    obj: String
  },
  methods: {
    delNote(index) {
      if (index == 'Delete note') {
        const del = {
          noteIdList: [this.obj],
          isDeleted: true
        }
        deleteNote(del)
        this.$emit('refresh')
      }
    },
    arcNote() {
      const arc = {
        noteIdList: [this.obj],
        isArchived: true
      }
      arcNote(arc)
      this.$emit('refresh')
    },
    colorNote(newcolor) {
      const colorobj = {
        noteIdList: [this.obj],
        color: newcolor
      }
      console.log(colorobj)
      changeColor(colorobj)
      this.$emit('refresh')
    }
  }
}
</script>

<template>
  <div>
    <v-btn variant="plain"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="#000000"
      >
        <path
          d="M480-500Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm240-360v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q14 4 27.5 8.5T593-772q-15 14-27 30.5T545-706q-15-7-31.5-10.5T480-720q-66 0-113 47t-47 113v280h320v-112q18 11 38 18t42 11v83h80v80H160Z"
        /></svg
    ></v-btn>
    <v-btn variant="plain"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="#000000"
      >
        <path
          d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"
        /></svg
    ></v-btn>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn variant="plain" v-bind="props"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#000000"
          >
            <path
              d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"
            /></svg
        ></v-btn>
      </template>
      <div class="u-color">
        <div class="color-box white" @click="colorNote('#ffffff')"></div>
        <div class="color-box red" @click="colorNote('#fbbc05')"></div>
        <div class="color-box orange" @click="colorNote('#ff7043')"></div>
        <div class="color-box yellow" @click="colorNote('#fff475')"></div>
        <div class="color-box green" @click="colorNote('#ccff90')"></div>
        <div class="color-box teal" @click="colorNote('#a7ffeb')"></div>
        <div class="color-box blue" @click="colorNote('#cbf0f8')"></div>
        <div class="color-box dark-blue" @click="colorNote('#fdcfe8')"></div>
        <div class="color-box purple" @click="colorNote('#d7aefb')"></div>
        <div class="color-box pink" @click="colorNote('#aecbfa')"></div>
        <div class="color-box brown" @click="colorNote('#e6c9a8')"></div>
        <div class="color-box gray" @click="colorNote('#e8eaed')"></div>
      </div>
    </v-menu>
    <v-btn variant="plain"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="#000000"
      >
        <path
          d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"
        /></svg
    ></v-btn>
    <v-btn variant="plain"
      ><svg
        @click="arcNote()"
        xmlns="http://www.w3.org/2000/svg"
        height="18px"
        viewBox="0 -960 960 960"
        width="18px"
        fill="#000000"
      >
        <path
          d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"
        /></svg
    ></v-btn>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn variant="plain" v-bind="props"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#000000"
          >
            <path
              d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"
            /></svg
        ></v-btn>
      </template>

      <v-list size="small" density="compact">
        <v-list-item
          density="compact"
          size="small"
          @click="delNote(item.title)"
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title size="small" density="compact" v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style>
.v-btn--size-default {
  min-width: 0px;
  padding: 0 13px;
}
.v-list-item-title {
  font-size: 0.9rem;
}
.v-list-item--density-compact.v-list-item--one-line {
  min-height: 27px !important;
}
.color-box:hover{
  border: 2px solid white;
}
.color-box {
  width: 35px;
  height: 35px;
  display: inline-block;
  margin: 3px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.white {
  background-color: #ffffff;
}
.red {
  background-color: #fba505;
}
.orange {
  background-color: #ff7043;
}
.yellow {
  background-color: #fff475;
}
.green {
  background-color: #ccff90;
}
.teal {
  background-color: #a7ffeb;
}
.blue {
  background-color: #cbf0f8;
}
.dark-blue {
  background-color: #aecbfa;
}
.purple {
  background-color: #d7aefb;
}
.pink {
  background-color: #fdcfe8;
}
.brown {
  background-color: #e6c9a8;
}
.gray {
  background-color: #e8eaed;
}
#color-name {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.u-color {
  border: 1px solid black;
  border-radius: 5px;
}
</style>
