<template>
  <main class="flex">
  <body class=" min-h-screen font-custom bg-gradient-to-br from-grad-1a to-grad-1b">
    <img class="mt-10 ml-12 lg:mt-16 lg:ml-40" src="../src/assets/logo.svg" alt="">
    <img class="mt-10 w-screen lg:hidden" src="../src/assets/hero-mobile.jpg" alt="">
    <article class=" pt-20 text-center text-5xl lg:text-left lg:ml-40 lg:text-7xl lg:mt-6">
      <h1 class=" font-light text-red-pale tracking-widest">WE'RE</h1>
      <h2 class=" font-semibold text-red-gray tracking-widest">COMMING</h2>
      <h3 class=" font-semibold text-red-gray tracking-widest">SOON</h3>
      <p class=" pt-10 px-4 text-center text-base font-semibold text-red-pale lg:text-left lg:text-lg lg:font-normal lg:w-2/3">
        Hello fellow shoppers! We're currently building 
        our new fashion store. Add your email bellow
        to stay up-to-date with announcements and our launch deals.
      </p>
      <form class="flex  my-10 rounded-full border-2 border-opacity-30 border-red-pale mx-5 w-11/12 lg:w-2/3" action="">
         <input v-model="email" class=" text-red-pale focus:outline-none text-xl px-5 w-full h-12 rounded-l-full" placeholder="Email Address" type="text">
         <div @click="submit()" class=" shadow-lg cursor-pointer rounded-full w-1/4 bg-gradient-to-br from-grad-2a to-grad-2b"><img class=" h-6  my-2.5 mx-auto" src="../src/assets/icon-arrow.svg" alt=""></div>
      </form>

      <div :class="{ hidden : !error, flex : error}"  class=" -mt-6 h-16 ml-7">
        <img class="mr-2 h-6" src="../src/assets/icon-error.svg" alt="">
        <h1 class=" mt-0.5 text-sm text-red">Please enter correct email address</h1>
      </div>

    </article>
  </body>
  <img class="h-screen hidden lg:flex" src="../src/assets/hero-desktop.jpg" alt="">
  </main>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      email : "",
      error : false,
    }
  },

  methods: {
    submit(){

        if(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
          console.log("true")
          this.error = false;
        }

        else{
          console.log("false");
          this.error = true;
        }



    }
  },
}
</script>