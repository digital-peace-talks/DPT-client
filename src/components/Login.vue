<template>
    <v-container>
        <v-layout column>
        <h1 class="text-xs-center">Login</h1>
        <v-form>
            <v-textarea outline
                label="PassPhrase"
                name="private-key"
                placeholder="Enter your passphrase here"
                ></v-textarea>
            <v-btn align-center color="${1|success,error,warning,info|}">Log in</v-btn> 
        </v-form>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  name: 'login',
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}

</script>
<style>

</style>
