<template>
  <h2>Login</h2>
    <form @submit.prevent="login">
      <input 
      type="text"
      placeholder="Seu nome"
      >
      <input 
      type="password"
      placeholder="Sua senha"
      >
      <button type="submit">
        Login
      </button>
    </form>
</template>

<script setup>

  function Login(){
    console.log('login')
  }

</script>

<style lang="scss" scoped>

</style>
