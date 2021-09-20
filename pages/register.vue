<template>
    <div class="register">
      <CommonHeader />
      <form @submit.prevent="register" class="form">
        <h1>新規登録</h1>
        <div>
          <pagesHome name="">
            <input type="text" v-model="name" placeholder="ユーザーネーム" class="input" required />
          </pagesHome>  
        </div>
        <div>
          <input type="email" v-model="email" placeholder="メールアドレス" class="input" required />
        </div>
        <div>
          <input type="password" v-model="password" placeholder="パスワード" class="input" required />
        </div>
        <nuxt-link to="/login">
          <button type="submit" class="button" >新規登録</button>
        </nuxt-link>  
      </form>
    </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    async register() {
      try {
        await this.$axios.post("http://localhost:8000/api/auth/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/login");
      } catch {
        alert("メールアドレスがすでに登録されています");
      }
    },
  },
};
</script>
<style scoped>
 .register{
   width:100vh;
   position: absolute;
  background-color: black;
  height: 100vh;
 }
 .form {
   padding:20px 0;
   margin:100px auto;
   text-align:center;
   background-color: white;
   width:50%;
   height:30%;
   border-radius: 5%;
 }
 .button{
   margin:20px 0;
   width:30%;
   background-color: indigo;
   color:white;
   border-radius: 40%;
   padding:5px 20px;
 }
 .input{
   margin:5px 0;
   width:50%;
 }
</style>