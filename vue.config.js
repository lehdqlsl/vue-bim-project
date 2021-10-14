module.exports = {
    lintOnSave: false,
    css: {
        requireModuleExtension: false
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(csv|xlsx|xls)$/,
                    loader: 'file-loader',
                    options: {
                        name: `files/[name].[ext]`
                    }
                }
            ],
        },
    },
}
