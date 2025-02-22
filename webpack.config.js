const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

module.exports = {
    module: {
      rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
        },
        {
        test: /\.html$/,
        include: path.join(__dirname, 'src/'),
        use: [
            {
            loader: "html-loader",
            options: { 
                minimize: true,
                interpolate: true 
            }
            }
        ]
        },
        {
        test: /\.css$/,
        use: [ 
            'style-loader', 
            'css-loader' 
        ]
        },
        {
        test: /\.scss$/,
        use: [  process.env.NODE_ENV !== 'production' ? 'style-loader' :                        MiniCssExtractPlugin.loader,
                "css-loader", 
                "sass-loader"
            ]
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename:"[id].css"
        })
      ]
  };