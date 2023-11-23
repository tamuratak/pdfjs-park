export default {
    build: {
      target: "es2022",
      minify: false
    },
    esbuild: {
      target: "es2022"
    },
    optimizeDeps:{
      esbuildOptions: {
        target: "es2022",
      }
    }
  }
