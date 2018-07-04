const path = require('path');
module.exports = function(env){
    const config = {
        entry: {
            'dist/index': path.join(__dirname, 'src', 'index.ts'),
            'test/test': path.join(__dirname, 'src', 'test.ts')
        },
        output: {
            path: __dirname,
            filename: '[name].js'
        },
        module: {
            rules: [{
                test: /.tsx?$/,
                use: ['ts-loader']
            }]
        },
        resolve: {
            extensions: ['.ts']
        },
        mode: 'development'
        
    };
    return config;
}