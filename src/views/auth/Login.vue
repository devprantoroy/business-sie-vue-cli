<template>
      <!-- contact  section -->
      <div id="contact" class="contact ">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2><strong class="yellow">Login</strong><br>Login Here</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-8 offset-md-2">
                  <form id="post_form" class="contact_form" @submit.prevent="fromSubmit()">
                     <div class="row">
                        <div class="col-md-12">
                           <input class="contact_control" placeholder="Email" type="email" name="Email" v-model="form.email"> 
                        </div>
                       <div class="col-md-12">
                           <input class="contact_control" placeholder="Password" type="password" name="password" v-model="form.password">                          
                        </div>
                        <div class="col-md-12">
                           <button class="send_btn" type="submit">Login</button>
                        </div>
                        <div class="col-md-12 text-center mt-5">
                              <p>Not have a account? <router-link :to="{name : 'register'}"> Register </router-link> </p>
                        </div>
                        </div>
                  </form>
                  </div>
               </div>
            </div>
         </div>
      <!-- end contact  section -->
</template>
<script>
import axios from 'axios';

export default{
    Name : "Login",
    data : () => ({
      form :{
         email : '',
         password : ''
      }
    }),

    methods : {
      fromSubmit(){
         axios.post('login', this.form).then((res) => {
            
            axios.get('user').then((response) =>{
               console.log(response);
            })
         })
        
      }
    }
}
</script>