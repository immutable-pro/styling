module.exports = {
    babel: {
        plugins: [
            [
                "@compiled/babel-plugin",
                {
                    "importReact": true,
                    "cache": true
                }
            ]
        ]
    }
}
