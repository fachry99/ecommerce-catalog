<template>
  <nav><router-link to="/">Men</router-link> <router-link to="/women">Women</router-link></nav>
  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f1f1f1;
}
a.router-link-active {
  text-decoration: none;
  color: #000;
  font-size: 18px; /* Increase the font size */
  font-weight: bold; /* Make the text bold */
  padding: 10px 20px; /* Add some padding */
  background-color: #e0e0e0; /* Add a background color */
  border-radius: 5px; /* Add rounded corners */
  transition: background-color 0.3s ease; /* Add a transition effect */
}

a.router-link-active:hover {
  background-color: skyblue; /* Change the background color on hover */
}
</style>
