module.exports = {
  //axios域代理，解决axios跨域问题
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "https://umall.haoxuer.com/bigworld",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
};
