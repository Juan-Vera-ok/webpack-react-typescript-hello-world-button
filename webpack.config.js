const path = require ('path');
const HtmlWebpackplugin = require ('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer:{
        port: 4000
    },
    resolve:{
        extensions: ['.js','.jsx','.ts','.tsx']
    },
    module: {
        rules:[
            {
                test:/\.tsx$/,
                use : ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackplugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
}