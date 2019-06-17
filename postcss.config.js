module.exports = {
    plugins: [
        // require('postcss-css-variables'),
        require('postcss-cssnext')({
            warnForDuplicates: false,
            features: {
                calc: false,
            },
        }),
        // require('postcss-merge-rules'),
    ],
};
