import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    // babel не нужен т.к. разработка на js))
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
    ]
}
