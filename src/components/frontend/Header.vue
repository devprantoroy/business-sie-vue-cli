<template>
    <header>
    <!-- header inner -->
    <div class="header">
      <div class="header_to d_none">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <ul class="lan">
                <li><i class="fa fa-globe" aria-hidden="true"></i> Language : <img src="/frontend/images/fleg.png" alt="#" /></li>
              </ul>
              <form action="#">
                <div class="select-box">
                  <label for="select-box1" class="label select-box1"><span class="label-desc">English</span> </label>
                  <select id="select-box1" class="select">
                    <option value="Choice 1">English</option>
                    <option value="Choice 1">Falkla</option>
                    <option value="Choice 2">Germa</option>
                    <option value="Choice 3">Neverl</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="col-md-6 col-sm-6 ">
              <ul class="social_icon1">
                <li> F0llow Us
                </li>
                <li> <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                </li>
                <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                <li> <a href="#"> <i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="header_midil">
        <div class="container">
          <div class="row d_flex">
            <div class="col-md-4 col-sm-4 d_none">
              <ul class="conta_icon">
                <li><a href="#"><i class="fa fa-phone" aria-hidden="true"></i> Call Us : +01 1234567890</a> </li>
              </ul>
            </div>
            <div class="col-md-4 col-sm-4 ">
              <a class="logo" href="#"><img src="/frontend/images/logo.png" alt="#" /></a>
            </div>
            <div class="col-md-4 col-sm-4 d_none">
              <ul class="conta_icon ">
                <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i> demo@gmail.com</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="header_bo">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-7">
              <nav class="navigation navbar navbar-expand-md navbar-dark ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample04">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name : 'home'}"> Home </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name : 'about'}">about</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name : 'service'}">services</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name : 'team'}">team </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name : 'clients'}">Clients</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name : 'contact'}"> contact us </router-link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="col-md-3 col-sm-5 d_none">
              <ul class="sign">
                <li><router-link class="sign_btn" :to="{name: 'register'}">sign up now</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default{
    Name: "Header"
}
</script>
<style>
 a.router-link-active { 
    color: #ffffff;
     background-color : #f2db18;
 }
</style>