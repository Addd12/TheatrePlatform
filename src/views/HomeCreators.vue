<template>
  <div>

    <div id="nav">
      <nav class="navbar navbar-light bg-white fixed-top shadow-sm justify-content-center">
        <div class="container">
          <router-link :to="{ name: 'CrDashBoard' }" class="navbar-toggler shadow-sm" @click="closeUsermenu()" exact>
              <i class="fas fa-home"></i>
<!--            <img src="{{ asset('modules/staticimgs/logo.png') }}" alt="Home" style="width:40px;">-->
<!--              actual logo-->
<!--            <span class="createricon createrIcon-createrNew" style="margin: 0px 5px;"></span>-->
          </router-link>
          <router-link :to="{ name: 'AddContent' }" class="navbar-toggler shadow-sm" @click="closeUsermenu"><i class="fas fa-plus"></i></router-link>
          <router-link :to="{ name: 'AllContents' }" class="navbar-toggler shadow-sm" @click="closeUsermenu"><i class="far fa-images"></i></router-link>
          <router-link :to="{ name: 'earningsecreter' }" class="navbar-toggler shadow-sm" @click="closeUsermenu"><i class="fas fa-euro-sign"></i></router-link>
          <a @click="openUsermenu()" class="navbar-toggler shadow-sm"><i class="far fa-user"></i></a>

        </div>
      </nav>
    </div>
<!--    right nav bar-->
    <div id="right-cart-panel">
      <br>
      <img src="https://i.ibb.co/25SxGTW/propic.png" class="rounded-circle center" alt="Cinque Terre">
      <div class="center mt-2">
        <span id="rightbar-name-style">Alice Blue</span><br>
        <span>@alice</span>
      </div>
      <div class="container right-menu-btn">
        <hr>
        <router-link :to="{name: 'crProfile'}" @click="closeUsermenu"><i class="far fa-id-badge"></i> Profile</router-link>
        <hr>
        <a href="#"><i class="fas fa-link"></i> Copy Profile Link</a>
        <hr>
        <router-link :to="{name: 'crVerification'}" @click="closeUsermenu"><i class="fas fa-user-check"></i> Verify Account</router-link>
        <hr>
        <router-link :to="{name: 'crInvoice'}" @click="closeUsermenu"><i class="fas fa-file-invoice"></i>  Invoice</router-link>
        <hr>
        <router-link :to="{name: 'settings'}" @click="closeUsermenu"><i class="fas fa-cog"></i> Settings</router-link>

        <hr>
        <a href="" @click="logoutUser"><i class="fas fa-sign-out-alt"></i> Logout</a>

      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery'
import router3 from "../router/routerlogin";


export default {
  name: 'Home',
  // components: {
  //   Homepage
  // }
  methods:{
    openUsermenu: function () {
      if(document.getElementById("right-cart-panel").style.width == "100%" || document.getElementById("right-cart-panel").style.width == "300px"){
        $('#right-cart-panel').animate({width: '0%'})
        $('#customupload').fadeIn();
      }else{
        if(window.innerWidth <= 667){
          $('#customupload').fadeOut();
          $('#right-cart-panel').animate({width: '100%'})
        }else{
          $('#right-cart-panel').animate({width: '300px'})
        }
      }
    },
    closeUsermenu: function (){
      // if(window.innerWidth <= 667){
      $('#right-cart-panel').animate({width: '0%'})
      $('#customupload').fadeIn();
        // }
    },
    logoutUser: function () {
      window.localStorage.clear();
      router3.push({name: 'userlogin'});
    },
  },
}
</script>

<style scoped>
  #nav{
    padding-bottom: 70px;
  }
  .center{
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }


  .navbar .navbar-toggler{
    font-size: x-large;
    padding: 5px 12px;
    border-radius: 50px;
    border: 0px;
    z-index: 5px;
    cursor: pointer;
  }

  .navbar .navbar-toggler:hover{
    color: #9500ae;
    background-color: #f7ebfa;
    /* border: 1px solid #9500ae; */

  }

  .navbar .navbar-toggler:last-child{
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50px;
  }
  .navbar .navbar-toggler:last-child:hover{
    border: 1px solid #f7ebfa;
  }

  .navbar .router-link-active{
    color: #9500ae;
  }
  .navbar .router-link-exact-active{
    color: #9500ae;
    background-color: #f7ebfa;
  }
  /* right user panel */

  #right-cart-panel{
    height: 100%;
    width: 0%;
    z-index: 20;
    position: fixed;
    top: 50px;
    right: 0;
    /* background: rgb(236, 239, 241); */
    background: rgb(255, 255, 255);
    transition: 0.5s;
    color: white;
    text-align: left;
    box-shadow: 0px 0px 15px 1px rgba(98, 0, 255, 0.3);
    color: rgba(0, 0, 0, 0.5);
  }

  #right-cart-panel img{
    margin-left: auto;
    margin-right: auto;
    width: 150px;
  }

  #right-cart-panel #rightbar-name-style{
    font-size: large;
    font-weight: bold;
  }

  #right-cart-panel .right-menu-btn hr{
    margin: 0px;
  }

  #right-cart-panel .right-menu-btn a{
    display:inline-block;
    width: 100%;
    padding: 15px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    /* background: rgba(0, 0, 0, 0.1); */
  }

  #right-cart-panel .right-menu-btn a:hover{
    background: #f7ebfa;
    color: #9500ae;
  }


  /* import navbar font */


  @font-face {
    font-family: 'createrNew';
    src:  url('/fonts/custom/createrNew.eot?fu6wrn');
    src:  url('/fonts/custom/createrNew.eot?fu6wrn#iefix') format('embedded-opentype'),
    url('/fonts/custom/createrNew.ttf?fu6wrn') format('truetype'),
    url('/fonts/custom/createrNew.woff?fu6wrn') format('woff'),
    url('/fonts/custom/createrNew.svg?fu6wrn#createrNew') format('svg');
    font-weight: 2000;
    font-style: normal;
    font-display: block;
  }

  .createricon {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'createrNew' !important;
    /* speak: never; */
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    color: #9500ae;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .createrIcon-createrNew:before {
    content: "\e905";
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }


  @media screen and (max-width: 600px) {
    .navbar .navbar-toggler{
      font-size: large;
    }

    .createricon {
      font-size: 22px;
    }

  }

</style>
