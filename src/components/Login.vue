<script>
  export default {
    data: () => ({
      email: '',
      password: '',
      visible: false,
      emailRules: [
        value => {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
        },
      ],
      passRules:[
        value =>{
          if(value.length >=8)return true
          return 'length of password must be greater than 8'
        }
      ],
    }),
    methods:{
      submit(){
        const obj={
          "email": this.email,
          "password": this.password
        }
        console.log(obj);
      }
    }
  }
</script>

<template>
  <div class="py-10">
    <v-card
      class="mx-auto pa-12 pb-5"
      elevation="9"
      max-width="455"
      rounded="lg"
    >

    <v-img
      class="mx-auto my-3"
      max-width="100"
      src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    ></v-img>


      <div class="text-h4 pb-3 text-center">Sign In</div>
      <div class="text-body-1 pb-6 text-center">with your Google Account</div>

      <v-text-field
      v-model="email"
      class="email-field py-2"
      label="Email or Phone"
      :rules="emailRules"
        density="compact"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>


      <v-text-field
      v-model="password"
      class="email-field py-2"
      label="Password"
      :rules="passRules"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <div class="text-body-2 pb-6"><a href="http://" target="_blank" rel="noopener noreferrer">Forgot email?</a></div>


      <div class="text-body-2 pb-6">Not your Account? Use Guest mode to sign in Privately <a href="http://" target="_blank" rel="noopener noreferrer">Learn More</a></div>


      <div class="d-flex">

        <a href="http://" target="_blank" rel="noopener noreferrer">Create Account</a>

      <v-btn
         style="margin-left: auto;"
        color="blue"
        size="large"
        variant="flat"
        @click="submit"
      >
        <span class="text-button text-center">Log in</span>
      </v-btn>
    </div>
    </v-card>
  </div>
</template>

<style>
a{
  text-decoration: none;
  color: blue;
}
</style>