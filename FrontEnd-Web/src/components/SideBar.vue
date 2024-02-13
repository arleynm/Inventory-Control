<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Ji7P9F5MzG7N2Uby5q2t0En5rN" crossorigin="anonymous">
 <div :class="{ 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme }">
    <nav :class="['navbar', { 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme }]">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-bold ml-14">Inventory Control</h2>
        <div class="flex items-center">
          <span id="sunIcon" class="sun-icon">🔆</span>
          <input type="checkbox" id="switch" v-model="isDarkTheme" />
          <label for="switch"></label>
          <span id="moonIcon" class="moon-icon pr-10 pl-2" >🌙</span>
          <router-link to="/login" class="block py-2 px-4 hover:bg-[#FF0000] rounded" tag="a">
            <i class="fas fa-sign-out-alt"></i> Sair
          </router-link>
        </div>
      </div>
    </nav>

    <aside :class="['sidebar', { 'expanded': isSidebarExpanded, 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme }]">
      <button @click="toggleSidebar" class="text-white p-2 focus:outline-none ml-4 mb-2">
        <i class="fas fa-bars"></i>
      </button>
      <hr class="sidebar-separator">
      <nav>
        <ul>
          <li>
            <router-link to="/perfil" class="block py-2 px-4 hover:bg-[#77bcbc] bort" tag="a">
              <i class="fas fa-random mr-2 ml-2"></i>
              <span v-show="isSidebarExpanded">Tipo Movimentação</span>
            </router-link>
          </li>
          <hr class="sidebar-separator">
          <li>
            <router-link to="/perfil" class="block py-2 px-4 hover:bg-[#77bcbc] bort" tag="a">
              <i class="fas fa-box mr-2 ml-2"></i>
              <span v-show="isSidebarExpanded">Produtos</span>
            </router-link>
          </li>
          <hr class="sidebar-separator">
          <li>
            <router-link to="/perfil" class="block py-2 px-4 hover:bg-[#77bcbc] bort" tag="a">
              <i class="fa-sharp fa-solid fa-right-left mr-2 ml-2"></i>
              <span v-show="isSidebarExpanded">Movimentações</span>
            </router-link>
          </li>
          <hr class="sidebar-separator">
          <li>
            <router-link to="/perfil" class="block py-2 px-4 hover:bg-[#77bcbc] bort" tag="a">
              <i class="fas fa-network-wired mr-2 ml-2"></i>
              <span v-show="isSidebarExpanded">Categorias</span>
            </router-link>
          </li>
          <hr class="sidebar-separator">
          <li>
            <router-link to="/perfil" class="block py-2 px-4 hover:bg-[#77bcbc] bort" tag="a">
              <i class="fas fa-money-check mr-2 ml-2"></i>
              <span v-show="isSidebarExpanded">Relatórios</span>
            </router-link>
          </li>
          <hr class="sidebar-separator">
          <li>
            <router-link to="/perfil" class="block py-2 px-4 hover:bg-[#77bcbc] bort" tag="a">
              <i class="fas fa-user-cog mr-2 ml-2"></i>
              <span v-show="isSidebarExpanded">Controle de acesso</span>
            </router-link>
          </li>
        </ul>
        <hr class="sidebar-separator">

      </nav>
        <div v-if="isSidebarExpanded" class="username-container">
          <span>Nome de Usuário</span>
        </div>
    </aside>
  </div>
</template>

<script>
import UserImage from './LogoImage.vue'; 

export default {
  components: {
    'user-image': UserImage, 
  },
  data() {
    return {
      isSidebarExpanded: false,
      isDarkTheme: false,
      userImageSrc: '../assets/logo.jpg',
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarExpanded = !this.isSidebarExpanded;
    },
  },
};

</script>

<style scoped>
  .sidebar {
    width: 70px; 
    transition: width 0.4s ease;
    background-color: #109798;
    color: white;
    height: 100%;
    min-height: 100vh;
  }

  .sidebar.expanded {
    width: 20%; 
  }

  .sidebar nav ul {
    list-style: none;
    padding: 0;
  }

  .sidebar nav ul li a {
    display: flex;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    text-decoration: none;
    color: white;
  }

  .sidebar nav ul li a i {
    margin-right: 10px;
  }

  .sidebar nav ul li a span {
    display: none;
    margin-left: 10px;
  }

  .sidebar.expanded nav ul li a span {
    display: inline;
  }

  .sidebar-separator {
    border-top: 1px solid #ffffff; 
  }

  input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 70px;
    height: 35px;
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  input:checked + label {
    background: #316073;
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 130px;
  }

  .sun-icon,
  .moon-icon {
  font-size: 24px;
  margin-right: 10px; 
  }

  .dark-theme {
    background-color: #1a202c; 
    color: #ffffff; 
  }

  .light-theme {
    background-color: #ffffff; 
    color: #1a202c; 
  }

  .sidebar.dark-theme {
    background-color: #324252; 
    color: #ffffff; 
  }


  .sidebar.light-theme {
    background-color: #109798; 
    color: #1a202c; 
  }

  .navbar.dark-theme {
    padding: 6px;
    background-color: #324252;
    color: #ffffff;
  }

  .navbar.light-theme {
    padding: 6px;
    background-color: #109798;
    color: #ffffff;
  }

  .username-container {
    margin-top: auto; 
    padding: 1rem;
    text-align: center;
    color: #ffffff; 
  }


</style>