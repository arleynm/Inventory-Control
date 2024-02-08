<template>
  <div>
    <h1 class="text-3xl text-center mt-7">
      <span class=" bg-[#ea580c] p-1 px-10 rounded-2xl text-white text-4xl">Inventory Control</span>
    </h1>
    <section class="text-center mt-40">
      <div class="inline-block bg-[#63605f] p-4 rounded-2xl">
        <h1 class="text-3xl font-bold text-white">Bem-Vindo ao Inventory Control</h1>
        <p class="text-lg text-white mt-4">Sua plataforma confiável para gerenciar o inventário de calçados de forma eficiente.</p>
        <p class="text-lg text-white mt-2">Aqui você pode acompanhar, organizar e otimizar o estoque de maneira simples e intuitiva.</p>
        <p class="text-lg text-white mt-2">Explore nossas funcionalidades e torne o controle de estoque uma tarefa fácil e eficaz.</p>
      </div>
    </section>

    <router-link to="/login" class="flex items-center justify-center mt-10">
      <button class="bg-[#f86535] text-[#f5f5f5] px-10 py-3 rounded-2xl text-lg">Login</button>
    </router-link>

    <div class="background-image"></div>
  </div>

  <footer class="bg-gray-800 text-white text-center py-2 absolute bottom-0 w-full">
    <p>&copy; 2024 Arley Augusto e Silva</p>
  </footer>
</template>

<script lang="ts">
// Lógica da página Home aqui
</script>


<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap');


  span{
    font-family: 'Inter', sans-serif;
  }


  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/shoes.png'); 
    background-size: cover; /* Cobrir toda a área, mantendo a proporção */
    background-position: center; /* Centralizar a imagem */
    opacity: 0.5; /* Ajuste a opacidade conforme necessário */
    z-index: -1; /* Coloque atrás do conteúdo principal */
  }


</style>