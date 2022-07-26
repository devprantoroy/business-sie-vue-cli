<template>
      <!-- contact  section -->
      <div id="contact" class="contact ">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2><strong class="yellow">Register</strong><br>Join our team</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-8 offset-md-2">
                  <form id="post_form" class="contact_form" @submit.prevent="fromSubmit()">
                     <div class="row">
                        <div class="col-md-12 ">
                           <input class="contact_control" placeholder="Name" type="text" name="name" v-model="form.name"> 
                        </div>
                        <div class="col-md-12">
                           <input class="contact_control" placeholder="Email" type="email" name="email" v-model="form.email"> 
                        </div>
                        <div class="col-md-12">
                           <input class="contact_control" placeholder="Phone Number" pattern="[0-9]+" type="text" name="mobile" v-model="form.mobile">                          
                        </div>
                         <div class="col-md-12">
                           <input class="contact_control" placeholder="Password" type="password" name="password" v-model="form.password">                          
                        </div>
                        <div class="col-md-12">
                           <input class="contact_control" placeholder="Confirm Password" type="password" name="confirm_password" v-model="form.confirm_password">                          
                        </div>
                        
                        <div class="col-md-12">
                           <button type="submit" class="send_btn">Register</button>
                        </div>

                         <div class="col-md-12 text-center mt-5">
                              <p>Already have an account? <router-link :to="{name : 'login'}"> Login </router-link> </p>
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
    Name : "Contact",
    data : () =>(
      {
      
      form : {
         name : '',
         email : '',
         mobile : '',
         password : '',
         confirm_password : '',
      },
      errors : []
    
    }
    ),
    methods : {
      fromSubmit(){
         axios.post('/register',this.form).then((res)=> {
            console.log(res);
            this.$router.push({name: "login"});
         })
      }
    }
}
</script>