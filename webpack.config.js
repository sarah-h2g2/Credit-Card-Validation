const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true,
      hot: true,
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: {
          loader: "babel-loader",
          options: { 
            presets: ['@babel/preset-env', '@babel/react'],
            plugins:['@babel/plugin-proposal-class-properties']
          }
        }
         },
         {
          test: /\.js$/,
            use: ["react-hot-loader/webpack", 'eslint-loader'],
        },
         {
            test: /\.css$/,
            use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
         },

         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
         /**favicon: "./src/assets/favicon.ico"**/
      })
   ]
};