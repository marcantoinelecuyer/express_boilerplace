import dotenv from "dotenv-webpack"

module.exports = {
    entry: "./src/script.js",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
    output: {
        path: 'dist',
        filename: "bundle.js",
    },
    mode: "production",
    plugins: [
        new dotenv()
      ]
};