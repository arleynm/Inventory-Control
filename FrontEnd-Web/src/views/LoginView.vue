<template>
  <div class="flex h-screen">
    <div class="custom-container">
      <div class="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <h1 class="text-white text-4xl font-bold">Seja bem-vindo!</h1>
      </div>
    </div>

    <div class="w-1/2 p-8 flex justify-center" style="background-color: #e0eee7;">

      <form @submit.prevent="login"  style="width: 80%; max-width: 400px;">

        <img src="../assets/logo (3).png" alt="Imagem" class="w-60 ml-20">

        <h2 class="text-2xl font-bold mb-4 text-[#109798]">Login</h2>

        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="name" id="name" v-model="name" class="w-full p-3 border rounded">
        </div>

        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Senha:</label>
          <input type="password" id="password" v-model="password" class="w-full p-3 border rounde">
        </div>
        <custom-alert :message="errorMessage" type="error" v-if="errorMessage" />
        <button type="submit" class="bg-[#109798] text-white py-2 px-4 rounded border border-[#109798] transition duration-300 hover:bg-white hover:text-[#109798] hover:border-[#109798]">Entrar</button>
      </form>
    </div>
  </div>
</template>


<style scoped>
  .custom-container {
    width: 50%;
    background-size: cover;
    background-image: url('../assets/login.jpg');
  }
</style>

<script>
  import CustomAlert from '../components/Alert.vue';
  import { defineComponent } from 'vue';  
  import axios from 'axios';

  export default defineComponent({
    components: {
      CustomAlert
    },
    data() {
      return {
        name: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async login() {
        this.errorMessage = '';
        try {
          const response = await axios.post('http://localhost:3333/users/login', {
            name: this.name,
            password: this.password,
          });
          if (response.status === 200) {

            this.$router.push('/inicial');
          }

        } catch (error) {
          if (error.response && error.response.status === 400) {
            this.errorMessage = 'Credenciais inválidas. Verifique seu nome e senha.';
          } else {
            this.errorMessage = 'Ocorreu um erro ao processar a solicitação. Tente novamente mais tarde.';
          }
        }
      },
    },
  });
</script>
