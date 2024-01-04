// vue.config.js
module.exports = {
  // If your app is not in the root of your repository, specify the publicPath
  // publicPath: '/your-app/',

  // Output directory for the build
  outputDir: 'dist',

  // Set the assets directory
  assetsDir: 'assets',

  // Configure the production server
  devServer: {
    // Your Vercel app's serverless functions endpoint
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9000', // Change this to your serverless functions endpoint
        pathRewrite: { '^/.netlify/functions': '' },
      },
    },
  },
};
