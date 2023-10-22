const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {

      '/server': {
        target: 'http://localhost:8099/',//以/server代替http://localhost:8099/就不会产生跨域了
        changeOrigin: true,
        ws: false, // 修改这里
        pathRewrite:{
          "^/server":""
        }
      }

    }
  }
})
