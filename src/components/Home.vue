<template>
    <v-container>
        <v-btn to="/signup" color="${1|success,error,warning,info|}">Sign-up</v-btn>
        <v-btn  to="/login" color="${1|success,error,warning,info|}">Login</v-btn>
    </v-container>
</template>
<script>
export default {
  name: 'home',
}
</script>

