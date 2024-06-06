<script>
export default {
  data: () => ({
    email: '',
    password: '',
    visible: false,
    emailRules: [
      (value) => {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid Username.'
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
    submit() {
      const obj = {
        email: this.email,
        password: this.password
      }
      console.log(obj)
    }
  }
}
</script>

<template>
  <div class="py-10">
    <v-card class="mx-auto pa-12 pb-5" elevation="9" max-width="455" rounded="lg">
      <v-img
        max-width="100"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      ></v-img>

      <div class="text-h5 py-3">Create your Google Account</div>

      <div class="d-flex">
        <v-text-field
          v-model="email"
          class="email-field pr-2"
          label="First Name"
          density="compact"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="email"
          class="email-field"
          label="Last Name"
          density="compact"
          variant="outlined"
        ></v-text-field>
      </div>

      <v-text-field
        v-model="email"
        class="email-field "
        label="Username"
        :rules="emailRules"
        density="compact"
        variant="outlined"
      ></v-text-field>

      <div class="text-caption py-0">You can usse letters,numbers & periods</div>
      <a href="http://" target="_blank" rel="noopener noreferrer"
        >Use my current email address instead</a
      >

      <div class="d-flex pt-8">
        <v-text-field
          v-model="password"
          class="email-field pr-2"
          label="Password"
          :rules="passRules"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-text-field
          v-model="password"
          class="email-field"
          label="Confirm"
          :rules="passRules"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
      </div>

      <div class="text-caption">Use 8 or more charectorss with a mix of letters,numbers & symbols</div>

      <div class="d-flex pt-10">
        <a href="#">Sign in instead </a>

        <v-btn style="margin-left: auto" color="blue" size="large" variant="flat" @click="submit">
          <span class="text-button text-center">Sign Up</span>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: rgb(0, 85, 255);
}
</style>
