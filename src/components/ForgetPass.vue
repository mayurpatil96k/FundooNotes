<script>
import { login } from './services/UserService'
export default {
  data: () => ({
    email: '',
    password: '',
    visible: false,
    timeout: 2000,
    snackbar: {
        visible: false,
        text: '',
        timeout: 3000 
      },
    emailRules: [
      (value) => {
        if (!value) return 'Must be a valid email address.'

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailPattern.test(value) || 'Must be a valid email address.'
      }
    ],
    passRules: [
      (value) => {
        if (value.length >= 8) return true
        return 'length of password must be greater than 8'
      }
    ]
  }),
  methods: {
    async submit() {
      const form = this.$refs.form
      if (form) {
        const { valid } = await form.validate()
        if (valid) {
          console.log("clicked...")
        }
      } else {
        console.error('Form reference is not defined.')
      }
    },
    showSnackbar(message, timeout) {
      this.snackbar.text = message;
      this.snackbar.timeout = timeout;
      this.snackbar.visible = true;
    }
  }
}
</script>

<template>
  <div>
    <v-card class="mx-auto pa-12 pb-5" elevation="9" max-width="455" rounded="lg">
      <v-img
        class="mx-auto my-3"
        max-width="100"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      ></v-img>

      <div class="text-h5 pb-3 text-center">Change Password</div>
      <div class="text-body-2 pb-6">
        Create a new strong password that toy do not use for other websites
      </div>

      <v-form ref="form">
        <v-text-field
          v-model="password"
          class="email-field py-2"
          label="Password"
          :rules="passRules"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-text-field
            class="email-field"
            label="Confirm Password"
            :rules="[(v) => v == this.password || 'password didnot matched']"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>

      </v-form>

      <div class="text-body-2 pb-6">
       
      </div>

      

      <div class="d-flex">
        

        <v-btn style="margin-left: auto" color="blue" size="large" variant="flat" @click="submit">
          <span class="text-button text-center">Next</span>
        </v-btn>
      </div>
    </v-card>

    <v-snackbar v-model="snackbar.visible" :timeout="snackbar.timeout">
      {{ snackbar.text }}

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar.visible = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: blue;
}
</style>
