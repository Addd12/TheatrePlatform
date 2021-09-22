<template>
    <div>

<!--      <div id="nav">-->
<!--        <nav class="navbar navbar-light bg-white fixed-top shadow-sm">-->
<!--          <a class="navbar-brand" href="/">Theater Marketplace</a>-->
<!--        </nav>-->
<!--      </div>-->

      <router-view></router-view>
    </div>
</template>

<script>


export default{
  name: 'userlogin',
  data (){
    return {

    }
  },

  mounted (){

  },
}
</script>

<style>
  #userlogin {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-family: "Nunito", sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.6;
    color: #212529;
    text-align: left;
    webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  }

  body{
    width: 100%;
    height: 100%;
    background-attachment: fixed;
    background-color: #f8fafc;
  }

  *, *::before, *::after {
    box-sizing: border-box;

  }

  #nav{
    padding-bottom: 70px;
  }
  .navbar .navbar-brand{
    color: #9500ae;
    font-weight: bold;
  }
  .navbar .navbar-brand:hover{
    color: #9500ae;
  }

</style>
