import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    const cssloader = {
        test: /\.s[ac]ss$/i,
        use: [
            // создает 'style' nodes из js строк
            "style-loader",
            // Транслипует css в CommonJS
            "css-loader",
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
