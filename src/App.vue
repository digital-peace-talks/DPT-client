<template>
    <Home></Home>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    Login,
  },
  data () {
    return {
      //
    }
  }
}
</script>
