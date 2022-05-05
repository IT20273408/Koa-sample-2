const path = require('path');

const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');

module.exports = {

    entry : './src/index.js',

    output : {

        path : path.join(__dirname, '/dir'),

        filename : 'bundle.js'

    },

    mode: "development",

    plugins : [

        new HTML_WEBPACK_PLUGIN({

            template : './src/index.html'

        })

    ],

    module : {

        rules : [

            {

                test : /.js$/,

                exclude : /node_modules/,

                use : {

                    loader : 'babel-loader',

                    options : {

                        presets : ['@babel/preset-env', '@babel/preset-react']

                    }

                }

            }

        ]

    }

}