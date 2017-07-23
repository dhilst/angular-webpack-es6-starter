var path = require('path');

module.exports = {
    entry: './app/app.js',
    output: { 
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { 
                exclude: /node_modules/,
                test: /\.js$/, 
                loader: 'babel-loader' 
            },
        ]
    }
}
