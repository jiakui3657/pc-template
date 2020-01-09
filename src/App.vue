<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    //在页面加载时读取cookies里的状态信息
    if (this.$cookies.get("store")) {
      this.$store.replaceState(
        Object.assign({}, this.$store.state, this.$cookies.get("store"))
      );
    }

    //在页面刷新时将vuex里的信息保存到cookies里
    window.addEventListener("beforeunload", () => {
      if (this.$cookies.get("store")) {
        this.$cookies.set("store", this.$store.state, 2 * 60 * 60);
      } else {
        this.$cookies.set("store", {}, 2 * 60 * 60);
      }
    });
  }
};
</script>

<style lang="less"></style>
