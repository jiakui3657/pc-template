<template>
  <div class="home">
    <div>{{ $store.state.userInfo.name }}</div>
    <div>{{ $store.state.size }}</div>
    <button @click="sumbit">登录</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {},
  methods: {
    sumbit() {
      // eslint-disable-next-line no-unused-vars
      let params = {
        username: "18229060103",
        password: "123456"
      };
      this.$http
        .fetchPost("/rest/saas_user/login.htm", params)
        .then(res => {
          window.console.log(res);
          this.$cookies.set("userToken", res.userToken, "2h");
          return Promise.resolve();
        })
        .then(() => {
          this.$store.dispatch("getUserInfo");
        });
    }
  }
};
</script>
