<template>
    <div v-if="isVisible" class="custom-alert" :class="alertType">
      <p>{{ message }}</p>
    </div>
  </template>
  
<script>
  export default {
    props: {
      message: String,
      type: String
    },
    data() {
      return {
        isVisible: true
      };
    },
    computed: {
      alertType() {
        return `alert-${this.type}`;
      }
    },
    mounted() {
      // Define um temporizador para ocultar o alerta após 5 segundos (ajuste conforme necessário)
      setTimeout(() => {
        this.isVisible = false;
      }, 3000);
    }
  };
</script>
  
<style scoped>
  .custom-alert {
    position: fixed;
    top: 1em;
    right: 1em;
    padding: 1em;
    border: 1px solid;
    border-radius: 4px;
    z-index: 999; /* Garante que o alerta apareça acima de outros elementos */
    transition: opacity 0.5s ease-in-out; /* Adiciona uma transição de opacidade para um efeito suave */
  }
  
  .alert-error {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
  }
  
  .alert-success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
  }
</style>