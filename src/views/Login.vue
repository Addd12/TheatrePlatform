<template>
  <div class="mt-3 pt-sm-5">

    <div class="container">
      <div class="row">
<!--        title image-->
<!--          not view in mobile-->
        <div class="col-sm-5 d-none d-sm-block">
          <div class="container headingTitle mt-5 pt-5">
            <img src="https://i.ibb.co/bPHysG9/film-reel.png" alt="Logo" width="90" height="90">
              <h1 class="ml-3">THEATER MARKETPLACE</h1>
          </div>
<!--          not view in mobile-->
          <div id="accordion">
            <div class="card text-center">
              <div class="card-header alert-info">
                <a class="d-block collapsed card-link pt-2 pb-2" data-toggle="collapse" href="#collapseOne">Don’t have an account? (Click here)</a>
              </div>
              <div id="collapseOne" class="collapse show" data-parent="#accordion">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-6 pt-2 pb-2">
                      <router-link :to="{name: 'VrReg'}"><h1><i class="fas fa-binoculars"></i></h1>  Register as viewer!</router-link>
                    </div>
                    <div class="col-sm-6 pt-2 pb-2">
                      <router-link :to="{name: 'CrReg'}"><h1><i class="fas fa-star-half-alt"></i></h1> Register as Content Creator!</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

<!--        title only view in mobile-->

        <div class="col-sm-6 d-block d-sm-none">
          <div class="container headingTitle mb-3">
              <img src="https://i.ibb.co/bPHysG9/film-reel.png" alt="Logo" width="30" height="30">
              <h3 class="text-center">THEATER MARKETPLACE</h3>
          </div>

        </div>

<!--        login form-->
        <div class="offset-sm-1 col-sm-6 loginCardStyle pt-sm-5 mt-sm-5">
          <div class="card shadow-sm">
            <div class="card-body">
              <h3> <strong>Login</strong></h3><hr>
              <form @submit="authLoginTry" id="loginForm">

                <!--            show error alert-->
                <div v-if="errorLogin" class="alert alert-danger alert-dismissable">
                  <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                  <strong>Username or password not matched.</strong>
                </div>

                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input v-model="username" type="text" class="form-control" placeholder="username" id="email" required>
                </div>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input v-model="password" type="password" class="form-control" placeholder="password" id="pwd" required autocomplete="off">
                </div>
                <button class="btn fromSubmitBtnStyle float-right">Login</button>
                <a href="#" id="forgetPasslinktxt">Forgot password?</a>
              </form>
            </div>
          </div>
        </div>
      </div>

<!--      only view in mobile-->
      <div class="row">
        <div class="col-sm-6 d-block d-sm-none mt-4">
          <div id="accordion">
          <div class="card text-center">
            <div class="card-header alert-info">
              <a class="d-block collapsed card-link pt-2 pb-2" data-toggle="collapse" href="#collapseOne">Don’t have an account? (Click here)</a>
            </div>
            <div id="collapseOne" class="collapse" data-parent="#accordion">
              <div class="card-body">
                <div class="row">
                  <div class="col-6 pt-2 pb-2">
                    <router-link :to="{name: 'VrReg'}"><h1><i class="fas fa-binoculars"></i></h1>  Register as viewer!</router-link>
                  </div>
                  <div class="col-6 pt-2 pb-2">
                    <router-link :to="{name: 'CrReg'}"><h1><i class="fas fa-magic"></i></h1> Register as Content Creator!</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: "userlogin",
    data(){
        return{
          username: "",
          password: "",
          errorLogin: false,
          authToken: "dfasghaAFFdgagSdASf324rew4t665623432fsdgfgdf@fsadt46%^4",
        }
    },

    mounted() {

      // disable form submit
        $("#loginForm").submit(function(e) {
          e.preventDefault();
        });


    },

  methods: {
      authLoginTry: function (){
          this.getIPaddress()

          // make login api request

          if(this.username == "creator" && this.password == "123456"){
              // successfully logged in creator
            localStorage.setItem("username", this.username)
            localStorage.setItem("authToken", this.authToken)
            window.location.href = "";

          }else if(this.username == "viewer" && this.password == "123456"){
            // successfully logged in viewer
            localStorage.setItem("username", this.username)
            localStorage.setItem("authToken", this.authToken)
            window.location.href = "";

          }else{
            // login failed
            this.errorLogin = true;
          }
      },

      getIPaddress: function (){
        // cloud flare api for ip tracking
        $.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
          localStorage.setItem("userIP", data.ip)
        });
      },
    },

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Boogaloo&display=swap');

  .headingTitle{
    font-family: 'Boogaloo', cursive;
    color: #9500ae;
  }


  #accordion a{
    color: navy;
    text-decoration: none;
    font-weight: bold;
  }
  #accordion .col-sm-6:hover{
    background: #f7ebfa;
  }

  #accordion .row, #accordion .card-header, #accordion .card-body, #accordion .col-sm-6{
      padding: 0;
      margin: 0;
    }

  .fromSubmitBtnStyle{
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    box-shadow: 2px 1px 5px #bf66ce;
    float: right;
    width: 80px;
  }

  .fromSubmitBtnStyle:hover{
    color: #9500ae;
    background: #f7ebfa;
  }

  #forgetPasslinktxt{
    color: #9500ae;
  }

</style>