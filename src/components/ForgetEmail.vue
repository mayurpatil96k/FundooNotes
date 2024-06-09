<script>
import { login } from './services/UserService'
export default {
  data: () => ({
    email: '',
    emailRules: [
      (value) => {
        if (!value) return 'Must be a valid email address.'

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailPattern.test(value) || 'Must be a valid email address.'
      }
    ]
  }),
  methods: {
    async submit() {
      const form = this.$refs.form
      if (form) {
        const { valid } = await form.validate()
        if (valid) {
         console.log("hello");
        }
      } else {
        console.error('Form reference is not defined.')
      }
    },
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

      <div class="text-h4 pb-3 text-center">Sign In</div>
      <div class="text-body-1 pb-6 text-center">to your Google Account</div>

      <v-form ref="form">
        <v-text-field
          v-model="email"
          class="email-field py-2"
          label="Email or Phone"
          :rules="emailRules"
          density="compact"
          variant="outlined"
        ></v-text-field>


      </v-form>


      <div class="text-body-2 pb-6">
        Not your Account? Use Guest mode to sign in Privately
        <a href="http://" target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>

      <div class="d-flex">
        <router-link to="signup"
          ><a href="http://" target="_blank" rel="noopener noreferrer"
            >Create Account</a
          ></router-link
        >

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
