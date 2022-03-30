const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const fs = require('fs-extra')
const { exec } = require("child_process");
//const WatchExternalFilesPlugin=require('webpack-watch-files-plugin')
const Watchpack = require("watchpack");

const wp = new Watchpack({
    aggregateTimeout: 1000,
    poll: true,
    followSymlinks: true,
    ignored: "**/.git"
});

// wp.watch({
//     files: ['**/PageLogin.lab'],
//     directories:['src'],
//     poll: 1000,
//     startTime: Date.now() - 10000
// });

wp.on("change", function(filePath, mtime, explanation) {
    if(!filePath.endsWith('.lab'))return;
    /*console.log('file change:',filePath);
    exec(Lab1CompilerPath, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });*/
});

module.exports = (env, argv) => {

    const isDevelopment = argv.mode !== 'production'
    const outputDir = path.join(__dirname, 'dist/wwwroot')
    let startExecutedOnce,endExecutedOnce=false;

    return {
        entry: './src/index.ts',
        devtool: 'source-map',
        mode: isDevelopment ? "development" : 'production',
        devServer: {
            static: outputDir,
            port: 3001,
            historyApiFallback: true,
            hot: true,
        },
        output: {
            filename: 'bundle.js',
            path: outputDir,
            publicPath: "/"
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js','.scss'],
            plugins: [
                new TsconfigPathsPlugin({baseUrl:'.'})
            ]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,//required for ForkTsCheckerWebpackPlugin
                        }
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.module\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                import: false,
                                modules: true
                            }
                        }
                    ],
                    include: /\.module\.css$/
                },
                {
                    test: /\.module\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader"
                        },
                        "sass-loader"
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /\.module.(s(a|c)ss)$/,
                    use: [
                        "style-loader",// Creates `style` nodes from JS strings
                        "css-loader",// Translates CSS into CommonJS
                        "sass-loader",// Compiles Sass to CSS
                    ],
                },
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new ForkTsCheckerWebpackPlugin(),//used to compile ts faster
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            }),
            // new WatchExternalFilesPlugin.default({
            //     files: [
            //         './src/PageLogin.lab',
            //     ]
            // }),
            new WebpackShellPluginNext({
                dev:false,
                onBuildStart:{
                    scripts: [
                        () => {
                            if(startExecutedOnce)return;
                            console.log('(webpack)onBuildStart');
                            //Not used any more.
                            // fs.removeSync('dist')
                            // fs.ensureDirSync('dist');
                            // fs.copySync('src/index.html', 'dist/index.html')
                            // fs.copySync('src/assets', 'dist/assets')
                            startExecutedOnce=true;
                        }
                    ],
                    blocking: true,
                    parallel: false
                },
                // onBeforeBuild:{
                //     scripts:[
                //         ()=>{
                //         console.log('(webpack)onBeforeBuild')
                //             exec("C:\\Projetos\\Lab1\\DotNet\\Compiler\\bin\\Debug\\net5.0\\Compiler.exe", (error, stdout, stderr) => {
                //                 if (error) {
                //                     console.log(`error: ${error.message}`);
                //                     return;
                //                 }
                //                 if (stderr) {
                //                     console.log(`stderr: ${stderr}`);
                //                     return;
                //                 }
                //                 console.log(`stdout: ${stdout}`);
                //             });
                //         }
                //     ],
                //     blocking:true,
                //     parallel:false,
                // },
                onBuildEnd:{
                    scripts: [
                        ()=>{
                            if(endExecutedOnce)return;
                            console.log('(webpack)onBuildEnd')
                            endExecutedOnce=true;
                        }
                    ],
                    blocking: false,
                    parallel: true
                }
            })
        ],
        /* todo check why this stopped working in dev optimization: {
            splitChunks: {
                cacheGroups: {
                    bootstrap: {
                        filename: 'bootstrap.bundle.js',
                        test: /[\\/]src[\\/]bootstrap[\\/]/,//bootstrap in one chunk
                        chunks: 'all'
                    },
                    material: {
                        filename: 'material.bundle.js',
                        test: /[\\/]src[\\/]material[\\/]/,//material in one chunk
                        chunks: 'all'
                    },
                }
            },
        },*/

    }
};
