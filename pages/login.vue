<template>
  <div class="login">
    <CommonHeader/>
    <div class="login_form">
      <h1>ログイン</h1>
      <form @submit.prevent="login">
        <div >
          <input type="email" v-model="email" placeholder="メールアドレス" class=login_input required />
        </div>
        <div>  
          <input type="password" v-model="パスワード" placeholder="password" class="login_input" required />
        </div>
        <Nuxt-link to="/Home">  
          <button type="submit" class="login_btn">ログイン</button>
        </Nuxt-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("laravelJWT", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$router.push("/");
      } catch {
        alert("メールアドレスまたはパスワードが間違っております");
      }
    },
  },
};
</script>
<style scoped>
.login {
  background-color:black;
  height: 100vh;
}
.login_form {
   padding:20px 0;
   margin:100px auto;
   text-align:center;
   background-color: white;
   width:50%;
   height:30%;
   border-radius: 5%;
}
.login_input {
   margin:5px auto;
   width:50%;
}
.login_btn {
  margin:20px 0;
   width:30%;
   background-color: indigo;
   color:white;
   border-radius: 40%;
   padding:5px 20px;
}
</style>