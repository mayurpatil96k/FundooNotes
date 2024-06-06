<script>
export default {
  data: () => ({
    username: '',
    fname: '',
    lname: '',
    password: '',
    visible: false,
    emailRules: [
      (value) => {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid Username.'
      }
    ],
    passRules: [
    value => {
    if (value.length >= 8) {
      return true;
    }
    return 'Password must be at least 8 characters long.';
  },
  value => {
    if (/[A-Z]/.test(value)) {
      return true;
    }
    return 'Password must contain at least one uppercase letter.';
  },
  value => {
    if (/[a-z]/.test(value)) {
      return true;
    }
    return 'Password must contain at least one lowercase letter.';
  },
  value => {
    if (/[0-9]/.test(value)) {
      return true;
    }
    return 'Password must contain at least one number.';
  },
  value => {
    if (/[^A-Za-z0-9]/.test(value)) {
      return true;
    }
    return 'Password must contain at least one special character.';
  }
    ]
  }),
  methods: {
    submit() {
      const obj = {
        fname: this.fname,
        lname: this.lname,
        username: this.username,
        password: this.password
        
      }
      console.log(obj)
    }
  }
}
</script>

<template>
    <div class="d-lg-flex justify-center align-center" >

        <v-card class="d-lg-flex pa-12 pb-5" elevation="9" rounded="lg">
  <div class="py-10">
      <v-img
        max-width="100"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      ></v-img>

      <div class="text-h5 py-3">Create your Google Account</div>

      <div class="d-flex">
        <v-text-field
          v-model="fname"
          :rules="[v => !!v || 'Name is required']"
          class="email-field pr-2"
          label="First Name"
          density="compact"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="lname"
          class="email-field"
          :rules="[v => !!v || 'Name is required']"
          label="Last Name"
          density="compact"
          variant="outlined"
        ></v-text-field>
      </div>

      <v-text-field
        v-model="username"
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
          class="email-field"
          label="Confirm"
          :rules="[v => v==this.password || 'password didnot matched']"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
      </div>

      <div class="text-caption">Use 8 or more charectorss with a mix of letters,numbers & symbols</div>

      <div class="d-flex pt-10">
        <router-link to="login"><a href="#">Sign in instead </a></router-link>

        <v-btn style="margin-left: auto" color="blue" size="large" variant="flat" @click="submit">
          <span class="text-button text-center">Sign Up</span>
        </v-btn>
      </div>
    </div>

  <div class="hidden-div d-flex flex-sm-column justify-center align-center px-10">
    <img src="../assets/Screenshot 2024-06-06 165618.png" alt="Loading">
    <div class="text-h6 px-2 text-center">One account. All of Google <br>
        Working for you</div>
  </div>
</v-card>
</div>
</template>

<style>
a {
  text-decoration: none;
  color: rgb(0, 85, 255);
}

@media screen and (max-width: 480px){
.hidden-div{
    display: none;
}
}
@media screen and (max-width: 1280px){
.hidden-div{
    display: none;
}
}
</style>
