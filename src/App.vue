<template>
  <div id="app">
    <div class="links">
      <router-link to="/">Part One</router-link> |
      <router-link to="/parttwo">Part Two</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4rem;
}
.links {
  margin-bottom: 2rem;
  margin-top: 1rem;
}
hr {
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>
