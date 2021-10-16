module.exports = {
    // "env": {
    //     "browser": true,
    //     "es2021": true
    // },
    // "extends": [
    //     "eslint:recommended",
    //     "plugin:react/recommended"
    // ],
    // "parserOptions": {
    //     "ecmaFeatures": {
    //         "jsx": true
    //     },
    //     "ecmaVersion": 13,
    //     "sourceType": "module"
    // },
    // "plugins": [
    //     "react"
    // ],
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "commonjs": true,
        "node": true
    },
    "rules": {
        "indent": ["error", 4],
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};
