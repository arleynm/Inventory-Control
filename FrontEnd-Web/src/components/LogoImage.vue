<template>
    <div class="user-image-container">
      <img :src="userImageSrc" alt="User Image">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      userImageSrc: String,
    },
  };
  </script>
  
  <style scoped>
  .user-image-container {
    width: 50px; 
    height: 50px; 
    border-radius: 50%; 
    overflow: hidden;
    margin: 0 auto;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    display: block;
  }
  </style>