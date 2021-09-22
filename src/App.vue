<template>
  <div v-if="this.userType == 'creator'">
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
      name: 'app',

      data (){
          return {

          }
      },

      mounted (){

      },
  }
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  color: #212529;
  text-align: left;
  background-color: #f8fafc;
  webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*, *::before, *::after {
  box-sizing: border-box;
}



</style>
