import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const cssloader = {
        test: /\.s[ac]ss$/i,
        use: [
            // создает 'style' nodes из js строк
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: true,
                }
            },
            // Транслипует css в CommonJS
            //компилирует sass в css
            "sass-loader",
        ],
    }

    // babel не нужен т.к. разработка на js))
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssloader
    ]
}
