<template>
  <v-app>
    <router-view>
        <main>
          <v-container fluid>
              <v-layout column align-center>
                <Home/>
              </v-layout>
          </v-container>
        </main>
    </router-view>
  </v-app>
</template>

<script>
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import ReCAPTCHA from './components/ReCAPTCHA'

export default {
  name: 'App',
  components: {
    Home,
    Login,
    SignUp,
    ReCAPTCHA,
  },
  data () {
    return {
      //
    }
  }
}
</script>
