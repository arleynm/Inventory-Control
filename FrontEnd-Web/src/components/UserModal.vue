<template>
  <div>
    <div class="fixed inset-0 flex items-center justify-center" v-if="showModal">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div class="bg-white p-8 rounded-md z-10 w-96">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Criar Usuário</h2>
          <button @click="closeModal" class="text-gray-600">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <form @submit.prevent="submitUser">
          <div class="mb-4">
              <label for="name" class="block text-sm font-semibold text-gray-600">Nome:</label>
              <input type="text" v-model="newUser.name" id="name" class="w-full border p-2 rounded-md">
          </div>

          <div class="mb-4">
              <label for="email" class="block text-sm font-semibold text-gray-600">Email:</label>
              <input type="email" v-model="newUser.email" id="email" class="w-full border p-2 rounded-md">
          </div>

          <div class="mb-4">
              <label for="permission" class="block text-sm font-semibold text-gray-600">Permissão:</label>
              <select v-model="newUser.permission" id="permission" class="w-full border p-2 rounded-md">
              <!-- Opções do seletor de permissão -->
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              </select>
          </div>

          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Salvar</button>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    showModal: Boolean,
    newUser: Object,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    submitUser() {
      this.$emit('submit', this.newUser);
    },
  },
};
</script>
  
