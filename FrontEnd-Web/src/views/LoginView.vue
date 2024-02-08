<template>
  <div class="flex h-screen">
    <!-- Div com imagem de fundo -->
    <div class="custom-container">
    <!-- Conteúdo opcional dentro da div com a imagem de fundo -->
      <div class="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <h1 class="text-white text-4xl font-bold">Seja bem-vindo!</h1>
      </div>
    </div>
    <!-- Formulário de login -->
    <div class="w-1/2 p-8 flex items-center justify-center" style="background-color: #FFEDD1;">
      <form @submit.prevent="login" style="width: 80%; max-width: 400px;">
        <h2 class="text-2xl font-bold mb-4 text-orange-500">Login</h2>

        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="name" id="name" v-model="name" class="w-full p-3 border rounded">
        </div>

        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Senha:</label>
          <input type="password" id="password" v-model="password" class="w-full p-3 border rounde">
        </div>

        <button type="submit" class="bg-orange-500 text-white py-2 px-4 rounded border border-orange-500 transition duration-300 hover:bg-white hover:text-orange-500 hover:border-orange-500">Entrar</button>
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
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      name: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3333/users/login', {
          name: this.name,
          password: this.password,
        });

        // Tratar a resposta do back-end
        if (response.data.token) {
          // Login bem-sucedido
          console.log(response.data.message);
        } else {
          // Exibir mensagem de erro
          console.error(response.data.message);
        }
      } catch (error) {
        // Tratar erros de requisição
        console.error('Erro ao realizar o login:', error.message);
      }
    },
  },
});
</script>
