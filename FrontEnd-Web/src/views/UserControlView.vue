<template>
  <div>
    <div class="main-content">
      <div class="navbar-space"></div>
  
      <div class="center-content">
          <div class="user-control">
            <i class="fas fa-user-cog mr-5 ml-2 text-3xl"></i>
            <span class="texto">Controle de Acesso</span>
          </div>
          <hr class="sidebar-separator">

          <div class="search-create">
            <div class="search-bar">
              <input class="input" type="text" v-model="searchQuery" placeholder="Buscar usuários" />
              <i class="fas fa-search"></i>
            </div>

            <button @click="openModal" class="create-button">
              <i class="fas fa-plus"></i> Criar
            </button>
            
            <user-modal
              :showModal="showModal"
              :newUser="newUser"
              @close="closeModal"
              @submit="submitUser"
            />
          </div>

          <div class="user-list">
            <table class="user-table">
              <thead>
                <tr>
                  <th class="column">Nome</th>
                  <th class="column">Email</th>
                  <th class="column">Permissão</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in userList" :key="user.id">
                  <td class="column">{{ user.name }}</td>
                  <td class="column">{{ user.email }}</td>
                  <td class="column">{{ user.permission }}</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  </div>
  <Sidebar />
</template>
  
<script>
import UserModal from '../components/UserModal.vue';

export default {
  components: {
    UserModal,
  },
  data() {
    return {
	      searchQuery: '',
        userList: [
          { id: 1, name: 'Usuário 1', email: 'user1@example.com', permission: 'Admin' },
          { id: 2, name: 'Usuário 2', email: 'user2@example.com', permission: 'User' },
        ],
      showModal: false,
      newUser: {
        name: '',
        email: '',
        permission: 'User',
      },
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    submitUser(newUser) {
      this.newUser = { name: '', email: '', permission: 'User' };
      this.closeModal();
    },
  },
};
</script>
  
<style scoped>
  .main-content {
    position: absolute;
    width: 95%;
    flex-direction: row;
    z-index: 1;
    flex: 1;
    margin-left: 5%;
    margin-top: 3%;
  }

  .sidebar-separator {
    border-top: 1px solid #000000;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
  

  .center-content {
    flex: 1; 
    padding: 20px;
  }
  
  .user-control {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .user-control i {
    margin-right: 30px;
  }
  .texto.light-theme{
    margin-top: 5px;
    font-size: 30px;
    color: #000000;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Arial', sans-serif;
  }

  .texto{
    margin-top: 5px;
    font-size: 30px;
    color: #000000;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Arial', sans-serif;
  }
  
  .search-create {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    flex: 1; 
  }

  .search-bar i {
    margin-right: 5px;
  }

  .input {
    width: 90%; /* Modificado para ocupar 90% da largura */
    padding: 5px;
    border: none;
    outline: none;
  }

  .create-button {
    font-weight: bold;
    margin-left: 10px;
    padding: 8px 12px;
    background-color: #109798;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .create-button i {
    margin-right: 5px;
  }
  
  .search-create input {
    width: 100%;
    margin-right: 10px;
  }

  .user-list {
    margin-top: 20px;
  }

  .user-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  .user-table th, .user-table td {
    border: 1px solid #ddd;
    padding: 12px; /* Adicione o espaçamento desejado aqui */
    text-align: left;
  }

  .user-table th {
    background-color: #f2f2f2;
  }

  .user-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .column {
    width: calc(100% / 3); /* Divida igualmente as colunas em 3 partes */
  }

</style>