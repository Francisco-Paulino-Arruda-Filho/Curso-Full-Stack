import path from 'path';

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'ts'),
        filename: 'bundle.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
}