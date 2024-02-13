import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from './User';

export const useCounterStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'));
  const storedUser = localStorage.getItem('user');
  const user = ref<User | null>(storedUser ? JSON.parse(storedUser) : null);

  function setToken(tokenValue: string | null) {
    localStorage.setItem('token', tokenValue || ''); // Tratando nulo
    token.value = tokenValue;
  }

  function setUser(userValue: User | null) {
    localStorage.setItem('user', JSON.stringify(userValue || null)); // Tratando nulo
    user.value = userValue;
  }

  return {
    setToken,
    setUser
  };
});