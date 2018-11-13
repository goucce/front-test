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

.part {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 75vw;
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

p {
  width: 100%;
  text-align: left;
  margin: .5rem 0;
}
img {
  width: 100%;
  border: 1px solid black;
  margin-top: 1rem;
}
.code {
  text-align: left;
  font-family: monospace;
  background-color: rgb(225, 225, 225);
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem auto;
  width: fit-content;
}

</style>
